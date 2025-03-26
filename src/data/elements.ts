// src/data/elements.ts

export interface ElementData {
  atomicNumber: number;
  symbol: string;
  name: string;
}

export const periodicTableMain: (ElementData | null)[][] = [
  // Period 1
  [
    { atomicNumber: 1, symbol: 'H', name: 'vety' },
    null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null,
    { atomicNumber: 2, symbol: 'He', name: 'helium' }
  ],
  // Period 2
  [
    { atomicNumber: 3, symbol: 'Li', name: 'litium' },
    { atomicNumber: 4, symbol: 'Be', name: 'beryllium' },
    null, null, null, null, null, null, null, null, null, null,
    { atomicNumber: 5, symbol: 'B', name: 'boori' },
    { atomicNumber: 6, symbol: 'C', name: 'hiili' },
    { atomicNumber: 7, symbol: 'N', name: 'typpi' },
    { atomicNumber: 8, symbol: 'O', name: 'happi' },
    { atomicNumber: 9, symbol: 'F', name: 'fluori' },
    { atomicNumber: 10, symbol: 'Ne', name: 'neon' }
  ],
  // Period 3
  [
    { atomicNumber: 11, symbol: 'Na', name: 'natrium' },
    { atomicNumber: 12, symbol: 'Mg', name: 'magnesium' },
    null, null, null, null, null, null, null, null, null, null,
    { atomicNumber: 13, symbol: 'Al', name: 'alumiini' },
    { atomicNumber: 14, symbol: 'Si', name: 'pii' },
    { atomicNumber: 15, symbol: 'P', name: 'fosfori' },
    { atomicNumber: 16, symbol: 'S', name: 'rikki' },
    { atomicNumber: 17, symbol: 'Cl', name: 'kloori' },
    { atomicNumber: 18, symbol: 'Ar', name: 'argon' }
  ],
  // Period 4
  [
    { atomicNumber: 19, symbol: 'K', name: 'kalium' },
    { atomicNumber: 20, symbol: 'Ca', name: 'kalsium' },
    { atomicNumber: 21, symbol: 'Sc', name: 'skandium' },
    { atomicNumber: 22, symbol: 'Ti', name: 'titaani' },
    { atomicNumber: 23, symbol: 'V', name: 'vanadio' },
    { atomicNumber: 24, symbol: 'Cr', name: 'kromi' },
    { atomicNumber: 25, symbol: 'Mn', name: 'mangaani' },
    { atomicNumber: 26, symbol: 'Fe', name: 'rauta' },
    { atomicNumber: 27, symbol: 'Co', name: 'koboltti' },
    { atomicNumber: 28, symbol: 'Ni', name: 'nikkeli' },
    { atomicNumber: 29, symbol: 'Cu', name: 'kupari' },
    { atomicNumber: 30, symbol: 'Zn', name: 'sinkki' },
    { atomicNumber: 31, symbol: 'Ga', name: 'gallium' },
    { atomicNumber: 32, symbol: 'Ge', name: 'germanium' },
    { atomicNumber: 33, symbol: 'As', name: 'arsenikki' },
    { atomicNumber: 34, symbol: 'Se', name: 'seleni' },
    { atomicNumber: 35, symbol: 'Br', name: 'bromi' },
    { atomicNumber: 36, symbol: 'Kr', name: 'krypton' }
  ],
  // Period 5
  [
    { atomicNumber: 37, symbol: 'Rb', name: 'rubidium' },
    { atomicNumber: 38, symbol: 'Sr', name: 'strontium' },
    { atomicNumber: 39, symbol: 'Y', name: 'yttrium' },
    { atomicNumber: 40, symbol: 'Zr', name: 'zirkonium' },
    { atomicNumber: 41, symbol: 'Nb', name: 'niobium' },
    { atomicNumber: 42, symbol: 'Mo', name: 'molybdeeni' },
    { atomicNumber: 43, symbol: 'Tc', name: 'teknetium' },
    { atomicNumber: 44, symbol: 'Ru', name: 'rutenium' },
    { atomicNumber: 45, symbol: 'Rh', name: 'rodium' },
    { atomicNumber: 46, symbol: 'Pd', name: 'palladium' },
    { atomicNumber: 47, symbol: 'Ag', name: 'hopea' },
    { atomicNumber: 48, symbol: 'Cd', name: 'kadmium' },
    { atomicNumber: 49, symbol: 'In', name: 'indium' },
    { atomicNumber: 50, symbol: 'Sn', name: 'tina' },
    { atomicNumber: 51, symbol: 'Sb', name: 'antimoni' },
    { atomicNumber: 52, symbol: 'Te', name: 'telluuri' },
    { atomicNumber: 53, symbol: 'I', name: 'jodi' },
    { atomicNumber: 54, symbol: 'Xe', name: 'ksenon' }
  ],
  // Period 6 (main part)
  [
    { atomicNumber: 55, symbol: 'Cs', name: 'cesium' },
    { atomicNumber: 56, symbol: 'Ba', name: 'barium' },
    { atomicNumber: 57, symbol: 'La', name: 'lantaani' },
    { atomicNumber: 72, symbol: 'Hf', name: 'hafnium' },
    { atomicNumber: 73, symbol: 'Ta', name: 'tantaali' },
    { atomicNumber: 74, symbol: 'W', name: 'volframi' },
    { atomicNumber: 75, symbol: 'Re', name: 'renium' },
    { atomicNumber: 76, symbol: 'Os', name: 'osmium' },
    { atomicNumber: 77, symbol: 'Ir', name: 'iridium' },
    { atomicNumber: 78, symbol: 'Pt', name: 'platina' },
    { atomicNumber: 79, symbol: 'Au', name: 'kulta' },
    { atomicNumber: 80, symbol: 'Hg', name: 'elohopea' },
    { atomicNumber: 81, symbol: 'Tl', name: 'tallium' },
    { atomicNumber: 82, symbol: 'Pb', name: 'lyijy' },
    { atomicNumber: 83, symbol: 'Bi', name: 'vismutti' },
    { atomicNumber: 84, symbol: 'Po', name: 'polonium' },
    { atomicNumber: 85, symbol: 'At', name: 'astatiini' },
    { atomicNumber: 86, symbol: 'Rn', name: 'radon' }
  ],
  // Period 7 (main part)
  [
    { atomicNumber: 87, symbol: 'Fr', name: 'frankium' },
    { atomicNumber: 88, symbol: 'Ra', name: 'radium' },
    { atomicNumber: 89, symbol: 'Ac', name: 'aktinium' },
    { atomicNumber: 104, symbol: 'Rf', name: 'rutherfordium' },
    { atomicNumber: 105, symbol: 'Db', name: 'dubnium' },
    { atomicNumber: 106, symbol: 'Sg', name: 'seaborgium' },
    { atomicNumber: 107, symbol: 'Bh', name: 'bohrium' },
    { atomicNumber: 108, symbol: 'Hs', name: 'hassium' },
    { atomicNumber: 109, symbol: 'Mt', name: 'meitnerium' },
    { atomicNumber: 110, symbol: 'Ds', name: 'darmstadtium' },
    { atomicNumber: 111, symbol: 'Rg', name: 'röntgenium' },
    { atomicNumber: 112, symbol: 'Cn', name: 'kopernikium' },
    { atomicNumber: 113, symbol: 'Nh', name: 'nihonium' },
    { atomicNumber: 114, symbol: 'Fl', name: 'flerovium' },
    { atomicNumber: 115, symbol: 'Mc', name: 'moskovium' },
    { atomicNumber: 116, symbol: 'Lv', name: 'livermorium' },
    { atomicNumber: 117, symbol: 'Ts', name: 'tennessiini' },
    { atomicNumber: 118, symbol: 'Og', name: 'organesson' }
  ]
];

export const lanthanides: (ElementData | null)[] = [
  null, null, null,
  { atomicNumber: 58, symbol: 'Ce', name: 'cerium' },
  { atomicNumber: 59, symbol: 'Pr', name: 'praseodyymi' },
  { atomicNumber: 60, symbol: 'Nd', name: 'neodyymi' },
  { atomicNumber: 61, symbol: 'Pm', name: 'prometium' },
  { atomicNumber: 62, symbol: 'Sm', name: 'samarium' },
  { atomicNumber: 63, symbol: 'Eu', name: 'europium' },
  { atomicNumber: 64, symbol: 'Gd', name: 'gadolinium' },
  { atomicNumber: 65, symbol: 'Tb', name: 'terbium' },
  { atomicNumber: 66, symbol: 'Dy', name: 'dysprosium' },
  { atomicNumber: 67, symbol: 'Ho', name: 'holmium' },
  { atomicNumber: 68, symbol: 'Er', name: 'erbium' },
  { atomicNumber: 69, symbol: 'Tm', name: 'tulium' },
  { atomicNumber: 70, symbol: 'Yb', name: 'ytterbium' },
  { atomicNumber: 71, symbol: 'Lu', name: 'lutetium' },
  null
];

export const actinides: (ElementData | null)[] = [
  null, null, null,
  { atomicNumber: 90, symbol: 'Th', name: 'torium' },
  { atomicNumber: 91, symbol: 'Pa', name: 'protaktinium' },
  { atomicNumber: 92, symbol: 'U', name: 'uraani' },
  { atomicNumber: 93, symbol: 'Np', name: 'neptunium' },
  { atomicNumber: 94, symbol: 'Pu', name: 'plutonium' },
  { atomicNumber: 95, symbol: 'Am', name: 'amerikium' },
  { atomicNumber: 96, symbol: 'Cm', name: 'curium' },
  { atomicNumber: 97, symbol: 'Bk', name: 'berkelium' },
  { atomicNumber: 98, symbol: 'Cf', name: 'kalifornium' },
  { atomicNumber: 99, symbol: 'Es', name: 'einsteinium' },
  { atomicNumber: 100, symbol: 'Fm', name: 'fermium' },
  { atomicNumber: 101, symbol: 'Md', name: 'mendelevium' },
  { atomicNumber: 102, symbol: 'No', name: 'nobelium' },
  { atomicNumber: 103, symbol: 'Lr', name: 'lawrencium' },
  null
]; 