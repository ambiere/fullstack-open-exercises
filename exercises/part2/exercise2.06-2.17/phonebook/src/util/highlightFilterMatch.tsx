/**
 * Highlights the matched word/letters in the `value`
 * referencing the `match` string provided
 * @example
 * highlightMatched("hello", "ho", style)
 * output:  `h`ell`o`
 * @param {string} value A string from which to match
 * @param {string} match A word/letters to match
 * @param {CSSModuleClasses} style Style module containing `.matched` and `.notMatched` classes
 * @returns {JSX.Element}
 */
export default function highlightMatched(value: string, match: string, style: CSSModuleClasses): JSX.Element {
  const matchSplit = match.split('')
  const matchSet = new Set<string>()
  matchSplit.map((x) => matchSet.add(x))

  const valueSplit = value.split('')
  const matchArray = new Array(value.length)
  const matchJSXComponent: { [index: number]: JSX.Element }[] = []

  for (let i = 0; i < matchSet.size; i++) {
    for (let x = 0; x < valueSplit.length; x++) {
      if (Array.from(matchSet)[i].toLowerCase() !== valueSplit[x].toLowerCase()) {
        matchArray[x] = valueSplit[x]
      } else {
        matchJSXComponent.push({ [x]: <span className={style.matched}>{valueSplit[x]}</span> })
      }
    }
  }

  matchJSXComponent.map((c) => matchArray.splice(Number(Object.keys(c)[0]), 1, c[Number(Object.keys(c)[0])]))

  console.log(matchArray)

  return (
    <>
      {matchArray.map((x) => {
        if (typeof x === 'object') {
          return x
        } else {
          return <span className={style.notMatched}>{x}</span>
        }
      })}
    </>
  )
}
