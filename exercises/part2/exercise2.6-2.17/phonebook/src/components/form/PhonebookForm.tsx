import React, { useEffect, useState } from 'react'
import style from './phonebookForm.module.css'
import { handleKeyDown } from '../../util/keydownHandler'

type PhonebookFormPropsType = {
  label: string
  placeholderName: string
  placeholderNumber: string
  newName: string
  newNumber: string
  setNewNameCb: (value: React.SetStateAction<string>) => void
  setNewNumberCb: (value: React.SetStateAction<string>) => void
  addNewPersonCb: (e: React.FormEvent<HTMLFormElement>) => void
}

function PhonebookForm({
  label,
  placeholderName,
  placeholderNumber,
  newName,
  setNewNameCb,
  newNumber,
  setNewNumberCb,
  addNewPersonCb,
}: PhonebookFormPropsType) {
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if (newName != '' && newName != ' ' && newNumber != '') setDisabled(false)
    else {
      setDisabled(true)
    }
    return () => {}
  }, [newName, newNumber])

  return (
    <div className={style.container}>
      <h2>{label}</h2>
      <form action="" className={style.form} id="phonebookForm" onSubmit={addNewPersonCb} spellCheck>
        <div className={style.inputContainer}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={newName}
            placeholder={placeholderName}
            onChange={({ currentTarget }) => setNewNameCb(currentTarget.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="number">Number</label>
          <input
            id="number"
            value={newNumber}
            placeholder={placeholderNumber}
            onChange={({ currentTarget }) => setNewNumberCb(currentTarget.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div>
          <button className={style.button} type="submit" disabled={disabled}>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default PhonebookForm
