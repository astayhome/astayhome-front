import { formatGuests } from '../guestsUtils';

describe('formatGuests() helper', () => {
  // Returns formatted string with correct translation for valid input
  it('should return formatted string with ru translation when guestsObj is valid and one guest', () => {
    const guestsObj: Guests = {
      guests: 1,
      rooms: 2,
    };
    const locale = 'ru';
    const result = formatGuests(guestsObj, locale);
    expect(result).toBe('1 гость');
  });

  it('should return formatted string with correct translation when guestsObj is valid', () => {
    const guestsObj: Guests = {
      guests: 3,
      rooms: 2,
    };
    const locale = 'en';
    const result = formatGuests(guestsObj, locale);
    expect(result).toBe('3 guests');
  });

  it('should return formatted string with correct translation when guestsObj is valid and guests more then 5', () => {
    const guestsObj: Guests = {
      guests: 6,
      rooms: 2,
    };
    const locale = 'en';
    const result = formatGuests(guestsObj, locale);
    expect(result).toBe('6 guests');
  });

  // Returns false for guestsObj with guests property equal to null or undefined
  it('should return 0 when guestsObj has guests property equal to null', () => {
    const guestsObj: Guests = {
      guests: null,
      rooms: 2,
    };
    const locale = 'en';
    const result = formatGuests(guestsObj, locale);
    expect(result).toBe(0);
  });

  // Returns false for guestsObj with guests property equal to undefined
  it('should return 0 when guestsObj has guests property equal to undefined', () => {
    const guestsObj: Guests = {
      guests: undefined,
      rooms: 2,
    };
    const locale = 'en';
    const result = formatGuests(guestsObj, locale);
    expect(result).toBe(0);
  });

  // Returns false for guestsObj equal to null or undefined
  it('should return false when guestsObj is undefined', () => {
    const guestsObj: undefined = undefined;
    const locale = 'en';
    const result = formatGuests(guestsObj, locale);
    expect(result).toBe(false);
  });
});
