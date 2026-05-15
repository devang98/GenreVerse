import { Compass, Gamepad2, MousePointer2, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { GenreCard } from '../components/GenreCard';
import { genres } from '../data/genres';

const filters = ['All', 'Action', 'Planning', 'Systems', 'Precision'];
const platforms = ['PlayStation', 'Xbox', 'PC', 'Mobile'];

const filterMatcher: Record<string, (genreId: string) => boolean> = {
  All: () => true,
  Action: (id) => [
    'platformer',
    'shooter',
    'racing',
    'sports',
    'fighting',
    'soulslike',
    'roguelite',
    'actionrpg',
    'hacknslash',
    'twinstickshooter',
    'shmup',
  ].includes(id),
  Planning: (id) => [
    'puzzle',
    'rpg',
    'strategy',
    'soulslike',
    'moba',
    'tacticalrpg',
    'turnbasedstrategy',
    'realtimestrategy',
  ].includes(id),
  Systems: (id) => [
    'rpg',
    'strategy',
    'simulation',
    'soulslike',
    'mmorpg',
    'survival',
    'deckbuilder',
    'idleclicker',
  ].includes(id),
  Precision: (id) => [
    'platformer',
    'shooter',
    'racing',
    'sports',
    'fighting',
    'soulslike',
    'rhythm',
    'twinstickshooter',
    'shmup',
  ].includes(id),
};

export function Home() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((current) =>
      current.includes(platform) ? current.filter((p) => p !== platform) : [...current, platform]
    );
  };

  const visibleGenres = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return genres.filter((genre) => {
      const matchesFilter = filterMatcher[activeFilter](genre.id);
      
      // Platform filtering: if platforms are selected, genre must have games on at least one platform
      let matchesPlatform = true;
      if (selectedPlatforms.length > 0) {
        matchesPlatform = genre.famousGames.some((game) =>
          game.platforms?.some((p) => selectedPlatforms.includes(p))
        );
      }

      const searchable = [
        genre.name,
        genre.shortDescription,
        genre.fullDescription,
        genre.playerFantasy,
        genre.coreMechanics.join(' '),
        genre.famousGames.map((game) => game.title).join(' '),
        genre.subgenres.join(' '),
        genre.relatedTags.join(' '),
        genre.famousGames.flatMap((game) => game.platforms || []).join(' '),
      ]
        .join(' ')
        .toLowerCase();

      return matchesFilter && matchesPlatform && (!normalized || searchable.includes(normalized));
    });
  }, [activeFilter, query, selectedPlatforms]);

  return (
    <>
      <section className="library-hero">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:items-center md:py-20">
          <div className="relative z-10">
            <p className="eyebrow mb-6">Playable taxonomy</p>
            <h1 className="font-display max-w-4xl text-5xl font-black uppercase leading-[1.02] text-slate-950 md:text-7xl lg:text-8xl">
              Explore game genres by feel, rules, and play.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              GenreVerse is a hands-on guide to the major ways games ask people to move, aim,
              solve, plan, compete, and build. Each entry pairs clear taxonomy notes with a focused
              mini interaction.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="hero-stat">
                <Gamepad2 size={20} aria-hidden="true" />
                <strong>{genres.length}</strong>
                <span>playable genres</span>
              </div>
              <div className="hero-stat">
                <MousePointer2 size={20} aria-hidden="true" />
                <strong>{genres.length}</strong>
                <span>mini demos</span>
              </div>
              <div className="hero-stat">
                <Compass size={20} aria-hidden="true" />
                <strong>4</strong>
                <span>research sources</span>
              </div>
            </div>
          </div>

          <div className="hero-media" aria-label="Gaming setup image">
            <img
              alt="Neon-lit gaming controller and arcade setup"
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80"
            />
            <div className="hero-media-card">
              <Sparkles size={18} aria-hidden="true" />
              <span>Search by mechanic, famous game, or mood tag</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
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

        {/* Platform filter section */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pb-4 border-b border-white/10">
          <span className="text-sm font-semibold text-slate-300">Platforms:</span>
          {platforms.map((platform) => (
            <button
              key={platform}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                selectedPlatforms.includes(platform)
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
              onClick={() => togglePlatform(platform)}
              type="button"
            >
              {selectedPlatforms.includes(platform) ? (
                <>
                  ✓ {platform}
                </>
              ) : (
                platform
              )}
            </button>
          ))}
          {selectedPlatforms.length > 0 && (
            <button
              className="ml-2 text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1"
              onClick={() => setSelectedPlatforms([])}
              type="button"
            >
              <X size={14} aria-hidden="true" />
              Clear
            </button>
          )}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleGenres.map((genre) => (
            <GenreCard genre={genre} key={genre.id} />
          ))}
        </div>

        {visibleGenres.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-lg font-bold text-white">No matching genre found.</p>
            <p className="mt-2 text-slate-400">Try another mechanic, tag, famous game, or platform.</p>
          </div>
        )}
      </section>
    </>
  );
}
