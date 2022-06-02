import { useRef, useEffect, useState } from 'react'
import 'animate.css'
// Import Components
import Loading from '../../components/Loading/Loading'
// Import CSS
import './SmallCard.css'
// Import assets
// Import Utils
import { getBackround } from '../../utils/getBackground'
import { getPreviewTime } from '../../services/getPreviewTime'

// Provitianal conditions
const SmallCard = () => {

  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const condition = {
    isDay: true,
    type: 'cloudy'
  }

  // Ref Bg Eelement
  const bg = useRef(null)

  // UseEffect get time Weather
  useEffect(() => {
    setIsLoading(true)
    const time = getPreviewTime('Chiquimula')
    time.then(res => {
      setWeather(res)
      setIsLoading(false)
    })
  }, [])

  // UseEfect Change Bg to Card
  useEffect(() => {
    if (!isLoading) {
      const background = getBackround({isDay: weather.isDay, type: weather.conditionText})
      const div = bg.current
      div.setAttribute('style', `background-image: url(${background})`)
    }
  }, [condition])

  return (
    <article className="SmallCard">

      {
        isLoading 
          ? <Loading /> 
          : (
            <>
              <div className="SmallCard__div top">
                <picture className='animate__animated animate__fadeIn'>
                  <img src="" alt="Icon" />
                  <span>{weather.conditionText}</span>
                </picture>
                
                <div className="top__right">
                  <h3 className="temp animate__animated animate__fadeIn">{weather.temp}°</h3>
                  <p className="feelslike animate__animated animate__fadeIn">feelslike: {weather.feelsLike}°</p>
                
                </div>
              </div>
              
              <div className="SmallCard__div bottom">
                <div className="bottom__left">
                  <p className='animate__animated animate__fadeIn'>{weather.name}</p>
                  <span className='animate__animated animate__fadeIn'>{weather.localtime}</span>
                </div>
                <div className="bottom__right">
                  <span className='bottom__right__dir'>
                    <i className="fad fa-wind animate__animated animate__fadeIn"></i>
                    <span className='animate__animated animate__fadeIn'>{weather.windSpeed}Kmh - {weather.windDir}</span>
                  </span>
                </div>
              </div>
              <div ref={bg} className="SmallCard__background animate__animated animate__fadeIn"></div>
            </>)
      }
      
    </article>
  )
}

export default SmallCard