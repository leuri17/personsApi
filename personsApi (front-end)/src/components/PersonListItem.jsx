import PhotoPlaceholder from '../assets/user-placeholder.png'
import '../styles/PersonListItem.css'
import { PropTypes } from 'prop-types'

const PersonListItem = ({ person, ...props }) => {
  return (
    <li className='personListItem'>
      <img src={PhotoPlaceholder} width='128px' />
      <div className='personData'>
        <h2>
          {person.firstName} {person.lastName}
        </h2>
        <p>Phone number: {person.phoneNumber}</p>
        <p>Email: {person.email}</p>
      </div>
    </li>
  )
}

PersonListItem.propTypes = {
  person: PropTypes.object
}

export default PersonListItem
