// Element categories as defined in the periodic table
export type ElementCategory = 
  | 'metal'
  | 'metalloid'
  | 'nonmetal'
  | 'noble gas'
  | 'alkali metal'
  | 'alkaline earth metal'
  | 'transition metal'
  | 'post-transition metal'
  | 'polyatomic nonmetal'
  | 'diatomic nonmetal'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

// Element phases at standard temperature and pressure
export type ElementPhase = 'Solid' | 'Liquid' | 'Gas' | 'Plasma' | 'Unknown';

// Element blocks in the periodic table
export type ElementBlock = 's' | 'p' | 'd' | 'f' | 'unknown';

// Base element data that's always available
export interface BaseElementData {
  readonly atomicNumber: number;
  readonly symbol: string;
  readonly name: string;
}

// Extended element data with additional properties
export interface ElementData extends BaseElementData {
  readonly atomicMass: number;
  readonly category: ElementCategory;
  readonly block: ElementBlock;
  readonly electron_configuration_semantic: string;
  readonly phase: ElementPhase;
  readonly density: number;
  readonly boil: number;
  readonly melt: number;
  readonly source: string;
}

// Game-specific types
export interface GameRange {
  readonly start: number;
  readonly end: number;
}

// Type guard to check if a value is a valid element category
export function isElementCategory(value: string): value is ElementCategory {
  const validCategories: ElementCategory[] = [
    'metal',
    'metalloid',
    'nonmetal',
    'noble gas',
    'alkali metal',
    'alkaline earth metal',
    'transition metal',
    'post-transition metal',
    'polyatomic nonmetal',
    'diatomic nonmetal',
    'lanthanide',
    'actinide',
    'unknown'
  ];
  return validCategories.includes(value as ElementCategory);
}

// Type guard to check if a value is a valid element phase
export function isElementPhase(value: string): value is ElementPhase {
  const validPhases: ElementPhase[] = ['Solid', 'Liquid', 'Gas', 'Plasma', 'Unknown'];
  return validPhases.includes(value as ElementPhase);
}

// Type guard to check if a value is a valid element block
export function isElementBlock(value: string): value is ElementBlock {
  const validBlocks: ElementBlock[] = ['s', 'p', 'd', 'f', 'unknown'];
  return validBlocks.includes(value as ElementBlock);
} 