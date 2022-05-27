import sun from '../../../assets/icons/Sun.svg'
// import sun1 from '../../../assets/icons/Sun1.svg'
import cloud from '../../../assets/icons/Cloud.svg'
import cloud1 from '../../../assets/icons/Cloud1.svg'
import './partyCloud.css'
import { useEffect, useState } from 'react'

const PartyCloud = () => {

  const [chagenSun, setChangeSun] = useState(false)
  
  return (
    <div className="PartyCloud">
      <img src={cloud} alt='icon' className="cloud" />
      <img src={sun} alt='icon' className="sun" />
      <img src={cloud1} alt='icon' className="cloud1" />
    </div>
  )
}

export default PartyCloud