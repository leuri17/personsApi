import '../styles/Footer.css'
import { PropTypes } from 'prop-types'

const Footer = ({ children, ...props }) => {
  return (
    <footer {...props}>
      {children}
    </footer>
  )
}

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Footer
