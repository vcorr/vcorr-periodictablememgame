import React, { useEffect, useState } from 'react';
import { periodicTableMain, lanthanides, actinides, ElementData } from '../data/elements';
import './PeriodicTable.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from '../i18n/TranslationContext';

interface PeriodicTableProps {
  placedElements: number[];
  onDrop: (draggedAtomic: number, targetAtomic: number) => void;
  missingElements: number[];
  rangeStart: string;
  rangeEnd: string;
}

// Helper function to determine the category (group) based on the element symbol.
function getCategory(elem: ElementData): string {
  const alkaliMetals = ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr'];
  const alkalineEarthMetals = ['Be', 'Mg', 'Ca', 'Sr', 'Ba', 'Ra'];
  const nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xe', 'Rn', 'Og'];
  const halogens = ['F', 'Cl', 'Br', 'I', 'At'];
  const metalloids = ['B', 'Si', 'Ge', 'As', 'Sb', 'Te', 'Po'];
  const nonmetals = ['H', 'C', 'N', 'O', 'P', 'S', 'Se'];
  const lanthanidesArr = ['La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu'];
  const actinidesArr = ['Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr'];
  if (alkaliMetals.includes(elem.symbol)) return 'alkali-metals';
  if (alkalineEarthMetals.includes(elem.symbol)) return 'alkaline-earth-metals';
  if (nobleGases.includes(elem.symbol)) return 'noble-gases';
  if (halogens.includes(elem.symbol)) return 'halogens';
  if (metalloids.includes(elem.symbol)) return 'metalloids';
  if (nonmetals.includes(elem.symbol)) return 'nonmetals';
  if (lanthanidesArr.includes(elem.symbol)) return 'lanthanides';
  if (actinidesArr.includes(elem.symbol)) return 'actinides';
  return 'transition-metals';
}

function isInRange(elem: ElementData, start: string, end: string): boolean {
  if (start === '' || end === '') return true;
  const atomic = elem.atomicNumber;
  return atomic >= Number(start) && atomic <= Number(end);
}

function getElementsInRange(start: number, end: number): ElementData[] {
  const allElements = [...periodicTableMain.flat(), ...lanthanides, ...actinides].filter(Boolean) as ElementData[];
  return allElements.filter(el => el.atomicNumber >= start && el.atomicNumber <= end);
}

const PeriodicTable: React.FC<PeriodicTableProps> = ({ placedElements, onDrop, missingElements, rangeStart, rangeEnd }) => {
  const { t } = useTranslation();
  const effectiveMissing = (rangeStart !== '' && rangeEnd !== '')
    ? missingElements.filter(num => num >= Number(rangeStart) && num <= Number(rangeEnd))
    : missingElements;

  useEffect(() => {
    if (placedElements.length === effectiveMissing.length && effectiveMissing.length > 0) {
      toast.success("You win!", {
        autoClose: 3000,
        position: 'top-center'
      });
    }
  }, [placedElements, effectiveMissing]);

  const renderElement = (elem: ElementData | null, index: number) => {
    if (!elem) return <div key={index} className="empty-card" />;

    const isMissing = effectiveMissing.includes(elem.atomicNumber);
    const isPlaced = placedElements.includes(elem.atomicNumber);
    const inRange = isInRange(elem, rangeStart, rangeEnd);

    if (isMissing && !isPlaced) {
      if (inRange) {
        return (
          <div
            key={index}
            className={`element-card missing ${getCategory(elem)}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const draggedAtomic = Number(e.dataTransfer.getData('text/plain'));
              if (draggedAtomic !== elem.atomicNumber) {
                toast.error(t('tryAgain'), {
                  autoClose: 2000,
                  position: 'top-center'
                });
              }
              onDrop(draggedAtomic, elem.atomicNumber);
            }}
          >
            <div className="cell-content">
              <span className="question-mark">?</span>
            </div>
          </div>
        );
      } else {
        return (
          <div key={index} className={`element-card missing ${getCategory(elem)} dim`}>
            <div className="cell-content">
              <span className="question-mark">?</span>
            </div>
          </div>
        );
      }
    }

    return (
      <div key={index} className={`element-card ${getCategory(elem)} ${inRange ? '' : 'dim'}`}>
        <div className="atomic-number">{elem.atomicNumber}</div>
        <div className="symbol">{elem.symbol}</div>
        <div className="name">{t(elem.name, 'elements')}</div>
      </div>
    );
  };

  return (
    <div className="periodic-table-container">
      <div className="periodic-table">
        {periodicTableMain.map((period, periodIndex) => (
          <div key={periodIndex} className="period">
            {period.map((elem, index) => renderElement(elem, index))}
          </div>
        ))}
        <div className="additional-rows">
          <div className="lanthanides">
            <h3>{t('lanthanides')}</h3>
            <div className="period">
              {lanthanides.map((elem, idx) => renderElement(elem, idx))}
            </div>
          </div>
          <div className="actinides">
            <h3>{t('actinides')}</h3>
            <div className="period">
              {actinides.map((elem, idx) => renderElement(elem, idx))}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PeriodicTable;