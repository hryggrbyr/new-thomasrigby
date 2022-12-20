/* eslint-disable */

/**
 * Human-readable Number
 * Converts a number to a string by using the current or specified locale.
 * @param {number} value The number to convert
 * @param {string} lang The language to use while formatting (optional). Falls back to British English
 * @param {string} compact Use short-form formatting (optional). Falls back to false
 * @return {string} The converted number as a human-readable string
 * @example humanReadableNumber(12345.67) // 12,345.67
 * @example humanReadableNumber(12345.67, 'de') // 12.345,67
 * @example humanReadableNumber(12345.67, null, true) // 123K
*/

const humanReadableNumberCompact = (v, l) => new Intl.NumberFormat(l, { notation: 'compact' }).format(v)

const humanReadableNumber = (value, lang = null, compact = false) => {
  if (!value) return;
  const locale = lang || 'en-GB';
  const number = parseFloat(value, 10);
  if (compact) return humanReadableNumberCompact(number, locale);
  return number.toLocaleString(locale);
};

module.exports = humanReadableNumber;
