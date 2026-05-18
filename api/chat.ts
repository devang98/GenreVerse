import OpenAI from 'openai';
import { genreGuideContext, genreGuideEntries } from './genre-context';

type ChatRole = 'user' | 'assistant';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
  currentGenreId?: string;
};

type ServerRequest = {
  method?: string;
  body?: unknown;
};

type ServerResponse = {
  headersSent?: boolean;
  status: (code: number) => ServerResponse;
  setHeader: (name: string, value: string) => void;
  json: (body: unknown) => void;
  write: (chunk: string) => void;
  end: () => void;
};

const MODEL = process.env.OPENAI_MODEL || 'gpt-5-mini';
const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1200;

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Record<string, unknown>;
  return (
    (candidate.role === 'user' || candidate.role === 'assistant') &&
    typeof candidate.content === 'string' &&
    candidate.content.trim().length > 0
  );
}

function parseBody(body: unknown): ChatRequestBody {
  if (typeof body === 'string') {
    return JSON.parse(body) as ChatRequestBody;
  }

  if (body && typeof body === 'object') {
    return body as ChatRequestBody;
  }

  return {};
}

function buildSystemPrompt(currentGenreId?: string) {
  const currentGenre = currentGenreId
    ? genreGuideEntries.find((genre) => genre.id === currentGenreId)
    : undefined;

  return [
    'You are the GenreVerse guide, a concise assistant for a video game genre taxonomy site.',
    'Answer from the GenreVerse dataset first. If a request is outside this dataset or asks for current news, say that the site does not cover it and offer a nearby genre-focused answer.',
    'Use short paragraphs or bullets. For comparisons, prefer bullets.',
    'When naming a GenreVerse genre, include its route in markdown link format, for example [Roguelike](/genres/roguelike).',
    'Do not invent genres, routes, sources, or game facts that are not present in the dataset.',
    currentGenre ? `The visitor is currently viewing ${currentGenre.name} at /genres/${currentGenre.id}.` : '',
    'GenreVerse dataset:',
    genreGuideContext,
  ]
    .filter(Boolean)
    .join('\n\n');
}

function toOpenAIInput(messages: ChatMessage[]) {
  return messages.slice(-MAX_MESSAGES).map((message) => ({
    role: message.role,
    content: message.content.trim().slice(0, MAX_MESSAGE_LENGTH),
  }));
}

async function streamOpenAIResponse(res: ServerResponse, body: ChatRequestBody) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    res.status(500).json({ error: 'GenreVerse chat is not configured. Set OPENAI_API_KEY on the server.' });
    return;
  }

  const messages = Array.isArray(body.messages) ? body.messages.filter(isChatMessage) : [];
  const lastUserMessage = [...messages].reverse().find((message) => message.role === 'user');

  if (!lastUserMessage) {
    res.status(400).json({ error: 'A user message is required.' });
    return;
  }

  const client = new OpenAI({ apiKey });
  const stream = await client.responses.create({
    model: MODEL,
    instructions: buildSystemPrompt(body.currentGenreId),
    input: toOpenAIInput(messages),
    stream: true,
  });

  res.status(200);
  res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('Connection', 'keep-alive');

  for await (const event of stream) {
    if (event.type === 'response.output_text.delta') {
      res.write(event.delta);
    }
  }

  res.end();
}

export default async function handler(req: ServerRequest, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed.' });
    return;
  }

  try {
    await streamOpenAIResponse(res, parseBody(req.body));
  } catch (error) {
    console.error('GenreVerse chat failed', error);
    if (res.headersSent) {
      res.end();
      return;
    }
    res.status(500).json({ error: 'GenreVerse chat failed unexpectedly.' });
  }
}
