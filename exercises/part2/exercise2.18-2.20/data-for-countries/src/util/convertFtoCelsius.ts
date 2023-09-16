/**
 * Converts Kelvin to Celsius
 * @param {number} f Temperature in Kelvin
 * @returns
 */
export default function convertToCelsius(f: number) {
  return (f - 273.15).toFixed(0)
}
