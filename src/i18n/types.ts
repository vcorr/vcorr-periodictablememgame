export interface Translations {
  ui: {
    title: string;
    selectRange: string;
    startGame: string;
    tryAgain: string;
    lanthanides: string;
    actinides: string;
    language: string;
  };
  ranges: {
    allElements: string;
    hydrogenToCopper: string;
    aluminumToGold: string;
  };
  elements: {
    [key: string]: string;
  };
}

export type Language = 'en' | 'fi';

export type TranslationSection = keyof Translations; 