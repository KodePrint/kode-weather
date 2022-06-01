import './App.css'
import { useContext, useEffect, useState } from 'react'
import { Route, Switch } from 'wouter'
// import { env } from '../utils/vars.config'
import Layout from '../containers/Layout/Layout'
import Home from '../pages/Home/Home'
import Display from '../pages/Display/Display'
import NotFound from '../pages/NotFound/NotFound'
import Landing from '../pages/Landing/Landing'
import LoginPage from '../pages/LoginPage/LoginPage'

import { useUser } from '../hooks/useUser'

// Import Context
import useInitialState from '../hooks/useInitialState'
import AppContext from '../context/App.context'

const App = () => {
  const initialState = useInitialState()

  const { isLogged, login } = useUser()

  return (
    <AppContext.Provider value={initialState}>
      <div className='App'>
        <Layout>
          <Switch>
            {
              isLogged
                ? <Route path="/" component={Home} />
                : <Route path="/" component={Landing} />
            }
            <Route path="/login" component={LoginPage} />
            <Route path="/location/:id" component={Display} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </div>
    </AppContext.Provider>
  )
}

export default App
