import style from './name.module.css'

type NamePropsType = {
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
  }
}

function Name({ country }: NamePropsType) {
  if (country) {
    const nativeName = Object.entries(country.name.nativeName)[0][1] as { official: string; common: string }
    return (
      <div className={style.nameWrapper}>
        <div className={style.common}>
          <p>{country.name.common}</p>
          <p>({nativeName.common})</p>
        </div>
        <div className={style.officialName}>
          <h2>{country.name.official}</h2>
          {country.coatOfArms.svg && (
            <span className={style.coatOfArms} data-coat-of-arms={`${country.name.common} coat of arms`}>
              <img src={country.coatOfArms.svg} alt={`${country.name.common} coat of arms`} height={14} />
            </span>
          )}
          <span className={style.flag} data-flag={`Flag of ${country.name.common}`}>
            <img src={country.flags.svg} alt={country.flags.alt} height={14} />
          </span>
          <span className={style.cca3} data-cca3="ISO 3166-1 alpha-3 code">
            {country.cca3}
          </span>
        </div>
        <span className={style.officialNative}>
          <p>Official native name:</p>
          <p>{nativeName.official}</p>
        </span>
      </div>
    )
  }
}

export default Name
