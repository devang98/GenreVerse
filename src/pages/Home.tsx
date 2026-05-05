import { Search, SlidersHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { GenreCard } from '../components/GenreCard';
import { genres } from '../data/genres';

const filters = ['All', 'Action', 'Planning', 'Systems', 'Precision'];

const filterMatcher: Record<string, (genreId: string) => boolean> = {
  All: () => true,
  Action: (id) => ['platformer', 'shooter', 'racing', 'sports'].includes(id),
  Planning: (id) => ['puzzle', 'rpg', 'strategy'].includes(id),
  Systems: (id) => ['rpg', 'strategy', 'simulation'].includes(id),
  Precision: (id) => ['platformer', 'shooter', 'racing', 'sports'].includes(id),
};

export function Home() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleGenres = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return genres.filter((genre) => {
      const matchesFilter = filterMatcher[activeFilter](genre.id);
      const searchable = [
        genre.name,
        genre.shortDescription,
        genre.fullDescription,
        genre.playerFantasy,
        genre.coreMechanics.join(' '),
        genre.famousGames.map((game) => game.title).join(' '),
        genre.subgenres.join(' '),
        genre.relatedTags.join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return matchesFilter && (!normalized || searchable.includes(normalized));
    });
  }, [activeFilter, query]);

  return (
    <>
      <section className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/40 via-[#09090b] to-[#09090b]" />
        <div className="relative mx-auto max-w-7xl px-5 text-center">
          <p className="eyebrow mx-auto mb-8 bg-white/5 border-white/10 text-slate-300">Playable taxonomy</p>
          <h1 className="font-display mx-auto max-w-5xl text-6xl font-black uppercase leading-[1.05] tracking-tight text-white md:text-8xl lg:text-9xl">
            Genre<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500">
              Verse
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light text-slate-400 md:text-xl md:leading-relaxed">
            A hands-on guide to the major ways games ask people to think, move, choose, and compete. Every entry pairs a plain-language explanation with a focused interactive sample.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="flex flex-col gap-4 border-y border-white/10 py-5 md:flex-row md:items-center md:justify-between">
          <label className="search-field">
            <Search size={19} aria-hidden="true" />
            <span className="sr-only">Search genres</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search mechanics, games, tags..."
              type="search"
            />
          </label>

          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal size={18} className="text-slate-500" aria-hidden="true" />
            {filters.map((filter) => (
              <button
                className={`filter-chip ${activeFilter === filter ? 'filter-chip-active' : ''}`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleGenres.map((genre) => (
            <GenreCard genre={genre} key={genre.id} />
          ))}
        </div>

        {visibleGenres.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-white">No matching genre found.</p>
            <p className="mt-2 text-slate-400">Try another mechanic, tag, or famous game.</p>
          </div>
        )}
      </section>
    </>
  );
}
