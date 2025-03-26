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
      <div className="range-inputs" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px', 
        marginBottom: '30px',
        padding: '20px',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            minWidth: '100px', 
            fontSize: '18px', 
            color: '#333' 
          }}>Start from:</span>
          <input
            type="number"
            value={rangeStart}
            onChange={(e) => setRangeStart(e.target.value)}
            style={{ 
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '16px',
              width: '100px',
              outline: 'none'
            }}
          />
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ 
            minWidth: '100px', 
            fontSize: '18px', 
            color: '#333' 
          }}>End at:</span>
          <input
            type="number"
            value={rangeEnd}
            onChange={(e) => setRangeEnd(e.target.value)}
            style={{ 
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              fontSize: '16px',
              width: '100px',
              outline: 'none'
            }}
          />
        </label>
      </div>
      <button 
        className="start-button" 
        onClick={onStart}
        style={{
          padding: '12px 40px',
          fontSize: '18px',
          borderRadius: '8px',
          border: 'none',
          background: '#4CAF50',
          color: 'white',
          cursor: 'pointer',
          transition: 'background 0.2s',
          marginBottom: '30px'
        }}
      >Start</button>
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