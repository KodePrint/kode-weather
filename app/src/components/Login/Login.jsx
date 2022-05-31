import { Link } from 'wouter'

const Login = ({innerRef, submit}) => {
  
  const handleAuth = (e) => {
    console.log(e)
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
      <div className="input-group email">
        <input 
          className='email' 
          type="email" 
          name='email'
          placeholder='Enter your email'
          autoComplete='off'
          required 
        />
        <i className="fas fa-user"></i>
      </div>
      <div className="input-group password">
        <input
          className='password'
          type="password" 
          name='password' 
          placeholder='Enter your password'
          autoComplete='off'
          required 
        />
        <i className="fas fa-lock-alt"></i>
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