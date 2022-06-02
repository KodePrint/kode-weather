import skyblue from '../assets/images/backgrounds/blue-sky.jpg'
import skynight from '../assets/images/backgrounds/night-sky.jpg'
import cloudyskynight from '../assets/images/backgrounds/cloudy-night-sky.jpg'
import cloudysky from '../assets/images/backgrounds/cloudy-sky.jpg'

export const getBackround = (condition) => {
  const { isDay } = condition
  const { type } = condition

  if (isDay === 1) {
    switch (type) {
      case 'clear': return skyblue
      case 'cloudy': return cloudysky
      default: return skyblue
    }
  } else {
    switch (type) {
      case 'clear': return skynight
      case 'cloudy': return cloudyskynight
      default: return skynight
    }
  }
}