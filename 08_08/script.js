/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

const tipCalculator = (sum, percentage, locale, currency) => {
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
      Sum before tip: ${moneyFormatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${moneyFormatter(locale, currency, tip)}
      Total:          ${moneyFormatter(locale, currency, total)}
    `);
};

const moneyFormatter = (locale, currency, moneyValue) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(moneyValue);

tipCalculator(29.95, 18, "en-US", "USD");
