/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'
import style from './App.module.css'
import useDebounce from './hook/useDebounce'
import CountryData from './api/countriesData'
import errorLogger from './api/errorLogger'
import Error from './components/error/Error'
import CountryList from './view/Countries'
import Country from './view/Country'
import CountryFilter from './ui/CountryFilter'

export type RequestError = { code: string; msg: string }

function App() {
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState<any[]>([])
  const [info, setInfo] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<RequestError>({ code: '', msg: '' })

  const fetchCountries = useCallback(async () => {
    setError({ code: '', msg: '' })
    if (query !== '') {
      try {
        setIsLoading(true)
        const fetchResponse = await CountryData.getCountriesData(query)
        if (fetchResponse.length > 10) {
          setInfo('Filter matched too many countries, please provide another specific filter')
          setCountries([])
        } else {
          if (fetchResponse.length > 1) {
            setCountries(fetchResponse)
            setInfo('')
          } else if (fetchResponse.length === 1) {
            setCountries(fetchResponse)
            setInfo('')
          } else {
            setInfo('No country(s) matched the filter :(')
          }
        }
      } catch (err: any) {
        setError({ code: err.code, msg: err.message })
        errorLogger(err, 'fetchCountries')
      } finally {
        setIsLoading(false)
      }
    }
  }, [query])

  useDebounce({ effectCb: fetchCountries, deps: [query], delay: 500 })

  return (
    <div className={style.dataForContries}>
      <CountryFilter info={info} setQuery={setQuery} style={style} />
      {info === '' && (
        <div className={`${style.countries} ${isLoading && style.isLoading}`}>
          <Error error={error} />
          <CountryList countries={countries} setCountries={setCountries} />
          <Country countries={countries} />
        </div>
      )}
    </div>
  )
}

export default App
