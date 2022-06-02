
// Import CSS
import { useRef } from 'react'
import './Navbar.css'

const Navbar = () => {

  const searchMenu = useRef()

  const handleInputSearch = (e) => {
    const menu = searchMenu.current
    menu.classList.toggle('isOpen')
  }

  return (
      <nav className="Navbar">
        <div className="Navbar__container">
          <ul className='Navbar__ul'>
            <li className='Navbar__li'>
              <button className='Navbar__btn'>
                <i className="fad fa-location"></i>
                <span>Locations</span>
              </button>
            </li>
            <li className='Navbar__li'>
              <button onClick={handleInputSearch} className='Navbar__btn'>
                <i className="fad fa-search"></i>
                <span>Search</span>
              </button>
            </li>
          </ul>
        </div>
        <div ref={searchMenu} className="Navbar__searchContent">
          <div className="input-group">
            <input type="text" name='search' id='searchCity' required />
            <label htmlFor="searchCity">
              <span>Search</span>
            </label>
          </div>
        </div>
      </nav>
  )
}

export default Navbar