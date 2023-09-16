import React from 'react'
import style from './searchInput.module.css'

type SearchInputPropsType = {
  label: string
  setQuery: React.Dispatch<React.SetStateAction<string>>
}

function SearchInput({ label, setQuery }: SearchInputPropsType) {
  return (
    <div className={style.container}>
      <label htmlFor="search">{label}</label>
      <input type="text" id="search" onInput={({ currentTarget }) => setQuery(currentTarget.value)} />
    </div>
  )
}

export default SearchInput
