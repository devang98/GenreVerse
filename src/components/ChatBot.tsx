import { Bot, Loader2, MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import type { ChatMessage } from '../types/chat';

const STORAGE_KEY = 'genreverse-chat-history';

const starterPrompts = [
  'Compare roguelike and roguelite',
  'What genre should I try if I like planning?',
  'Suggest a beginner-friendly action genre',
];

function renderMessage(content: string) {
  const markdownLinkPattern = /\[([^\]]+)\]\((\/genres\/[^)]+)\)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = markdownLinkPattern.exec(content))) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    parts.push(
      <a href={match[2]} key={`${match[2]}-${match.index}`}>
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.length > 0 ? parts : content;
}

function readStoredMessages(): ChatMessage[] {
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored) as ChatMessage[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function getCurrentGenreId(pathname: string) {
  const match = pathname.match(/^\/genres\/([^/]+)/);
  return match?.[1];
}

export function ChatBot() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => readStoredMessages());
  const [draft, setDraft] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const currentGenreId = useMemo(() => getCurrentGenreId(location.pathname), [location.pathname]);

  useEffect(() => {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-12)));
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  async function sendMessage(content: string) {
    const trimmed = content.trim();

    if (!trimmed || isLoading) {
      return;
    }

    setError('');
    setDraft('');
    setIsOpen(true);
    setIsLoading(true);

    const nextMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmed }];
    setMessages([...nextMessages, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: nextMessages, currentGenreId }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Chat request failed');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let isStreamDone = false;

      while (!isStreamDone) {
        const { done, value } = await reader.read();
        isStreamDone = done;

        const chunk = value ? decoder.decode(value, { stream: true }) : '';
        if (!chunk) {
          continue;
        }

        setMessages((current) => {
          const updated = [...current];
          const last = updated[updated.length - 1];

          if (last?.role === 'assistant') {
            updated[updated.length - 1] = { ...last, content: `${last.content}${chunk}` };
          }

          return updated;
        });
      }
    } catch {
      setError("I couldn't reach the guide service. Try again in a moment.");
      setMessages(nextMessages);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(draft);
  }

  return (
    <div className="chatbot-shell">
      {isOpen && (
        <section className="chatbot-panel" aria-label="GenreVerse chat guide">
          <div className="chatbot-header">
            <span className="chatbot-avatar">
              <Bot size={20} aria-hidden="true" />
            </span>
            <div>
              <h2>Genre guide</h2>
              <p>Ask about genres, mechanics, and recommendations.</p>
            </div>
            <button className="chatbot-icon-button" onClick={() => setIsOpen(false)} type="button">
              <X size={18} aria-hidden="true" />
              <span className="sr-only">Close chat</span>
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.length === 0 && (
              <div className="chatbot-empty">
                <p>Try a starter prompt.</p>
                <div className="chatbot-starters">
                  {starterPrompts.map((prompt) => (
                    <button key={prompt} onClick={() => void sendMessage(prompt)} type="button">
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((message, index) => (
              <div className={`chatbot-message chatbot-message-${message.role}`} key={`${message.role}-${index}`}>
                {message.content
                  ? renderMessage(message.content)
                  : message.role === 'assistant' && isLoading
                    ? 'Thinking...'
                    : ''}
              </div>
            ))}
          </div>

          {error && <p className="chatbot-error">{error}</p>}

          <form className="chatbot-form" onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              aria-label="Ask the GenreVerse guide"
              disabled={isLoading}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about a genre..."
              type="text"
              value={draft}
            />
            <button disabled={isLoading || draft.trim().length === 0} type="submit">
              {isLoading ? <Loader2 className="chatbot-spin" size={18} aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
              <span className="sr-only">Send message</span>
            </button>
          </form>
        </section>
      )}

      <button
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close GenreVerse chat guide' : 'Open GenreVerse chat guide'}
        className="chatbot-launcher"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <MessageCircle size={23} aria-hidden="true" />}
      </button>
    </div>
  );
}
