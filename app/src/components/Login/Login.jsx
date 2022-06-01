import { Link } from 'wouter'
import Google from '../../assets/images/google-icon.svg'
import Github from '../../assets/images/github-icon.svg'
import { authWith } from '../../services/auth'

const Login = ({innerRef, submit}) => {
  
  const handleAuth = (e) => {
    const option = e.target.attributes['data-login'].value
    authWith(option)
  }
  return (
    <>
      <button
        data-login='google'
        className='btn-login-with btn-login-google'
        onClick={handleAuth}
        type='button' 
      >
        <figure>
          <img src={Google} />
        </figure>
        Continue with Google
      </button>
      <button
        data-login='github'
        onClick={handleAuth}
        type='button' 
        className='btn-login-with btn-login-github'
      >
        <figure>
          <img src={Github} />
        </figure>
        Continue with Github
      </button>
      <div className="input-group__container">
        <input 
          className='email' 
          type="email" 
          name='email'
          placeholder='Enter your email'
          autoComplete='off'
          required 
        />
        <span><i className="fas fa-user"></i></span>
      </div>
      <div className="input-group__container">
        <input
          className='password'
          type="password" 
          name='password' 
          placeholder='Enter your password'
          autoComplete='off'
          required 
        />
        <span><i className="fas fa-lock-alt"></i></span>
      </div>
      <button
        onClick={submit}
        className='btn btn-primary login-btn'>
          Login
      </button>
      <Link to='/password-recovery'>have you forgotten your password?</Link>
      <p>
        You do not have an account? 
        <Link to='/sign-up'>Signup</Link>
      </p>
    </>
  )
}

export default Login