export type DemoType =
  | 'platformer'
  | 'shooter'
  | 'puzzle'
  | 'rpg'
  | 'strategy'
  | 'racing'
  | 'sports'
  | 'simulation';

export type FamousGame = {
  title: string;
  year: number;
  note: string;
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
  accent: string;
  imageUrl: string;
};
