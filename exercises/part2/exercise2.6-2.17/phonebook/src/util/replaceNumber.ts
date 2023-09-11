/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotificationType } from '../App'
import errorLogger from '../api/errorLogger'
import { Contacts, Phonebook, RequestError } from '../api/phonebook'
import { updateStatesContactNotExist, updateStatesOnNumberChange } from './stateUpdateCallback'

type ReactSetStateActionsCb = {
  setContacts: (value: React.SetStateAction<Contacts[]>) => void
  setNotification: (value: React.SetStateAction<NotificationType>) => void
  setError: React.Dispatch<React.SetStateAction<RequestError>>
}
/**
 * Replaces the number of a contact if new name provided exists in the phonebook.
 * On error, checks if the number is actually exist in the server, if not sets/updates
 * the motification message to be rendered to the user
 *
 * @param {string} newName New name to be added
 * @param {string} newNumber New number to be added
 * @param {Contacts} existingContact Existing contact in the phoneook
 * @param {ReactSetStateActionsCb} reactSetStateAction  Callbacks to update react states
 * @returns {Promise<void>}
 */
export default async function replaceNumberOfExistingContact(
  newName: string,
  newNumber: string,
  existingContact: Contacts,
  { setError, setContacts, setNotification }: ReactSetStateActionsCb
): Promise<void> {
  const payload = { name: newName, number: newNumber }
  const id = existingContact ? existingContact.id : ''
  const confirmMsg = `${newName} already exist in the phonebook. Replace old number with the new one?`

  const shouldBeReplaced = confirm(confirmMsg)
  const updateStatesCb = updateStatesOnNumberChange({ existingContact, setContacts, setNotification })
  try {
    if (shouldBeReplaced) {
      const changeResponse = await Phonebook.changeContactNumber(payload, id)
      changeResponse === 200 && updateStatesCb(newName, newNumber)
    }
  } catch (err: any) {
    errorLogger(err, 'changeContactNumber')
    setError({ method: err.config.method, url: err.config.url, code: err.code, message: err.message })
    if (err.config.method === 'put' && err.code === 'ERR_BAD_REQUEST') {
      try {
        await Phonebook.getContact(err.config.url)
      } catch (err: any) {
        errorLogger(err, 'getContact')
        err.config.method === 'get' &&
          err.code === 'ERR_BAD_REQUEST' &&
          updateStatesContactNotExist({ id, newName, setContacts, setNotification })
      }
    }
  }
}
