import './Home.css'
import LocationList from '../../containers/LocationList/LocationList'

const Home = () => {

  return (
    <div className="Home">
      <h2>My Locations</h2>
      <LocationList />
    </div>
  )
}

export default Home
