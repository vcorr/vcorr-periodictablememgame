import React, { useState } from 'react';
import './App.css';
import PeriodicTable from './components/PeriodicTable';
import GameControls from './components/GameControls';
import { ElementData, periodicTableMain, lanthanides, actinides } from './data/elements';

function App() {
  const [gameCards, setGameCards] = useState<ElementData[]>([]);
  const [placedElements, setPlacedElements] = useState<number[]>([]);
  const [rangeStart, setRangeStart] = useState<string>('1');
  const [rangeEnd, setRangeEnd] = useState<string>('118');
  const [missingElements, setMissingElements] = useState<number[]>([]);

  const flattenElements = (): ElementData[] => {
    const flatten = (arr: (ElementData | null)[][] | (ElementData | null)[]): ElementData[] => {
      let result: ElementData[] = [];
      for (const row of arr) {
        if (Array.isArray(row)) {
          row.forEach(el => { if (el) result.push(el); });
        } else {
          if (row) result.push(row);
        }
      }
      return result;
    };
    return [
      ...flatten(periodicTableMain),
      ...flatten(lanthanides.map(el => [el])),
      ...flatten(actinides.map(el => [el]))
    ];
  };

  const startGame = () => {
    setPlacedElements([]);
    const start = Number(rangeStart);
    const end = Number(rangeEnd);
    const allElements = flattenElements().filter(el => el.atomicNumber >= start && el.atomicNumber <= end);
    const shuffled = [...allElements].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, Math.min(3, shuffled.length)).map(e => e.atomicNumber);
    setMissingElements(selected);
    setGameCards(allElements.filter(el => selected.includes(el.atomicNumber)));
  };

  const handleDrop = (draggedAtomic: number, targetAtomic: number) => {
    if (draggedAtomic === targetAtomic) {
      if (!placedElements.includes(draggedAtomic)) {
        setPlacedElements([...placedElements, draggedAtomic]);
        setGameCards(gameCards.filter(card => card.atomicNumber !== draggedAtomic));
      }
    } else {
      console.log('Wrong drop, try again.');
    }
  };

  const effectiveMissing = (rangeStart !== '' && rangeEnd !== '')
    ? missingElements.filter(num => num >= Number(rangeStart) && num <= Number(rangeEnd))
    : missingElements;

  const filteredGameCards = (rangeStart !== '' && rangeEnd !== '')
    ? gameCards.filter(card =>
        card.atomicNumber >= Number(rangeStart) &&
        card.atomicNumber <= Number(rangeEnd) &&
        !placedElements.includes(card.atomicNumber)
      )
    : gameCards.filter(card => !placedElements.includes(card.atomicNumber));

  return (
    <div className="App">
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
          <GameControls
            onStart={startGame}
            gameCards={filteredGameCards}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            setRangeStart={setRangeStart}
            setRangeEnd={setRangeEnd}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
