/**
 * Formats a price value into a string with currency symbol.
 *
 * @param {number | string} price - The price value to be formatted. It can be a number or a string that can be converted to a number.
 * @param {Intl.NumberFormatOptions} [options] - Optional. An object with properties that reflect the internationalization options of the NumberFormat object.
 *
 * @returns {string} The formatted price string with currency symbol.
 *
 * @throws {console.warn} If the price value cannot be converted to a number, a warning is logged to the console and the function returns the original price value with a currency symbol.
 *
 * @example
 * // returns "1,234.56 ₴"
 * priceFormatter(1234.56)
 *
 * @example
 * // returns "1,234.56 ₴"
 * priceFormatter("1234.56")
 *
 * @example
 * // returns "1,234.56 ₴"
 * priceFormatter("1234.56", { minimumFractionDigits: 2 })
 *
 * @example
 * // returns "1,234.56 ₴"
 * priceFormatter("not a number") // logs a warning to the console
 */
export const priceFormatter = (
  price: number | string,
  options?: Intl.NumberFormatOptions,
): string => {
  const priceAsNumber = +price

  if (isNaN(priceAsNumber)) {
    // console.warn("The given value is should be a number. Or can be converted to a number: ", price)
    return price + " ₴"
  }

  return new Intl.NumberFormat("uk", {
    style: "currency",
    currency: "UAH",
    currencyDisplay: "narrowSymbol",
    ...(options ? options : {}),
  }).format(priceAsNumber)
}
