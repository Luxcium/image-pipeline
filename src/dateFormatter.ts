/**
 * Formats a date into a readable string in UTC.
 * @param date - The date to format
 * @returns A formatted date string
 * @throws {Error} If date is invalid, null, or undefined
 * @example
 * ```typescript
 * const date = new Date('2023-10-01T00:00:00Z');
 * const formattedDate = formatDate(date);
 * console.log(formattedDate); // Outputs: October 1, 2023
 * ```
 * @remarks
 * This function ensures that the date is formatted in UTC to maintain consistency across different time zones.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date Date}
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
