import Navbar from '../Nabvar/Navbar'
// Import CSS
import './Wrapper.css'

const Wrapper = ({children}) => {
  return (
    <div className="Wrapper">
      <Navbar />
      {children}
    </div>
  )
}

export default Wrapper