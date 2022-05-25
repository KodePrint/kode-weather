import './Location.css'
import { Link } from 'wouter'

const Location = ({ id, city, temp, isDay, condition, icon, feelsLike }) => {
  
  const date = new Date()
  const today = date.toDateString()
  
  return (
    <Link to={`/location/${id}`}>
      <div className="Location">
        <div className="Location__div condition">
          {/* <img className='Location__div__img' src={icon} alt="" /> */}
          <i className="wi wi-night-sleet"></i>
          <p className='Location__div__p condition__p'>{condition}</p>
        </div>
        <div className="Location__div">
          <h3 className='Location__div__h3'>{ temp }°</h3>
          <p className='Location__div__p feelslike'>Feelslike {feelsLike}°</p>
        </div>
        <div className="Location__div city">
          <p className='Location__div__p city'>{city}</p>
          <span className='Location__div__span'>{today}</span>
        </div>
      </div>
    </Link>
  )
}

export default Location
