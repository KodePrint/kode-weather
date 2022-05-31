import { useRef } from 'react'
import Forms from '../../containers/Forms/Forms'
import Login from '../../components/Login/Login'

const LoginPage = () => {
  const form = useRef(null)
  return (
    <div className="Login">
      <div className="Login__container">
        <h3>
          Login with your account in KodeMeet..!
        </h3>
        <Forms innerRef={form} className='LoginForm'>
          <Login submit={handleLongin} />
        </Forms>
      </div>
    </div>
  )
}

export default LoginPage