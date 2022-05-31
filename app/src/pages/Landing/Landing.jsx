import { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'wouter'
// Load Custom Hooks
import { getRealTime } from '../../services/get-real-time'
// Load Components
import logo from '../../assets/icons/Icon.png'
import Footer from '../../containers/Footer.jsx/Footer'
import SmallCard from '../../containers/SmallCard/SmallCard'
import LoadingSmallCard from '../../containers/SmallCard/LoadingSmallCard'
import AppContext from '../../context/App.context'
import Modal from '../../containers/Modal/Modal'
// Load CSS
import './Landing.css'

const Landing = () => {

  const { state } = useContext(AppContext)
  const [weather, setWeather] = useState({})
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [city, setCity] = useState('Guatemala')
  const [isLoading, setIsLoading] = useState(true)
  const ref = useRef()

  useEffect(() => {
    setIsLoading(true)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async position => {
        await setLatitude(position.coords.latitude)
        await setLongitude(position.coords.longitude)
        getRealTime({ latitude, longitude })
          .then(res => {
            setWeather(res)
            setIsLoading(false)
          })
      })
    } else {
      getRealTime({ city })
        .then(res => {
          setWeather(res)
          setIsLoading(false)
        })
    }
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(ref.current)
    setCity(data.get('city'))
    ref.current.reset()
  }

  return (
    <div className='Landing'>
      { !state.closeInitialModal && <Modal></Modal> }
      <section className="Hero">
        <div className="Hero__div Login">
          <h1 className='Hero__div__h1'>
            <img className='Hero__div__img' src={logo} alt="Logo" />
            KodeWeather
          </h1>
          <p className='Hero__div__p'>Know the weather of your city and others</p>
          <Link to='/login' className='Hero__button btn btn-primary'>Login</Link>
          <button className='Hero__button btn btn-secondary'>Signup</button>
        </div>
        <div className="Hero__div Example">
          {/* <LoadingSmallCard /> */}
          {
            isLoading 
              ? <LoadingSmallCard/> 
              : <SmallCard  
                  className='Example'
                  city={weather.name}
                  temp={weather.temperature}
                  isDay={weather.idDay}
                  condition={weather.conditionText}
                  icon={weather.icon}
                  feelsLike={weather.feelsLike}
                />
          }
          <form 
            className='Landing__form' 
            onSubmit={handleSubmit}
            ref={ref}
          >
            <div className="input-group">
              <input 
                name='city'
                className='input-group__input' 
                type="text"
                required
                placeholder='Search your city'
              />
              <span className='input-group__span'></span>
              <button className='input-group__btn search_city'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="Landing__footer">
        <Footer />
      </section>
    </div>
  )
}

export default Landing