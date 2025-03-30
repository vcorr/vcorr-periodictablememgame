import React, { useState } from 'react';
import './GameControls.css';
import { ElementData } from '../types';
import { useTranslation } from '../i18n/TranslationContext';
import { enrichElementData } from '../services/elementService';

interface Message {
  id: number;
  text: string;
  type: 'success' | 'error';
}

interface GameControlsProps {
  gameCards: ElementData[];
  onRangeChange: (start: string, end: string) => void;
  onStartGame: () => void;
  messages: Message[];
}

const GameControls: React.FC<GameControlsProps> = ({ 
  gameCards, 
  onRangeChange, 
  onStartGame,
  messages 
}) => {
  const { t } = useTranslation();
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  const renderElementDetails = () => {
    if (!selectedElement) {
      return (
        <div className="element-details empty">
          {t('clickForDetails', 'ui')}
        </div>
      );
    }

    const enrichedElement = enrichElementData(selectedElement);
    const kelvinToCelsius = (k: number) => (k - 273.15).toFixed(1);

    return (
      <div className="element-details">
        <div className="title">
          <span className="symbol">{enrichedElement.symbol}</span>
          <a 
            href={enrichedElement.source}
            target="_blank"
            rel="noopener noreferrer"
            className="element-name-link"
          >
            {t(enrichedElement.name, 'elements')}
          </a>
        </div>
        <div className="property">
          <span className="property-label">{t('atomicMass', 'ui')}</span>
          <span className="property-value">{enrichedElement.atomicMass.toFixed(3)}</span>
        </div>
        <div className="property">
          <span className="property-label">{t('category', 'ui')}</span>
          <span className="property-value">{t(enrichedElement.category, 'categories')}</span>
        </div>
        <div className="property">
          <span className="property-label">{t('phase', 'ui')}</span>
          <span className="property-value">{t(enrichedElement.phase, 'phases')}</span>
        </div>
        <div className="property">
          <span className="property-label">{t('density', 'ui')}</span>
          <span className="property-value">
            {enrichedElement.density ? `${enrichedElement.density.toFixed(2)} g/cm³` : 'unknown'}
          </span>
        </div>
        <div className="property">
          <span className="property-label">{t('meltingPoint', 'ui')}</span>
          <span className="property-value">
            {enrichedElement.melt 
              ? `${kelvinToCelsius(enrichedElement.melt)}°C`
              : 'unknown'}
          </span>
        </div>
        <div className="property">
          <span className="property-label">{t('boilingPoint', 'ui')}</span>
          <span className="property-value">
            {enrichedElement.boil 
              ? `${kelvinToCelsius(enrichedElement.boil)}°C`
              : 'unknown'}
          </span>
        </div>
      </div>
    );
  };

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
            onClick={() => setSelectedElement(card)}
            onDragStart={(e) => {
              e.dataTransfer.setData('text/plain', card.atomicNumber.toString());
            }}
          >
            <div className="symbol">{card.symbol}</div>
            <div className="name">{t(card.name, 'elements')}</div>
          </div>
        ))}
      </div>
      {renderElementDetails()}
      <div className="message-stream">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            {message.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameControls; 