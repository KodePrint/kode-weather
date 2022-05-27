import Icon113 from '../components/IconsComponets/Icon113/Icon113'
import Icon122 from '../components/IconsComponets/Icon122/Icon122'

export const myIcon = ({number = 133, isDay = 1 }) => {
  
  if (isDay === 1) {
    switch (number) {
      case 113:
        return (<Icon113 />)
      case 122:
        return (<Icon122 />)
    }
  } else {
    switch (number) {
      case 113:
        return (<Icon113 />)
      case 122:
        return (<Icon122 />)
    }
  }
}