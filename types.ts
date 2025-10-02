export interface Hymn {
  sanskrit: string;
  explainer: string;
  translation: string;
}

export interface Trail {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  summary: string;
  hymns: Hymn[];
}

export type View = 'landing' | 'trails' | 'viewer' | 'completion';
