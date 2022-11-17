import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function App () {
  const [persons, setPersons] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    setPersons([
      ...persons,
      { id: firstName, firstName, lastName, phoneNumber, email }
    ])
  }

  return (
    <>
      <Header />

      <div id='main' style={{ display: 'flex' }}>
        <div id='persons' style={{ minWidth: '50%' }}>
          {persons.map(p => (
            <div key={p.id}>{p.firstName}</div>
          ))}
        </div>
        <div id='personsForm' style={{ minWidth: '50%' }}>
          <form onSubmit={handleSubmit}>
            <div className='formGroup'>
              <label htmlFor='firstNameInput'>First name:</label>
              <input
                type='text'
                id='firstNameInput'
                name='firstName'
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value)
                }}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='lastNameInput'>Last name:</label>
              <input
                type='text'
                id='lastNameInput'
                name='lastName'
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value)
                }}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='phoneNumberInput'>Phone number:</label>
              <input
                type='text'
                id='phoneNumberInput'
                name='phoneNumber'
                value={phoneNumber}
                onChange={e => {
                  setPhoneNumber(e.target.value)
                }}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='emailInput'>Email:</label>
              <input
                type='email'
                id='emailInput'
                name='emial'
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className='formGroup'>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>

      <footer>Persons App by Leuri Alonso & Victor Irimies</footer>
    </>
  )
}

export default App
