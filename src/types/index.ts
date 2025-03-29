import { Dispatch, SetStateAction } from 'react';

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
}

export interface GameRange {
  start: number;
  end: number;
}

export interface PeriodicTableProps {
  placedElements: number[];
  onDrop: (draggedAtomic: number, targetAtomic: number) => void;
  missingElements: number[];
  rangeStart: string;
  rangeEnd: string;
}

export interface GameControlsProps {
  onStart: () => void;
  gameCards: ElementData[];
  rangeStart: string;
  rangeEnd: string;
  setRangeStart: Dispatch<SetStateAction<string>>;
  setRangeEnd: Dispatch<SetStateAction<string>>;
}

export type ElementCategory = 
  | 'alkali-metals'
  | 'alkaline-earth-metals'
  | 'noble-gases'
  | 'halogens'
  | 'metalloids'
  | 'nonmetals'
  | 'lanthanides'
  | 'actinides'
  | 'transition-metals'; 