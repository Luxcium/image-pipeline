/**
 * Formats a date into a readable string in UTC.
 * @param date - The date to format
 * @returns A formatted date string
 * @throws {Error} If date is invalid, null, or undefined
 */
export function formatDate(date: Date): string {
  // Input validation
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new Error('Invalid date provided');
  }

  // Create UTC date to ensure timezone consistency
  const utcDate = new Date(Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  ));

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  };

  return utcDate.toLocaleDateString('en-US', options);
}
