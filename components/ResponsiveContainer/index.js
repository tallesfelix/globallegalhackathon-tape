import DesktopNavbar from '../DesktopNavbar'
import MobileNavbar from '../MobileNavbar'
import PropTypes from 'prop-types'

const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopNavbar>{children}</DesktopNavbar>
      <MobileNavbar>{children}</MobileNavbar>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

export default ResponsiveContainer