export type DemoType =
  | 'platformer'
  | 'shooter'
  | 'puzzle'
  | 'rpg'
  | 'strategy'
  | 'racing'
  | 'fighting'
  | 'sports'
  | 'simulation'
  | 'soulslike'
  | 'adventure'
  | 'metroidvania'
  | 'roguelike'
  | 'roguelite'
  | 'actionrpg'
  | 'mmorpg'
  | 'moba'
  | 'cardgame'
  | 'rhythm'
  | 'survival'
  | 'visualnovel'
  | 'tacticalrpg'
  | 'deckbuilder'
  | 'turnbasedstrategy'
  | 'realtimestrategy'
  | 'idleclicker'
  | 'dungeoncrawler'
  | 'hacknslash'
  | 'twinstickshooter'
  | 'shmup';

export type FamousGame = {
  title: string;
  year: number;
  note: string;
  platforms?: string[];
};

export type SourceNote = {
  label: string;
  url?: string;
};

export type Genre = {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  playerFantasy: string;
  coreMechanics: string[];
  famousGames: FamousGame[];
  subgenres: string[];
  relatedTags: string[];
  demoType: DemoType;
  sourceNotes: SourceNote[];
  platforms?: string[];
  accent: string;
  imageUrl: string;
};
