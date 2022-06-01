import { Link, Route, Switch } from 'wouter'
// Import conainers
import Wrapper from '../containers/Wrapper/Wrapper'
// Import pages
import Home from '../pages/Home/Home'
import Landing from '../pages/Landing/Landing'

const App = () => {
  return (
    <div className="App">
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>
      </Wrapper>
    </div>    
  )
}

export default App
