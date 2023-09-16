import { useCallback, useEffect } from 'react'

type UseDebouncePropsType = {
  effectCb: () => Promise<void>
  deps: string[]
  delay: number
}
/**Debounce seacrh input, to optimize react performance.
 *
 * [Web Dev Simplified: Instant Easy React Performance With Debounce](https://blog.webdevsimplified.com/2020-10/react-debounce/)
 * @param param0
 */
function useDebounce({ effectCb, deps, delay = 250 }: UseDebouncePropsType) {
  const callback = useCallback(effectCb, [effectCb, ...deps])

  useEffect(() => {
    const timeout = setTimeout(callback, delay)
    return () => clearTimeout(timeout)
  }, [callback, delay])
}

export default useDebounce
