import { formatCheckDate, formatRangeDate } from '../datesUtils';

describe('formatCheckDate() helper', () => {
  // Returns a formatted date string when given a valid date object.
  it('should return a formatted date string when given a valid date object', () => {
    const date = new Date(2022, 0, 1);

    const result = formatCheckDate(date);

    expect(result).toBe('Jan 1');
  });

  // Returns an empty string when given an invalid date object.
  it('should return an empty string when given an invalid date object', () => {
    const date: undefined = undefined;
    const result = formatCheckDate(date);
    expect(result).toBe('');
  });
});

describe('formatRangeDate helper', () => {
  // Returns a formatted date range when given valid start and end dates
  it('should return a formatted date range when given valid start and end dates', () => {
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2022-01-05');
    const result = formatRangeDate(startDate, endDate, 'en');
    expect(result).toBe('Jan 1 - Jan 5');
  });

  // Returns false when either start or end date is missing
  it('should return false when either start or end date is missing', () => {
    const startDate = new Date('2022-01-01');
    const endDate: null = null;
    const result = formatRangeDate(startDate, endDate, 'en');
    expect(result).toBe(false);
  });

  it('should return false when start & end date is missing', () => {
    const startDate: null = null;
    const endDate: null = null;
    const result = formatRangeDate(startDate, endDate, 'en');
    expect(result).toBe(false);
  });

  // Formats the date range to include both start and end dates when they are the same
  it('should return a template of range when start and end dates are the same', () => {
    const startDate = new Date('2022-01-01');
    const endDate = new Date('2022-01-01');
    const result = formatRangeDate(startDate, endDate, 'en');
    expect(result).toBe('Jan 1 - 2');
  });

  // Formats the date range to include month, day, and year when start and end dates are in different years
  it('should return a formatted date range with month, day, and year when start and end dates are in different years', () => {
    const startDate = new Date('2021-12-31');
    const endDate = new Date('2022-01-01');
    const result = formatRangeDate(startDate, endDate, 'en');

    expect(result).toContain('Dec 31, 2021 - Jan 1, 2022');
  });
});
