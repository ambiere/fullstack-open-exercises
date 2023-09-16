import Info from '../components/info/Info'
import style from './countryExtraInfo.module.css'

type CountryExtraInfoPropsTye = {
  country: {
    timezones: string[]
    subregion: string
    capitalInfo: {
      latlng: number[]
    }
    capital: string[]
    languages: object
    borders: string[]
  }
}

function CountryExtraInfo({ country }: CountryExtraInfoPropsTye) {
  return (
    <div className={style.extraInfo}>
      <Info title={'Timezone(s):'} style={style}>
        <Info.MainContent>
          {country.timezones[0]} {country.subregion}
        </Info.MainContent>
        {country.timezones.length > 1 && <Info.ShowMoreButton>{country.timezones.length - 1}+more</Info.ShowMoreButton>}
      </Info>

      <Info title={'Capital:'} style={style}>
        <Info.MainContent>
          {country.capital[0]} {country.capitalInfo.latlng[0]}&deg;{country.capitalInfo.latlng[1]}
          &deg;
        </Info.MainContent>
      </Info>

      <Info title={'Languages(s):'} style={style}>
        <Info.MainContent>
          {Object.entries(country.languages)[0][1]}{' '}
          {Object.entries(country.languages)[1] && Object.entries(country.languages)[1][1]}{' '}
          {Object.entries(country.languages)[2] && Object.entries(country.languages)[2][1]}
        </Info.MainContent>
        {Object.entries(country.languages).length > 3 && (
          <Info.ShowMoreButton> {Object.entries(country.languages).length - 3}+more</Info.ShowMoreButton>
        )}
      </Info>

      {country.borders && (
        <Info title={'Border(s):'} style={style}>
          <Info.MainContent>{country.borders.map((border) => '[' + border + '] ')}</Info.MainContent>
        </Info>
      )}
    </div>
  )
}

export default CountryExtraInfo
