/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export type Contacts = {
  name: string
  number: string
  id: string
}

export type RequestError = {
  method: string
  url: string
  code: string
  message: string
}

export class Phonebook {
  baseUrl: string
  controller: AbortController
  constructor(baseURL?: string) {
    this.baseUrl = baseURL ?? import.meta.env.VITE_SERVER_URL
    this.controller = new AbortController()
  }

  static async getAllContacts(endpoint?: string): Promise<Contacts[]> {
    const response = await axios.get(endpoint ?? '/contacts', {
      signal: new Phonebook().controller.signal,
      baseURL: new Phonebook().baseUrl,
      transformResponse: [
        function (data) {
          return JSON.parse(data).sort((a: Contacts, b: Contacts) => a.name.localeCompare(b.name))
        },
      ],
    })
    return await response.data
  }

  static async getContact(endpoint: string): Promise<Contacts> {
    const response = await axios.get(endpoint, {
      signal: new Phonebook().controller.signal,
      baseURL: new Phonebook().baseUrl,
    })
    return await response.data
  }

  static async addNewContact(contact: Omit<Contacts, 'id'>, endpoint?: string): Promise<Contacts> {
    const body = { ...contact, id: crypto.randomUUID() }
    const response = await axios.post(endpoint ?? '/contacts', body, {
      signal: new Phonebook().controller.signal,
      baseURL: new Phonebook().baseUrl,
    })
    return await response.data
  }

  static async deleteContact(id: string, endpoint?: string): Promise<number> {
    const _endpoint = endpoint ? endpoint + '/id' : `/contacts/${id}`
    const response = await axios.delete(_endpoint, {
      signal: new Phonebook().controller.signal,
      baseURL: new Phonebook().baseUrl,
    })
    return response.status
  }

  static async changeContactNumber(contact: Omit<Contacts, 'id'>, id: string, endpoint?: string) {
    const _endpoint = endpoint ? endpoint + '/id' : `/contacts/${id}`
    const response = await axios.put(_endpoint, contact, {
      signal: new Phonebook().controller.signal,
      baseURL: new Phonebook().baseUrl,
    })
    return response.status
  }

  static abortRequest() {
    return new Phonebook().controller.abort()
  }
}
