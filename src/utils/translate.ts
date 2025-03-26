export const translateElementName = (name: string): string => {
  const translations: { [key: string]: string } = {
    "Hydrogen": "Vety",
    "Helium": "Helium",
    "Lithium": "Litium",
    "Beryllium": "Beryliumi",
    "Boron": "Boori",
    "Carbon": "Hiili",
    "Nitrogen": "Typpi",
    "Oxygen": "Happi",
    "Fluorine": "Fluori",
    "Neon": "Neoni",
    "Sodium": "Natrium",
    "Magnesium": "Magnesium",
    "Aluminium": "Alumiini",
    "Silicon": "Piidi",
    "Phosphorus": "Fosfori",
    "Sulfur": "Rikki",
    "Chlorine": "Kloori",
    "Argon": "Argon",
    "Potassium": "Kalium",
    "Calcium": "Kalsium"
    // Add more translations as needed
  };
  return translations[name] || name;
}; 