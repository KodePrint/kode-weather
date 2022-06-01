// Import CSS
import './Landing.css'
// Import assets
import kodeweather from '../../assets/icons/Icon.png'
// Import containers
import SmallCard from '../../containers/SmallCard/SmallCard'

const Landing = () => {
  return (
    <div className="Landing">
    <section className="Landing__header">
      <h1 className="Landing__header__h1">
        <img src={kodeweather} alt="" />
        KodeWeather
      </h1>
      <button className="btn-primary btn-login">Login</button>
      <button className="btn-secondary btn-signup">Signup</button>
    </section>
    <section className="Landing__preview">
      <SmallCard />
    </section>
    </div> 
  )
}

export default Landing