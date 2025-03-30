import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import PeriodicTable from './components/PeriodicTable';
import GameControls from './components/GameControls';
import { ElementData } from './types';
import { ElementData as BaseElementData, periodicTableMain, lanthanides, actinides } from './data/elements';
import { parseRangeInput, isValidNumber } from './utils/numberUtils';
import { TranslationProvider, useTranslation } from './i18n/TranslationContext';
import { enrichElementData } from './services/elementService';

interface Message {
  id: number;
  text: string;
  type: 'success' | 'error';
}

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
  const [score, setScore] = useState<number>(0);
  const [messages, setMessages] = useState<Message[]>([]);
  const messageIdCounter = useRef(0);
  const hasAwardedPoints = useRef(false);
  const { t } = useTranslation();

  const addMessage = useCallback((text: string, type: 'success' | 'error') => {
    messageIdCounter.current += 1;
    setMessages(prev => [
      {
        id: messageIdCounter.current,
        text,
        type
      },
      ...prev.slice(0, 9) // Keep only the 10 most recent messages
    ]);
  }, []);

  const flattenElements = useCallback((): ElementData[] => {
    // First, flatten the main table and filter out nulls
    const mainElements = periodicTableMain
      .flat()
      .filter((el): el is BaseElementData => el !== null)
      .map(enrichElementData);

    // Handle lanthanides and actinides (already 1D arrays)
    const lanthanideElements = lanthanides
      .filter((el): el is BaseElementData => el !== null)
      .map(enrichElementData);

    const actinideElements = actinides
      .filter((el): el is BaseElementData => el !== null)
      .map(enrichElementData);

    return [
      ...mainElements,
      ...lanthanideElements,
      ...actinideElements
    ];
  }, []);

  const startGame = useCallback(() => {
    setPlacedElements([]);
    hasAwardedPoints.current = false;
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
        addMessage(t('correctPlacement', 'ui'), 'success');
      }
    } else {
      setScore(prev => prev - 5);
      addMessage(t('pointsLost', 'ui'), 'error');
    }
  }, [placedElements, t, addMessage]);

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

  useEffect(() => {
    if (placedElements.length === effectiveMissing.length && 
        effectiveMissing.length > 0 && 
        !hasAwardedPoints.current) {
      hasAwardedPoints.current = true;
      setScore(prev => prev + 10);
      addMessage(t('pointsEarned', 'ui'), 'success');
    }
  }, [placedElements, effectiveMissing, t, addMessage]);

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
          <div className="score-section">
            <div className="score-title">{t('score', 'ui')}</div>
            <div className="score-value">{score}</div>
          </div>
          <GameControls
            gameCards={filteredGameCards}
            onRangeChange={handleRangeChange}
            onStartGame={startGame}
            messages={messages}
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
