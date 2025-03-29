import { GameRange } from '../types';

export const isValidNumber = (value: string): boolean => {
  const num = Number(value);
  return !isNaN(num) && num > 0;
};

export const parseRangeInput = (start: string, end: string): GameRange | null => {
  const startNum = Number(start);
  const endNum = Number(end);

  if (isNaN(startNum) || isNaN(endNum) || startNum <= 0 || endNum <= 0) {
    return null;
  }

  return {
    start: Math.min(startNum, endNum),
    end: Math.max(startNum, endNum)
  };
};

export const isInRange = (value: number, range: GameRange): boolean => {
  return value >= range.start && value <= range.end;
}; 