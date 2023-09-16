/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export default class CountryData {
  controller: AbortController
  constructor() {
    this.controller = new AbortController()
  }

  #transformResponse(data: any, query: string) {
    const regEx = new RegExp(query, 'gi')
    return [...JSON.parse(data)].filter((country) => country.name.common.match(regEx))
  }

  static async getCountriesData(query: string) {
    const getResponse = await axios.get('/api/all', {
      signal: new CountryData().controller.signal,
      baseURL: import.meta.env.VITE_API_URL,
      transformResponse: [(data) => new CountryData().#transformResponse(data, query)],
    })
    return await getResponse.data
  }

  static async getWeatherDataForCapital({ lat, lon }: { lat: number; lon: number }) {
    const getResponse = await axios.get(
      `${import.meta.env.VITE_OPEN_WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${
        import.meta.env.VITE_OPEN_WEATHER_API_KEY
      }`,
      {
        signal: new CountryData().controller.signal,
        baseURL: import.meta.env.VITE_OPEN_WEATHER_API_URL,
      }
    )
    return await getResponse.data
  }

  static abortRequest() {
    return new CountryData().controller.abort()
  }
}
