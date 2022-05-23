import './Location.css'
import { Link } from 'wouter'

const Location = ({ id, temp }) => {

  return (
    <Link to={`/location/${id}`}>
      <div className="Location">
        <h2>Chiquimula</h2>
        <h3>{ temp }</h3>
        <div className="time-info">
          <div className="weather">
            <p><span>Icon</span>Nublado</p>
          </div>
          <div className="temps">
            <p className="max"> Max 31°</p>
            <p className="min">Min 21°</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Location
