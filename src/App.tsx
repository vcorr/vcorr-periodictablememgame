import React, { useState, useCallback } from 'react';
import './App.css';
import PeriodicTable from './components/PeriodicTable';
import GameControls from './components/GameControls';
import { ElementData } from './types';
import { periodicTableMain, lanthanides, actinides } from './data/elements';
import { parseRangeInput, isValidNumber } from './utils/numberUtils';
import { TranslationProvider, useTranslation } from './i18n/TranslationContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useTranslation();
  
  return (
    <div className="language-section">
      <div className="language-title">{t('language', 'ui')}</div>
      <select 
        value={language} 
        onChange={(e) => setLanguage(e.target.value as 'en' | 'fi')}
        className="language-selector"
      >
        <option value="en">English</option>
        <option value="fi">Suomi</option>
      </select>
    </div>
  );
};

const AppContent: React.FC = () => {
  const [gameCards, setGameCards] = useState<ElementData[]>([]);
  const [placedElements, setPlacedElements] = useState<number[]>([]);
  const [rangeStart, setRangeStart] = useState<string>('1');
  const [rangeEnd, setRangeEnd] = useState<string>('118');
  const [missingElements, setMissingElements] = useState<number[]>([]);
  const { t } = useTranslation();

  const flattenElements = useCallback((): ElementData[] => {
    const flatten = (arr: (ElementData | null)[][] | (ElementData | null)[]): ElementData[] => {
      return arr.flat().filter((el): el is ElementData => el !== null);
    };
    return [
      ...flatten(periodicTableMain),
      ...flatten(lanthanides.map(el => [el])),
      ...flatten(actinides.map(el => [el]))
    ];
  }, []);

  const startGame = useCallback(() => {
    setPlacedElements([]);
    const range = parseRangeInput(rangeStart, rangeEnd);
    
    if (!range) {
      console.error('Invalid range input');
      return;
    }

    const allElements = flattenElements().filter(el => 
      el.atomicNumber >= range.start && el.atomicNumber <= range.end
    );
    
    const shuffled = [...allElements].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(3, shuffled.length)).map(e => e.atomicNumber);
    setMissingElements(selected);
    setGameCards(allElements.filter(el => selected.includes(el.atomicNumber)));
  }, [rangeStart, rangeEnd, flattenElements]);

  const handleDrop = useCallback((draggedAtomic: number, targetAtomic: number) => {
    if (draggedAtomic === targetAtomic) {
      if (!placedElements.includes(draggedAtomic)) {
        setPlacedElements(prev => [...prev, draggedAtomic]);
        setGameCards(prev => prev.filter(card => card.atomicNumber !== draggedAtomic));
      }
    } else {
      console.log('Wrong drop, try again.');
    }
  }, [placedElements]);

  const handleRangeChange = useCallback((start: string, end: string) => {
    if (isValidNumber(start)) {
      setRangeStart(start);
    }
    if (isValidNumber(end)) {
      setRangeEnd(end);
    }
  }, []);

  const effectiveMissing = (rangeStart !== '' && rangeEnd !== '')
    ? missingElements.filter(num => {
        const range = parseRangeInput(rangeStart, rangeEnd);
        return range && num >= range.start && num <= range.end;
      })
    : missingElements;

  const filteredGameCards = (rangeStart !== '' && rangeEnd !== '')
    ? gameCards.filter(card => {
        const range = parseRangeInput(rangeStart, rangeEnd);
        return range && 
          card.atomicNumber >= range.start &&
          card.atomicNumber <= range.end &&
          !placedElements.includes(card.atomicNumber);
      })
    : gameCards.filter(card => !placedElements.includes(card.atomicNumber));

  return (
    <div className="App">
      <h1>{t('title')}</h1>
      <div className="app-container">
        <div className="table-container">
          <PeriodicTable
            placedElements={placedElements}
            onDrop={handleDrop}
            missingElements={missingElements}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
          />
        </div>
        <div className="sidebar-container">
          <LanguageSelector />
          <GameControls
            gameCards={filteredGameCards}
            onRangeChange={handleRangeChange}
            onStartGame={startGame}
          />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
};

export default App;
