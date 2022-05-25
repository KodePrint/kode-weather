import './App.css'
// import { useEffect } from 'react'
import { Route, Switch } from 'wouter'
// import { env } from '../utils/vars.config'
import Layout from '../containers/Layout/Layout'
import Home from '../pages/Home/Home'
import Display from '../pages/Display/Display'
import NotFound from '../pages/NotFound/NotFound'
import Landing from '../pages/Landing/Landing'

const App = () => {

  const isLogin = false

  return (
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
  )
}

export default App
