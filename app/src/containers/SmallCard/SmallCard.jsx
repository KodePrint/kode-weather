import './SmallCard.css'
const SmallCard = ({ id, city, temp, isDay, condition, icon, feelsLike, onclick }) => {

  const date = new Date()
  const today = date.toDateString()

  return (
        <article className="SmallCard">
          <div className="SmallCard__div condition">
            <div className='SmallCard__div--icon'>
              <img className='icon' src={icon} alt="" />
            </div>
            <p className='SmallCard__div__p condition__p'>{condition}</p>
          </div>
          <div className="SmallCard__div">
            <h3 className='SmallCard__div__h3'>{ temp }°</h3>
            <p className='SmallCard__div__p feelslike'>Feelslike {feelsLike}°</p>
          </div>
          <div className="SmallCard__div city">
            <p className='SmallCard__div__p city'>{city}</p>
            <span className='SmallCard__div__span'>{today}</span>
          </div>
        </article>
  )
}

export default SmallCard