import { useEffect, useState } from 'react'
import { Contacts, Phonebook, RequestError } from './api/phonebook'
import { updateStatesOnAddContact, updateStatesOnDeleteContact } from './util/stateUpdateCallback'
import replaceNumberOfExistingContact from './util/replaceNumber'
import PhonebookFilter from './components/filter/PhonebookFilter'
import PhonebookForm from './components/form/PhonebookForm'
import PhonebookNumbers from './components/number/PhonebookNumbers'
import Notification from './components/notification/Notification'
import style from './App.module.css'
import errorLogger from './api/errorLogger'

export type NotificationType = {
  type: string
  message: string
}

const App = () => {
  const [contacts, setContacts] = useState<Contacts[]>([])
  const [filteredList, setFilteredList] = useState<Contacts[]>([])
  const [notification, setNotification] = useState<NotificationType>({ type: '', message: '' })
  const [error, setError] = useState<RequestError>({ method: '', url: '', code: '', message: '' })
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    Phonebook.getAllContacts().then((contacts) => setContacts(contacts))
    return () => {}
  }, [])

  const addNewPersonInPhonebook = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const existingContact = contacts.find((contact) => contact.name === newName)
    if (existingContact) {
      const setStateActions = { setError, setContacts, setNotification }
      replaceNumberOfExistingContact(newName, newNumber, existingContact, setStateActions)
    } else {
      const updateStatesCb = updateStatesOnAddContact({ newName, setContacts, setNotification })
      const addResponse = await Phonebook.addNewContact({ name: newName, number: newNumber })
      addResponse && updateStatesCb(addResponse)
    }
    setTimeout(() => {
      setNewName('')
      setNewNumber('')
    }, 500)
    return
  }

  const deletePersonInPhonebook = async (id: string) => {
    const toBeDeleted = contacts.filter((contact) => contact.id === id)[0]
    const shouldBeDeleted = confirm(`Delete ${toBeDeleted.name}?`)
    const updateStatesCb = updateStatesOnDeleteContact({ toBeDeleted, setContacts, setNotification })

    if (shouldBeDeleted) {
      try {
        const deleteResponse = await Phonebook.deleteContact(id)
        deleteResponse && updateStatesCb(contacts, deleteResponse, id)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        errorLogger(err, 'deleteContact')
        setError({ method: err.config.method, url: err.config.url, code: err.code, message: err.message })
      }
    }
  }

  return (
    <div className={style.phonebook}>
      <Notification notification={notification} />
      <h2>Phonebook</h2>
      <PhonebookFilter
        label="Filter phonebook"
        placeholder='example: "Arto"'
        contacts={contacts}
        filter={filter}
        setFilterCb={setFilter}
        setFilteredContacts={setFilteredList}
      />
      <PhonebookForm
        label="Add new"
        newName={newName}
        setNewNameCb={setNewName}
        newNumber={newNumber}
        setNewNumberCb={setNewNumber}
        addNewPersonCb={addNewPersonInPhonebook}
        placeholderName={'Arto Hellas'}
        placeholderNumber={'040-123456'}
      />

      <PhonebookNumbers
        label="Numbers"
        filter={filter}
        contacts={contacts}
        error={error}
        filteredContacts={filteredList}
        deleteContactCb={deletePersonInPhonebook}
      />
    </div>
  )
}

export default App
