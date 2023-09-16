import Card from '../components/cards/Card'
import style from './countryInfoCards.module.css'

type CountryInfoCardsPropsType = {
  country: {
    currencies: []
    car: object
    idd: {
      root: string
      suffixes: []
    }
    latlng: [number, number]
    population: number
    subregion: string
  }
}

function CountryInfoCards({ country }: CountryInfoCardsPropsType) {
  if (Object.entries(country).length > 0) {
    const car = Object.entries(country.car) as [[string, [string]], [string, string]]
    const currencies = Object.entries(country.currencies)

    return (
      <div className={style.cardWrapper}>
        {currencies.map(([, { name, symbol }]) => (
          <Card title={'Currency'} style={style}>
            <Card.MainContent>{symbol}</Card.MainContent>
            <Card.MinorContent>{name}</Card.MinorContent>
          </Card>
        ))}

        <Card title={`Car ${car[0][0]}`} style={style}>
          <Card.MainContent>{car[0][1][0]}</Card.MainContent>
          <Card.MinorContent>
            {car[1][1].charAt(0).toUpperCase()}
            {car[1][1].substring(1)}
          </Card.MinorContent>
        </Card>

        <Card title={'IDD'} style={style}>
          <Card.MainContent>{country.idd.root}</Card.MainContent>
          <Card.MinorContent>
            {country.idd.suffixes.map((suffx: string) => (
              <span key={crypto.randomUUID()}>[{suffx}]</span>
            ))}
          </Card.MinorContent>
        </Card>

        <Card title={'Location'} style={style}>
          <Card.MainContent>
            {country.latlng[0]}&deg;{country.latlng[1]}&deg;
          </Card.MainContent>
          <Card.MinorContent> {country.subregion}</Card.MinorContent>
        </Card>

        <Card title={'Population'} style={style}>
          <Card.MainContent>
            {Intl.NumberFormat('en-US', {
              notation: 'compact',
            }).format(country.population)}
          </Card.MainContent>
          <Card.MinorContent>People</Card.MinorContent>
        </Card>
      </div>
    )
  }
}

export default CountryInfoCards
