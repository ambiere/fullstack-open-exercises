import convertToCelsius from '../util/convertFtoCelsius'
import { WeatherDataType } from '../view/Country'
import style from './countryWeather.module.css'

type CountryWeatherPropsType = {
  country: {
    capital: string
  }
  weatherData: WeatherDataType | undefined
}

function OtherWeatherInfo({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>
}

function CountryWeather({ country, weatherData }: CountryWeatherPropsType) {
  return (
    <div className={style.weatherContainer}>
      <h2>Weather</h2>
      {weatherData && weatherData.main && (
        <div className={style.weatherGeneral}>
          <span>{new Date().toDateString()}</span>
          <h1 className={style.weatherCapital}>{country.capital}</h1>
          <h2>
            Feels like {convertToCelsius(weatherData.main.feels_like)}&deg;C.{' '}
            {weatherData.weather[0].description.charAt(0).toUpperCase()}
            {weatherData.weather[0].description.substring(1)}.
          </h2>

          <div className={style.weatherExtraContainer}>
            <div className={style.temperatureContainer}>
              <h1 className={style.temperature}> {convertToCelsius(weatherData.main.temp)}&deg;C</h1>
              <img src={`${import.meta.env.VITE_OPEN_WEATHER_ICON_URL}${weatherData.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div className={style.otherWeather}>
              <OtherWeatherInfo>
                <p>Wind speed:</p> {weatherData.wind.speed} m/s
              </OtherWeatherInfo>
              <OtherWeatherInfo>
                <p>Pressure:</p> {weatherData.main.pressure} hPa
              </OtherWeatherInfo>
              <OtherWeatherInfo>
                <p>Humidity:</p> {weatherData.main.humidity}%
              </OtherWeatherInfo>
              <OtherWeatherInfo>
                <p>Visibility:</p>{' '}
                {Intl.NumberFormat('en-US', {
                  style: 'unit',
                  unit: 'kilometer',
                }).format(weatherData.visibility)}
              </OtherWeatherInfo>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CountryWeather
