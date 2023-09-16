/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import style from './country.module.css'
import CountryData from '../api/countriesData'
import CountryMap from '../ui/CountryMap'
import CountryName from '../ui/CountryName'
import CountryInfoCards from '../ui/CountryInfoCards'
import CountryExtraInfo from '../ui/CountryExtraInfo'
import CountryWeather from '../ui/CountryWeather'

export type WeatherDataType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  weather: [{ description: string; icon: string }]
  main: {
    feels_like: number
    temp: number
    pressure: number
    humidity: number
  }
  wind: {
    speed: number
  }
  visibility: number
}

function Country({ countries }: { countries: any[] }) {
  const [weatherData, setWeatherData] = useState<WeatherDataType>()
  useEffect(() => {
    if (countries.length === 1) {
      try {
        const fn = async () => {
          if (countries.length === 1) {
            const _weatherData = await CountryData.getWeatherDataForCapital({
              lat: countries[0].capitalInfo.latlng[0],
              lon: countries[0].capitalInfo.latlng[1],
            })
            setWeatherData(_weatherData)
          }
        }
        fn()
      } catch (error) {
        console.log(error)
      }
    }

    return () => {
      CountryData.abortRequest()
    }
  }, [countries])

  if (countries.length === 1) {
    return (
      <div className={style.countrywrapper}>
        <CountryMap country={countries[0]} style={style} />
        <CountryName country={countries[0]} />
        <CountryInfoCards country={countries[0]} />
        <CountryExtraInfo country={countries[0]} />
        <CountryWeather country={countries[0]} weatherData={weatherData} />

        <div>
          <span>
            View map on:{' '}
            <a href={countries[0].maps.googleMaps}>
              Google Maps<span>&#8599;</span>
            </a>{' '}
            <a href={countries[0].maps.openStreetMaps}>
              Open Street Maps<span>&#8599;</span>
            </a>
          </span>
        </div>
      </div>
    )
  }
}

export default Country
