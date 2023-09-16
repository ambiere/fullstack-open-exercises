import React from 'react'
import SearchInput from '../components/input/SearchInput'

type CountryFilterPropsType = {
  info: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
  style: CSSModuleClasses
}

function CountryFilter({ info, setQuery, style }: CountryFilterPropsType) {
  return (
    <div className={style.filter}>
      <h2 className={style.h2}>Data For Countries</h2>
      <SearchInput label="Find country(s)" setQuery={setQuery} />
      {info !== '' && <h2>{info}</h2>}
    </div>
  )
}

export default CountryFilter
