import React from 'react';
import './GameControls.css';
import { ElementData } from '../types';
import { useTranslation } from '../i18n/TranslationContext';

interface GameControlsProps {
  gameCards: ElementData[];
  onRangeChange: (start: string, end: string) => void;
  onStartGame: () => void;
}

const GameControls: React.FC<GameControlsProps> = ({ gameCards, onRangeChange, onStartGame }) => {
  const { t } = useTranslation();

  return (
    <div className="game-controls">
      <div className="range-selector">
        <label className="range-label">{t('selectRange')}</label>
        <div className="range-buttons">
          <button
            className="range-preset-button"
            onClick={() => onRangeChange('1', '118')}
          >
            {t('allElements', 'ranges')}
          </button>
          <button
            className="range-preset-button"
            onClick={() => onRangeChange('1', '29')}
          >
            {t('hydrogenToCopper', 'ranges')}
          </button>
          <button
            className="range-preset-button"
            onClick={() => onRangeChange('13', '79')}
          >
            {t('aluminumToGold', 'ranges')}
          </button>
        </div>
      </div>
      <button className="start-button" onClick={onStartGame}>
        {t('startGame')}
      </button>
      <div className="game-cards">
        {gameCards.map((card) => (
          <div
            key={card.atomicNumber}
            className="game-card"
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', card.atomicNumber.toString());
            }}
          >
            <div className="symbol">{card.symbol}</div>
            <div className="name">{t(card.name, 'elements')}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameControls; 