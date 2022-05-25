import './Layout.css'
import Modals from '../Modals/Modals'

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Modals />
      {children}
    </div>
  )
}

export default Layout
