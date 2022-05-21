import './App.css'
import { Route } from 'wouter'
import Layout from '../containers/Layout/Layout'
import Home from '../pages/Home/Home'

function App () {
  const apiKey = process.env.API_KEY

  // useEffect(() => {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${apiKey}`)
  //         .then(res => res.json())
  //         .then(data => console.log(data))
  //     })
  //   }
  // },[])

  console.log(apiKey)

  // fetch('https://geolocation-db.com/json/')
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  return (
    <>
    <div className='App'>
      <Layout>
        <Route path="/" component={Home} />
      </Layout>
    </div>
    </>
  )
}

export default App
