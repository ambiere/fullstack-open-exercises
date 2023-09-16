import Name from '../components/name/Name'
import AltSpellings from '../components/altSpellings/AltSpellings'
import Badge from '../components/badges/Badge'
import style from './countryName.module.css'

type CountryNamePropsType = {
  country: {
    name: {
      official: string
      common: string
      nativeName: object
    }
    coatOfArms: { svg: string }
    flags: {
      svg: string
      alt: string
    }
    cca3: string
    unMember: boolean
    independent: boolean
    landlocked: boolean
    area: number
    continents: string
    altSpellings: object
  }
}

function CountryName({ country }: CountryNamePropsType) {
  if (Object.entries(country).length > 0) {
    const altSpellings = Object.entries(country.altSpellings)
    return (
      <div className={style.countryName}>
        <Name country={country} />
        <AltSpellings altSpellings={altSpellings} />
        <Badge country={country} />
      </div>
    )
  }
}

export default CountryName
