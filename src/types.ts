import { ElementData as BaseElementData } from './data/elements';

export interface ElementData extends BaseElementData {
  atomicMass: number;
  category: string;
  block: string;
  electron_configuration_semantic: string;
  phase: string;
  density: number;
  boil: number;
  melt: number;
  source: string;
}

export interface GameRange {
  start: number;
  end: number;
} 