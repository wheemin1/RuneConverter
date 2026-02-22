// Local test API connection settings

// Note: Server storage functionality is not currently implemented.
// All rune conversions are stored in localStorage only.
// See localStorageUtils.ts for client-side storage implementation.

// If server-side storage is needed in the future, implement the following:
// - POST /api/rune-conversions - Save conversion to database
// - GET /api/rune-conversions - Get all conversions
// - GET /api/rune-conversions/popular - Get popular conversions

// API base URL configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:5000/api';

// Export API_BASE_URL for potential future use
export { API_BASE_URL };
