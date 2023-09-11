import { NotificationType } from '../App'
import { Contacts } from '../api/phonebook'

type ReactSetStateAction = {
  setContacts: (value: React.SetStateAction<Contacts[]>) => void
  setNotification: (value: React.SetStateAction<NotificationType>) => void
}
interface DeleteContactCallback extends ReactSetStateAction {
  toBeDeleted: Contacts
}
interface AddNewContactCallback extends ReactSetStateAction {
  newName: string
}
interface ChangeContactCallback extends ReactSetStateAction {
  existingContact: Contacts
}
interface UpdateStatesContactnotExist extends ReactSetStateAction {
  id: string
  newName: string
}
type ChangeContactCallbackFn = (newName: string, newNumber: string) => void
type AddNewContactCallbackFn = (contact: Contacts) => void
type DeleteContactCallbackFn = (contacts: Contacts[], status: number | undefined, id: string) => void

/**
 *
 * @param {DeleteContactCallback} param0
 * @returns {DeleteContactCallbackFn}
 */
export function updateStatesOnDeleteContact({
  toBeDeleted,
  setContacts,
  setNotification,
}: DeleteContactCallback): DeleteContactCallbackFn {
  return (contacts: Contacts[], status: number | undefined, id: string) => {
    if (status === 200) {
      const updatedContacts = contacts.filter((contact) => contact.id !== id)
      setContacts(updatedContacts)
      setNotification({ type: 'success', message: `Successfully removed ${toBeDeleted.name} from the phonebook` })
      setTimeout(() => {
        setNotification({ type: '', message: '' })
      }, 4000)
    }
  }
}

/**
 * @param {AddNewContactCallback} param0
 * @returns {AddNewContactCallbackFn}
 */
export function updateStatesOnAddContact({
  newName,
  setContacts,
  setNotification,
}: AddNewContactCallback): AddNewContactCallbackFn {
  return (contact: Contacts) => {
    if (contact) {
      setContacts((prevCon) => [...prevCon, contact].sort((a, b) => a.name.localeCompare(b.name)))
      setNotification({ type: 'success', message: `Successfully added ${newName} in the phonebook` })
      setTimeout(() => {
        setNotification({ type: '', message: '' })
      }, 4000)
    }
  }
}

/**
 * @param {ChangeContactCallback} param0
 * @returns {ChangeContactCallbackFn}
 */
export function updateStatesOnNumberChange({
  existingContact,
  setContacts,
  setNotification,
}: ChangeContactCallback): ChangeContactCallbackFn {
  return (newName: string, newNumber: string) => {
    setContacts((prevCon) => {
      const newContactsState = [
        ...prevCon.filter((con) => con.name != newName),
        { ...existingContact, number: newNumber },
      ]
      return newContactsState.sort((a, b) => a.name.localeCompare(b.name))
    })
    setNotification({ type: 'success', message: 'Number replaced succesfully' })
    setTimeout(() => {
      setNotification({ type: '', message: '' })
    }, 4000)
  }
}
/**
 * @param {UpdateStatesContactnotExist} param0
 * @returns {void}
 */
export function updateStatesContactNotExist({
  id,
  newName,
  setContacts,
  setNotification,
}: UpdateStatesContactnotExist): void {
  setContacts((prevCon) => prevCon.filter((con) => con.id != id))
  setNotification({
    type: 'warn',
    message: `Information of ${newName} has already been removed from the phonebook`,
  })
  setTimeout(() => {
    setNotification({ type: '', message: '' })
  }, 4000)
}
