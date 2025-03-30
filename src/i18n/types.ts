export interface Translations {
  ui: {
    title: string;
    selectRange: string;
    startGame: string;
    tryAgain: string;
    lanthanides: string;
    actinides: string;
    language: string;
    score: string;
    pointsEarned: string;
    pointsLost: string;
    correctPlacement: string;
    phase: string;
    meltingPoint: string;
    boilingPoint: string;
    atomicMass: string;
    category: string;
    density: string;
    clickForDetails: string;
  };
  ranges: {
    allElements: string;
    hydrogenToCopper: string;
    aluminumToGold: string;
  };
  categories: {
    [key: string]: string;
  };
  phases: {
    [key: string]: string;
  };
  elements: {
    [key: string]: string;
  };
}

export type Language = 'en' | 'fi';

export type TranslationSection = keyof Translations;