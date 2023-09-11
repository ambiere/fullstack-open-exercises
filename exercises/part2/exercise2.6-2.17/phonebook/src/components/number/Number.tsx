import { Contacts } from '../../api/phonebook'
import highlightMatched from '../../util/highlightFilterMatch'

type NumberPropsType = {
  contacts: Contacts[]
  style: CSSModuleClasses
  deleteContactCb: (id: string) => void
  filter?: string
}
function Number({ contacts, filter, style, deleteContactCb }: NumberPropsType) {
  return (
    <>
      {contacts.map((contact) => (
        <li key={crypto.randomUUID()} className={style.list}>
          <div className={style.contact}>
            <span className={style.name}>{filter ? highlightMatched(contact.name, filter, style) : contact.name} </span>
            <span className={style.number}>{contact.number}</span>
          </div>
          <button className={style.button} onClick={() => deleteContactCb(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  )
}

export default Number
