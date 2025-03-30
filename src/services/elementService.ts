import { BaseElementData, ElementData, ElementCategory, ElementPhase, ElementBlock } from '../types/elementTypes';
import { isElementCategory, isElementPhase, isElementBlock } from '../types/elementTypes';
import tableData from '../data/table.json';

interface TableElement {
  number: number;
  atomic_mass: number;
  category: string;
  block: string;
  electron_configuration_semantic: string;
  phase: string;
  density: number;
  boil: number;
  melt: number;
  source: string;
}

interface TableData {
  elements: TableElement[];
}

const elementDetails = new Map<number, Omit<ElementData, keyof BaseElementData>>();

// Initialize the element details from table.json
function initializeElementDetails() {
  const elements = (tableData as TableData).elements;
  elements.forEach((element) => {
    elementDetails.set(element.number, {
      atomicMass: element.atomic_mass,
      category: isElementCategory(element.category) ? element.category : 'unknown',
      block: isElementBlock(element.block) ? element.block : 'unknown',
      electron_configuration_semantic: element.electron_configuration_semantic || 'unknown',
      phase: isElementPhase(element.phase) ? element.phase : 'Unknown',
      density: element.density || 0,
      boil: element.boil || 0,
      melt: element.melt || 0,
      source: element.source || ''
    });
  });
}

// Call initialization when the module loads
initializeElementDetails();

export function enrichElementData(baseElement: BaseElementData): ElementData {
  const details = elementDetails.get(baseElement.atomicNumber);
  if (!details) {
    // Provide default values if details are not found
    return {
      ...baseElement,
      atomicMass: 0,
      category: 'unknown',
      block: 'unknown',
      electron_configuration_semantic: 'unknown',
      phase: 'Unknown',
      density: 0,
      boil: 0,
      melt: 0,
      source: ''
    };
  }

  return {
    ...baseElement,
    ...details
  };
} 