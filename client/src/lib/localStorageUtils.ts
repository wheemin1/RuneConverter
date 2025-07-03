// Local storage utility for rune conversions

export interface SavedRuneConversion {
  id: string;
  koreanName: string;
  englishName: string;
  runeText: string;
  timestamp: number;
}

const STORAGE_KEY = 'viking-rune-converter-saved-results';

/**
 * Save a rune conversion result to local storage
 */
export function saveRuneConversion(koreanName: string, englishName: string, runeText: string): SavedRuneConversion {
  // Get existing saved conversions
  const savedConversions = getSavedConversions();
  
  // Create new conversion with unique ID
  const newConversion: SavedRuneConversion = {
    id: generateId(),
    koreanName,
    englishName,
    runeText,
    timestamp: Date.now(),
  };
  
  // Add to the beginning of the array (most recent first)
  savedConversions.unshift(newConversion);
  
  // Limit to 10 saved conversions
  const limitedConversions = savedConversions.slice(0, 10);
  
  // Save to local storage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(limitedConversions));
  
  return newConversion;
}

/**
 * Get all saved conversions from local storage
 */
export function getSavedConversions(): SavedRuneConversion[] {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (!savedData) return [];
  
  try {
    return JSON.parse(savedData) as SavedRuneConversion[];
  } catch (error) {
    console.error('Error parsing saved conversions:', error);
    return [];
  }
}

/**
 * Delete a saved conversion by ID
 */
export function deleteRuneConversion(id: string): boolean {
  const savedConversions = getSavedConversions();
  const filteredConversions = savedConversions.filter(conv => conv.id !== id);
  
  if (filteredConversions.length === savedConversions.length) {
    return false; // Nothing was deleted
  }
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredConversions));
  return true;
}

/**
 * Clear all saved conversions
 */
export function clearAllRuneConversions(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Generate a unique ID for saved conversion
 */
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
}

/**
 * Format a timestamp to a readable date string
 */
export function formatTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}
