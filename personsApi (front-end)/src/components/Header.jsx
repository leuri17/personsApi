import '../styles/Header.css'
import { PropTypes } from 'prop-types'

const Header = ({ title, ...props }) => {
  return (
    <header {...props}>
      <h1>{title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
