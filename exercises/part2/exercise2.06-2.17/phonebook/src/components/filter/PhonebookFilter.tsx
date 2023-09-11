import React, { useEffect } from 'react'
import style from './phonebookFilter.module.css'
import { Contacts } from '../../api/phonebook'

type PhonebookFilterPropsType = {
  label: string
  placeholder: string
  filter: string
  contacts: Contacts[]
  setFilterCb: React.Dispatch<React.SetStateAction<string>>
  setFilteredContacts: React.Dispatch<React.SetStateAction<Contacts[]>>
}
function PhonebookFilter({
  label,
  placeholder,
  filter,
  contacts,
  setFilterCb,
  setFilteredContacts,
}: PhonebookFilterPropsType) {
  useEffect(() => {
    if (filter !== '' && contacts.length > 0) {
      const mathed = contacts.filter((contact) => contact.name.toLowerCase().match(filter.toLowerCase()))
      if (mathed.length === 1) {
        setFilteredContacts(mathed)
        return
      } else {
        filter.split('').map((s) => {
          setFilteredContacts(contacts.filter((contact) => contact.name.toLowerCase().match(new RegExp(s, 'ig'))))
        })
      }
    } else {
      setFilteredContacts([])
    }
    return () => {}
  }, [contacts, filter, setFilteredContacts])

  return (
    <div className={style.container}>
      <label htmlFor="filter" className={style.label}>
        {label}
      </label>
      <input
        type="text"
        name="filter"
        id="filter"
        className={style.input}
        value={filter}
        placeholder={placeholder}
        onChange={({ currentTarget }) => setFilterCb(currentTarget.value)}
      />
    </div>
  )
}

export default PhonebookFilter
