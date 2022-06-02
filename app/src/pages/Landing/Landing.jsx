import { useContext } from 'react'
// Import Components
import PrimaryBtn from '../../components/GlobalComponents/PrimaryBtn'
import SecondaryBtn from '../../components/GlobalComponents/SecondaryBtn'
// Import Context
import { SeachCityProvider } from '../../context/PreviewSearchContext'
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
      <div className="Landing__header__btns">
        <PrimaryBtn customClass={'btn-login'}>
          <span>
            <i className="fas fa-sign-in"></i>
            Login
          </span>
        </PrimaryBtn>
        <SecondaryBtn customClass={'btn-signup'}>
          <span>
            <i className="fas fa-check-circle"></i>
            Signup
          </span>
        </SecondaryBtn>
      </div>
    </section>
    <section className="Landing__preview">
      <SeachCityProvider>
        <SmallCard />
      </SeachCityProvider>
    </section>
    </div> 
  )
}

export default Landing