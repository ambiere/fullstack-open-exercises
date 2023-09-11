/**
 * Disable text keys on number input.
 * @param {React.KeyboardEvent<HTMLInputElement>} e
 */

export function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  if (!/[0-9]|-|\+/gm.test(e.key) && e.key != 'Backspace' && e.key != 'Enter') {
    e.preventDefault()
  }
}
