import getFormattedPrice from '../getFormattedPrice';

describe('getFormattedPrice() helper', () => {
  // Formats a numeric price into a localized currency string with default options.
  it('should format a numeric price into a localized currency string with default options', () => {
    const formattedPrice = getFormattedPrice(1234);
    expect(formattedPrice).toBe('฿1,234');
  });

  // Returns 'NaN' when price is not a number.
  it('should return NaN when price is not a number', () => {
    const formattedPrice = getFormattedPrice('abc');
    expect(formattedPrice).toBe('NaN');
  });

  // Returns a string with maximum allowed decimal places when given maximumFractionDigits is less than minimumFractionDigits.
  it('should return a string with maximum allowed decimal places', () => {
    const customOptions = {
      maximumFractionDigits: 3,
    };
    const formattedPrice = getFormattedPrice(5678.9012, customOptions);
    expect(formattedPrice).toBe('฿5,678.901');
  });

  // Returns a string with the correct currency code for the given currency.
  it('should return a string with the correct currency code for the given currency', () => {
    const formattedPrice = getFormattedPrice(1234);
    expect(formattedPrice).toBe('฿1,234');
  });
});
