import { ArrowLeft, ExternalLink } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { MiniDemo } from '../components/MiniDemo';
import { genreById } from '../data/genres';

export function GenreDetail() {
  const { id } = useParams();
  const genre = id ? genreById.get(id) : undefined;

  if (!genre) {
    return <Navigate to="/404" replace />;
  }

  return (
    <article>
      <section className="detail-hero" style={{ '--accent': genre.accent } as CSSProperties}>
        <div className="mx-auto max-w-7xl px-5 py-10">
          <Link className="back-link" to="/">
            <ArrowLeft size={18} aria-hidden="true" />
            Library
          </Link>
          <div className="grid gap-8 pt-10 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="eyebrow">Genre detail</p>
              <h1 className="mt-4 text-5xl font-black leading-[1.02] text-slate-950 md:text-7xl">
                {genre.name}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">{genre.fullDescription}</p>
            </div>
            <div className="mechanic-panel">
              <p className="text-sm font-black uppercase text-slate-500">Player fantasy</p>
              <p className="mt-3 text-2xl font-black leading-tight text-slate-950">{genre.playerFantasy}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <section className="content-panel">
            <h2>Core mechanics</h2>
            <div className="mt-5 grid gap-3">
              {genre.coreMechanics.map((mechanic, index) => (
                <div className="mechanic-row" key={mechanic}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{mechanic}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-panel">
            <h2>Famous games</h2>
            <div className="mt-5 grid gap-4">
              {genre.famousGames.map((game) => (
                <div className="game-row" key={game.title}>
                  <div>
                    <p className="font-black text-slate-950">{game.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{game.note}</p>
                  </div>
                  <span>{game.year}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <MiniDemo genre={genre} />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-14 md:grid-cols-2">
        <section className="content-panel">
          <h2>Subgenres</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {genre.subgenres.map((subgenre) => (
              <span className="tag tag-large" key={subgenre}>{subgenre}</span>
            ))}
          </div>
        </section>

        <section className="content-panel">
          <h2>Related tags</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {genre.relatedTags.map((tag) => (
              <span className="tag tag-large" key={tag}>{tag}</span>
            ))}
          </div>
        </section>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="content-panel">
          <h2>References</h2>
          <div className="mt-5 grid gap-3">
            {genre.sourceNotes.map((source) => (
              <div className="reference-row" key={source.label}>
                <span>{source.label}</span>
                {source.url && (
                  <a href={source.url} rel="noreferrer" target="_blank">
                    <ExternalLink size={17} aria-hidden="true" />
                    <span className="sr-only">Open source</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
