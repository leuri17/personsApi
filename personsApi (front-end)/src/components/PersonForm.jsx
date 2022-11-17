import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPerson } from '../reducers/personListReducer'
import '../styles/PersonForm.css'

const PersonForm = ({ ...props }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    axios
      .post('http://localhost:8080/person', {
        firstName,
        lastName,
        phoneNumber,
        email
      })
      .then(res => {
        dispatch(addPerson(res.data))
      })
  }

  return (
    <form onSubmit={handleSubmit} {...props}>
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
  )
}

export default PersonForm
