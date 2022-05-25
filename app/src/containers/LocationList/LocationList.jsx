import './LocationList.css'
import Location from '../../components/Location/Location'
const LocationList = () => {

  const locations = []

  for (let i = 0; i <= 5; i++) {
    locations.push({ key: i, temp: '30' })
  }

  return (
    <div className='LocationList'>
      {
        locations.map(
          ({ key, temp }) => (
            <Location key={key} id={key} temp={temp} />
          )
        )
      }
    </div>
  )
}

export default LocationList
