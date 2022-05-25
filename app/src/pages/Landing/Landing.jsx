import './Landing.css'
import { useEffect, useState } from 'react'
import Footer from '../../containers/Footer.jsx/Footer'
import Location from '../../components/Location/Location'
import { getRealTime } from '../../services/get-real-time'

const Landing = () => {

  const [weather, setWeather] = useState({})

  useEffect(() => {
    getRealTime({ city: 'Guatemala' })
      .then(res => setWeather(res))
  }, [])

  return (
    <div className='Landing'>
      <section className="Hero">
        <div className="Herro__div Login">
          <h1 className='Hero__div__h1'>
            <img className='Hero__div__img' src="" alt="Logo" />
            KodeWeather
          </h1>
          <p>Know the weather of your city and others</p>
          <button className='Hero__button btn btn-primary'>Login</button>
          <button className='Hero__button btn btn-secondary'>Signup</button>
        </div>
        <div className="Herro__div Example">
          <Location  
            className='Example'
            city={weather.name}
            temp={weather.temperature}
            isDay={weather.idDay}
            condition={weather.conditionText}
            icon={weather.icon}
            feelsLike={weather.feelsLike}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Landing