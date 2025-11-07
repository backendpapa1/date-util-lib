/**
 * Format a date to YYYY-MM-DD format
 * @param {Date} date - The date to format
 * @returns {string} Formatted date string
 */
export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Add days to a date
 * @param {Date} date - The base date
 * @param {number} days - Number of days to add
 * @returns {Date} New date with days added
 */
export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}