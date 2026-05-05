import { ArrowRight, Gamepad2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Genre } from '../types';

type GenreCardProps = {
  genre: Genre;
};

export function GenreCard({ genre }: GenreCardProps) {
  return (
    <article className="genre-card" style={{ '--accent': genre.accent } as CSSProperties}>
      <div className="genre-card-visual" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">Genre</p>
          <Gamepad2 className="text-white/40" size={20} aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-2xl font-black text-white">{genre.name}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">{genre.shortDescription}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {genre.coreMechanics.slice(0, 3).map((mechanic) => (
            <span className="tag" key={mechanic}>
              {mechanic}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-7">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-slate-300" to={`/genres/${genre.id}`}>
            Open genre
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
