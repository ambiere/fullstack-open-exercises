import style from './countries.module.css'

function CountryList({
  countries,
  setCountries,
}: {
  countries: Array<{ name: { common: string } }>
  setCountries: React.Dispatch<React.SetStateAction<Array<object>>>
}) {
  if (countries.length > 1)
    return (
      <div className={style.container}>
        <ul className={style.ul}>
          {countries.map((country) => (
            <li key={crypto.randomUUID()} className={style.li}>
              {country.name.common}
              <button className={style.button} onClick={() => setCountries([country])}>
                Show
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default CountryList
