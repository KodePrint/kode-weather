import { useRef } from 'react'
import Forms from '../../containers/Forms/Forms'
import Login from '../../components/Login/Login'
import './LoginPage.css'

const LoginPage = () => {

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Login')
  }

  const form = useRef(null)
  return (
    <div className="LoginPage">
      <div className="LoginPage__container">
        <h3>
          Login with your account in KodeWeather..!
        </h3>
        <Forms innerRef={form} className='LoginForm'>
          <Login submit={handleLogin} />
        </Forms>
      </div>
    </div>
  )
}

export default LoginPage