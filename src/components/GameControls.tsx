import React from 'react';
import { ElementData } from '../data/elements';
import './GameControls.css';

interface GameControlsProps {
  onStart: () => void;
  gameCards: ElementData[];
  rangeStart: string;
  rangeEnd: string;
  setRangeStart: React.Dispatch<React.SetStateAction<string>>;
  setRangeEnd: React.Dispatch<React.SetStateAction<string>>;
}

const GameControls: React.FC<GameControlsProps> = ({ onStart, gameCards, rangeStart, rangeEnd, setRangeStart, setRangeEnd }) => {
  return (
    <div className="game-controls">
      <h1>Elements Game</h1>
      <div className="range-inputs">
        <input
          type="number"
          placeholder="Start atomic number"
          value={rangeStart}
          onChange={(e) => setRangeStart(e.target.value)}
        />
        <input
          type="number"
          placeholder="End atomic number"
          value={rangeEnd}
          onChange={(e) => setRangeEnd(e.target.value)}
        />
      </div>
      <button className="start-button" onClick={onStart}>Start</button>
      <div className="game-cards-container">
        {gameCards.map(card => (
          <div
            key={card.atomicNumber}
            className="element-card game-card"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', card.atomicNumber.toString());
            }}
          >
            <div className="symbol">{card.symbol}</div>
            <div className="name">{card.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameControls; 