import './App.css'
// import { useEffect } from 'react'
import { Route, Switch } from 'wouter'
// import { env } from '../utils/vars.config'
import Layout from '../containers/Layout/Layout'
import Home from '../pages/Home/Home'
import Display from '../pages/Display/Display'
import NotFound from '../pages/NotFound/NotFound'
import Landing from '../pages/Landing/Landing'

function App () {

  const isLogin = true

  // useEffect(() => {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=${env.apiKey}`)
  //         .then(res => res.json())
  //         .then(data => console.log(data))
  //     })
  //   }
  // }, [])

  // fetch('https://geolocation-db.com/json/')
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  return (
    <>
    <div className='App'>
      <Layout>
        <Switch>
          {
            isLogin
              ? <Route path="/" component={Home} />
              : <Route path="/" component={Landing} />
          }
          <Route path="/location/:id" component={Display} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </div>
    </>
  )
}

export default App
