import './Landing.css'
import { useEffect, useState } from 'react'
import Footer from '../../containers/Footer.jsx/Footer'
import SmallCard from '../../containers/SmallCard/SmallCard'
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
        </div>
      </section>
      <section className="Landing__footer">
        <Footer />
      </section>
    </div>
  )
}

export default Landing