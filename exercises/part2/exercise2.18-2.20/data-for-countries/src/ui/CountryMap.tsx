/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from 'react'

type CountryMapPropsType = {
  style: CSSModuleClasses
  country: {
    latlng: number[]
    capitalInfo: {
      latlng: number[]
    }
  }
}

function CountryMap({ style, country }: CountryMapPropsType) {
  useEffect(() => {
    if (country) {
      //@ts-ignore
      const map = L.map('map').setView([country.latlng[0], country.latlng[1]], 6)
      //@ts-ignore
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)

      //@ts-ignore
      L.circle([country.capitalInfo.latlng[0], country.capitalInfo.latlng[1]], {
        color: 'blue',
        fillColor: 'lightblue',
        fillOpacity: 0.5,
        weight: 0.5,
        radius: 200000,
      }).addTo(map)

      return () => {
        map.off()
        map.remove()
      }
    }
  }, [country])
  return <div className={style.countryMap} id="map"></div>
}

export default CountryMap
