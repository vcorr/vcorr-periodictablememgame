// src/data/elements.ts

import { BaseElementData } from '../types/elementTypes';

export type { BaseElementData };

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
}

export const periodicTableMain: (BaseElementData | null)[][] = [
  // Period 1
  [
    { atomicNumber: 1, symbol: 'H', name: 'Hydrogen' },
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    { atomicNumber: 2, symbol: 'He', name: 'Helium' }
  ],
  // Period 2
  [
    { atomicNumber: 3, symbol: 'Li', name: 'Lithium' },
    { atomicNumber: 4, symbol: 'Be', name: 'Beryllium' },
    null, null, null, null, null, null, null, null, null, null,
    { atomicNumber: 5, symbol: 'B', name: 'Boron' },
    { atomicNumber: 6, symbol: 'C', name: 'Carbon' },
    { atomicNumber: 7, symbol: 'N', name: 'Nitrogen' },
    { atomicNumber: 8, symbol: 'O', name: 'Oxygen' },
    { atomicNumber: 9, symbol: 'F', name: 'Fluorine' },
    { atomicNumber: 10, symbol: 'Ne', name: 'Neon' }
  ],
  // Period 3
  [
    { atomicNumber: 11, symbol: 'Na', name: 'Sodium' },
    { atomicNumber: 12, symbol: 'Mg', name: 'Magnesium' },
    null, null, null, null, null, null, null, null, null, null,
    { atomicNumber: 13, symbol: 'Al', name: 'Aluminum' },
    { atomicNumber: 14, symbol: 'Si', name: 'Silicon' },
    { atomicNumber: 15, symbol: 'P', name: 'Phosphorus' },
    { atomicNumber: 16, symbol: 'S', name: 'Sulfur' },
    { atomicNumber: 17, symbol: 'Cl', name: 'Chlorine' },
    { atomicNumber: 18, symbol: 'Ar', name: 'Argon' }
  ],
  // Period 4
  [
    { atomicNumber: 19, symbol: 'K', name: 'Potassium' },
    { atomicNumber: 20, symbol: 'Ca', name: 'Calcium' },
    { atomicNumber: 21, symbol: 'Sc', name: 'Scandium' },
    { atomicNumber: 22, symbol: 'Ti', name: 'Titanium' },
    { atomicNumber: 23, symbol: 'V', name: 'Vanadium' },
    { atomicNumber: 24, symbol: 'Cr', name: 'Chromium' },
    { atomicNumber: 25, symbol: 'Mn', name: 'Manganese' },
    { atomicNumber: 26, symbol: 'Fe', name: 'Iron' },
    { atomicNumber: 27, symbol: 'Co', name: 'Cobalt' },
    { atomicNumber: 28, symbol: 'Ni', name: 'Nickel' },
    { atomicNumber: 29, symbol: 'Cu', name: 'Copper' },
    { atomicNumber: 30, symbol: 'Zn', name: 'Zinc' },
    { atomicNumber: 31, symbol: 'Ga', name: 'Gallium' },
    { atomicNumber: 32, symbol: 'Ge', name: 'Germanium' },
    { atomicNumber: 33, symbol: 'As', name: 'Arsenic' },
    { atomicNumber: 34, symbol: 'Se', name: 'Selenium' },
    { atomicNumber: 35, symbol: 'Br', name: 'Bromine' },
    { atomicNumber: 36, symbol: 'Kr', name: 'Krypton' }
  ],
  // Period 5
  [
    { atomicNumber: 37, symbol: 'Rb', name: 'Rubidium' },
    { atomicNumber: 38, symbol: 'Sr', name: 'Strontium' },
    { atomicNumber: 39, symbol: 'Y', name: 'Yttrium' },
    { atomicNumber: 40, symbol: 'Zr', name: 'Zirconium' },
    { atomicNumber: 41, symbol: 'Nb', name: 'Niobium' },
    { atomicNumber: 42, symbol: 'Mo', name: 'Molybdenum' },
    { atomicNumber: 43, symbol: 'Tc', name: 'Technetium' },
    { atomicNumber: 44, symbol: 'Ru', name: 'Ruthenium' },
    { atomicNumber: 45, symbol: 'Rh', name: 'Rhodium' },
    { atomicNumber: 46, symbol: 'Pd', name: 'Palladium' },
    { atomicNumber: 47, symbol: 'Ag', name: 'Silver' },
    { atomicNumber: 48, symbol: 'Cd', name: 'Cadmium' },
    { atomicNumber: 49, symbol: 'In', name: 'Indium' },
    { atomicNumber: 50, symbol: 'Sn', name: 'Tin' },
    { atomicNumber: 51, symbol: 'Sb', name: 'Antimony' },
    { atomicNumber: 52, symbol: 'Te', name: 'Tellurium' },
    { atomicNumber: 53, symbol: 'I', name: 'Iodine' },
    { atomicNumber: 54, symbol: 'Xe', name: 'Xenon' }
  ],
  // Period 6 (main part)
  [
    { atomicNumber: 55, symbol: 'Cs', name: 'Cesium' },
    { atomicNumber: 56, symbol: 'Ba', name: 'Barium' },
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum' },
    { atomicNumber: 72, symbol: 'Hf', name: 'Hafnium' },
    { atomicNumber: 73, symbol: 'Ta', name: 'Tantalum' },
    { atomicNumber: 74, symbol: 'W', name: 'Tungsten' },
    { atomicNumber: 75, symbol: 'Re', name: 'Rhenium' },
    { atomicNumber: 76, symbol: 'Os', name: 'Osmium' },
    { atomicNumber: 77, symbol: 'Ir', name: 'Iridium' },
    { atomicNumber: 78, symbol: 'Pt', name: 'Platinum' },
    { atomicNumber: 79, symbol: 'Au', name: 'Gold' },
    { atomicNumber: 80, symbol: 'Hg', name: 'Mercury' },
    { atomicNumber: 81, symbol: 'Tl', name: 'Thallium' },
    { atomicNumber: 82, symbol: 'Pb', name: 'Lead' },
    { atomicNumber: 83, symbol: 'Bi', name: 'Bismuth' },
    { atomicNumber: 84, symbol: 'Po', name: 'Polonium' },
    { atomicNumber: 85, symbol: 'At', name: 'Astatine' },
    { atomicNumber: 86, symbol: 'Rn', name: 'Radon' }
  ],
  // Period 7 (main part)
  [
    { atomicNumber: 87, symbol: 'Fr', name: 'Francium' },
    { atomicNumber: 88, symbol: 'Ra', name: 'Radium' },
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium' },
    { atomicNumber: 104, symbol: 'Rf', name: 'Rutherfordium' },
    { atomicNumber: 105, symbol: 'Db', name: 'Dubnium' },
    { atomicNumber: 106, symbol: 'Sg', name: 'Seaborgium' },
    { atomicNumber: 107, symbol: 'Bh', name: 'Bohrium' },
    { atomicNumber: 108, symbol: 'Hs', name: 'Hassium' },
    { atomicNumber: 109, symbol: 'Mt', name: 'Meitnerium' },
    { atomicNumber: 110, symbol: 'Ds', name: 'Darmstadtium' },
    { atomicNumber: 111, symbol: 'Rg', name: 'Roentgenium' },
    { atomicNumber: 112, symbol: 'Cn', name: 'Copernicium' },
    { atomicNumber: 113, symbol: 'Nh', name: 'Nihonium' },
    { atomicNumber: 114, symbol: 'Fl', name: 'Flerovium' },
    { atomicNumber: 115, symbol: 'Mc', name: 'Moscovium' },
    { atomicNumber: 116, symbol: 'Lv', name: 'Livermorium' },
    { atomicNumber: 117, symbol: 'Ts', name: 'Tennessine' },
    { atomicNumber: 118, symbol: 'Og', name: 'Oganesson' }
  ]
];

export const lanthanides: (ElementData | null)[] = [
  null, null, null,
  { atomicNumber: 58, symbol: 'Ce', name: 'Cerium' },
  { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium' },
  { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium' },
  { atomicNumber: 61, symbol: 'Pm', name: 'Promethium' },
  { atomicNumber: 62, symbol: 'Sm', name: 'Samarium' },
  { atomicNumber: 63, symbol: 'Eu', name: 'Europium' },
  { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium' },
  { atomicNumber: 65, symbol: 'Tb', name: 'Terbium' },
  { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium' },
  { atomicNumber: 67, symbol: 'Ho', name: 'Holmium' },
  { atomicNumber: 68, symbol: 'Er', name: 'Erbium' },
  { atomicNumber: 69, symbol: 'Tm', name: 'Thulium' },
  { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium' },
  { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium' },
  null
];

export const actinides: (ElementData | null)[] = [
  null, null, null,
  { atomicNumber: 90, symbol: 'Th', name: 'Thorium' },
  { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium' },
  { atomicNumber: 92, symbol: 'U', name: 'Uranium' },
  { atomicNumber: 93, symbol: 'Np', name: 'Neptunium' },
  { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium' },
  { atomicNumber: 95, symbol: 'Am', name: 'Americium' },
  { atomicNumber: 96, symbol: 'Cm', name: 'Curium' },
  { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium' },
  { atomicNumber: 98, symbol: 'Cf', name: 'Californium' },
  { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium' },
  { atomicNumber: 100, symbol: 'Fm', name: 'Fermium' },
  { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium' },
  { atomicNumber: 102, symbol: 'No', name: 'Nobelium' },
  { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium' },
  null
];