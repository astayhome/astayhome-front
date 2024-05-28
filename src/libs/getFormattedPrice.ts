/**
 * Formats a numeric price into a localized currency string with customizable options.
 *
 * @param {number | string} price - The numeric value to be formatted as currency.
 * @param {PriceOptions} [options] - Optional. An object containing formatting options.
 * @param {string} [options.locales='th-TH'] - Optional. A string representing a BCP 47 language tag specifying the locale(s) to use for formatting.
 * @param {string} [options.currency='THB'] - Optional. A string representing an ISO 4217 currency code specifying the currency to use for formatting. Defaults to 'THB'.
 * @param {number} [options.minimumFractionDigits=0] - Optional. The minimum number of fraction digits to include in the formatted value.
 *
 * For default options.minimumFractionDigits=0 to remove ".00" at the end of price
 *
 * @param {number} [options.maximumFractionDigits=2] - Optional. The maximum number of fraction digits to include in the formatted value.
 *
 *  For default options.maximumFractionDigits=2 to allow two decimal places if they are not ".00"
 *
 * @returns {string} The formatted currency string.
 *
 * @example
 * const formattedPrice = getFormattedPrice(1234);
 * // Returns: '฿1,234' (default options used: 'th-TH' locale, 'THB' currency, 'narrowSymbol' display, 0 minimum and 2 maximum fraction digits)
 *
 * @example
 * const customOptions = {
 *   locales: 'uk-UA',
 *   currency: 'UAH',
 *   minimumFractionDigits: 2,
 *   maximumFractionDigits: 4,
 * };
 * const formattedPrice = getFormattedPrice(5678.9012, customOptions);
 * // Returns: '5 678,9012 грн' (Ukrainian locale, 'UAH' currency, 'symbol' display, 2 minimum and 4 maximum fraction digits)
 */
export default function getFormattedPrice(
  price: number | string,
  options?: OptionsForFormattedPrice,
): string {
  const truePrice = Number(price);

  if (Number.isNaN(truePrice)) return 'NaN';

  const {
    locales = 'th-TH',
    currency = 'THB',
    // currencyDisplay = 'narrowSymbol',
    minimumFractionDigits = 0,
    maximumFractionDigits = 2,
  } = options || {};

  return new Intl.NumberFormat(locales, {
    style: 'currency',
    currency,
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(truePrice);
}
