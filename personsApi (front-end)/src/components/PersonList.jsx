import '../styles/PersonList.css'
import { useEffect } from 'react'
import PersonListItem from './PersonListItem'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonList } from '../reducers/personListReducer'
import axios from 'axios'

const PersonList = ({ ...props }) => {
  const people = useSelector(s => s.personList)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('http://localhost:8080/person').then(res => {
      dispatch(setPersonList(res.data))
    })
  }, [])

  return (
    <ul {...props}>
      {people.map(person => (
        <PersonListItem key={person.id} person={person} />
      ))}
    </ul>
  )
}

export default PersonList
