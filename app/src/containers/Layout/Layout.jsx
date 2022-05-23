import './Layout.css'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      {children}
    </div>
  )
}

export default Layout
