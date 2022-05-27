import PartyCloud from '../../components/IconsComponets/partyCloud/PartyCloud'
import 'animate.css'

import './SmallCard.css'
const SmallCard = ({ id, city, temp, isDay, condition, icon, feelsLike, onclick }) => {

  const date = new Date()
  const today = date.toDateString()

  return (
        <article className="SmallCard">
          <div className="SmallCard__div condition">
            <div className='SmallCard__div--icon animate__animated animate__fadeIn'>
              {icon}
            </div>
            <p className='SmallCard__div__p condition__p animate__animated animate__fadeIn'>{condition}</p>
          </div>
          <div className="SmallCard__div">
            <h3 className='SmallCard__div__h3 animate__animated animate__fadeIn'>{ temp }°</h3>
            <p className='SmallCard__div__p feelslike animate__animated animate__fadeIn'>Feelslike {feelsLike}°</p>
          </div>
          <div className="SmallCard__div city">
            <p className='SmallCard__div__p city animate__animated animate__fadeIn'>{city}</p>
            <span className='SmallCard__div__span animate__animated animate__fadeIn'>{today}</span>
          </div>
        </article>
  )
}

export default SmallCard