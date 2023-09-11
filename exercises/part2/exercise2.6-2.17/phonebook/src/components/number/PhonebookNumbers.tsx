import style from './phonebookNumbers.module.css'
import Number from './Number'
import { Contacts, RequestError } from '../../api/phonebook'

type PhonebookNumbersPropsType = {
  label: string
  filter: string
  contacts: Contacts[]
  error: RequestError
  filteredContacts: Contacts[]
  deleteContactCb: (id: string) => void
}

function PhonebookNumbers({
  label,
  filter,
  contacts,
  error,
  filteredContacts,
  deleteContactCb,
}: PhonebookNumbersPropsType) {
  const isThereRequestError = error.method === 'get' && error.url === '/contacts'
  const isPhonebookEmpty = contacts.length === 0 ? (isThereRequestError ? false : true) : false
  const Contacts = <Number contacts={contacts} style={style} deleteContactCb={deleteContactCb} />
  const EmptyPhonebook = <h2>Phonebook is empty :)</h2>
  const RenderContacts = isPhonebookEmpty ? EmptyPhonebook : Contacts
  const NoContactFound = <h2>No contact was found :(</h2>
  const FilteredContacts = (
    <Number contacts={filteredContacts} style={style} filter={filter} deleteContactCb={deleteContactCb} />
  )

  return (
    <div>
      <h2>{label}</h2>
      {error.method === 'get' && error.url === '/contacts' && <h2>{error.message}</h2>}
      {error.method !== 'get' && error.url !== '/contacts' && (
        <ul className={style.ul}>
          {filter === '' && RenderContacts}
          {filteredContacts.length > 0 && FilteredContacts}
          {filter !== '' && contacts.length > 0 && filteredContacts.length <= 0 && NoContactFound}
          {filter !== '' && isPhonebookEmpty && EmptyPhonebook}
        </ul>
      )}
    </div>
  )
}

export default PhonebookNumbers
