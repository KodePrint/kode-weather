import './Landing.css'
import { useEffect, useState, useRef } from 'react'
import Footer from '../../containers/Footer.jsx/Footer'
import SmallCard from '../../containers/SmallCard/SmallCard'
import { getRealTime } from '../../services/get-real-time'

const Landing = () => {

  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('Guatemala')
  const ref = useRef()

  useEffect(() => {
    getRealTime({ city })
      .then(res => setWeather(res))
  }, [city])

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(ref.current)
    setCity(data.get('city'))
    ref.current.reset()
  }

  return (
    <div className='Landing'>
      <section className="Hero">
        <div className="Hero__div Login">
          <h1 className='Hero__div__h1'>
            <img className='Hero__div__img' src="" alt="Logo" />
            KodeWeather
          </h1>
          <p className='Hero__div__p'>Know the weather of your city and others</p>
          <button className='Hero__button btn btn-primary'>Login</button>
          <button className='Hero__button btn btn-secondary'>Signup</button>
        </div>
        <div className="Hero__div Example">
          <SmallCard  
            className='Example'
            city={weather.name}
            temp={weather.temperature}
            isDay={weather.idDay}
            condition={weather.conditionText}
            icon={weather.icon}
            feelsLike={weather.feelsLike}
          />

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