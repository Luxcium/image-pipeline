import { formatDate } from '../src/dateFormatter';

describe('formatDate', () => {
  it('should format the date correctly', () => {
    const date = new Date('2023-10-01T00:00:00Z'); // October 1, 2023 in UTC
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('October 1, 2023'); // Adjust based on locale
  });
});
