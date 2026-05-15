import {
  ArrowRight,
  BarChart3,
  Blocks,
  BookOpen,
  BrainCircuit,
  Car,
  Compass,
  Crosshair,
  Dice5,
  Flashlight,
  Gamepad2,
  Goal,
  Grid2x2,
  Grid3x3,
  Layers,
  Map,
  MousePointerClick,
  Music,
  Orbit,
  PersonStanding,
  Rocket,
  Shield,
  Shuffle,
  Sword,
  Swords,
  Target,
  TreePine,
  Users,
  Wand2,
  Zap,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import type { Genre } from '../types';

type GenreCardProps = {
  genre: Genre;
};

const genreIcons: Record<string, typeof Gamepad2> = {
  platformer: PersonStanding,
  shooter: Crosshair,
  puzzle: Blocks,
  rpg: BrainCircuit,
  strategy: Map,
  racing: Car,
  sports: Goal,
  fighting: Swords,
  simulation: Orbit,
  soulslike: Shield,
  adventure: Compass,
  metroidvania: Map,
  roguelike: Dice5,
  roguelite: Zap,
  actionrpg: Wand2,
  mmorpg: Users,
  moba: Gamepad2,
  cardgame: Grid3x3,
  rhythm: Music,
  survival: TreePine,
  visualnovel: BookOpen,
  tacticalrpg: Grid2x2,
  deckbuilder: Layers,
  turnbasedstrategy: BarChart3,
  realtimestrategy: Zap,
  idleclicker: MousePointerClick,
  dungeoncrawler: Flashlight,
  hacknslash: Sword,
  twinstickshooter: Crosshair,
  shmup: Rocket,
  tradingcardgame: Shuffle,
  autobattler: Target,
};

export function GenreCard({ genre }: GenreCardProps) {
  const Icon = genreIcons[genre.id] ?? Gamepad2;

  return (
    <Link
      aria-label={`Open ${genre.name} genre`}
      className="genre-card"
      style={{ '--accent': genre.accent } as CSSProperties}
      to={`/genres/${genre.id}`}
    >
      <div className="genre-card-image" aria-hidden="true">
        <img src={genre.imageUrl} alt="" loading="lazy" />
      </div>
      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="flex items-center justify-between gap-3">
          <p className="eyebrow">Genre</p>
          <span className="genre-card-icon">
            <Icon size={20} aria-hidden="true" />
          </span>
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
          <span className="genre-card-cta">
            Open genre
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
