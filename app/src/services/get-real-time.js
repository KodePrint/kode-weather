import { env } from '../utils/vars.config'

export const getRealTime = ({ city = 'Guatemala', latitude = 0, longitude = 0 } = {}) => {
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': env.weatherKey
    }
  }
  
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`
  
  return fetch(url, options)
    .then(response => response.json())
    .then((res) => {
      const { location, current } = res
      const { country, localtime, name} = location
      const { condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir } = current
      const { code, text, icon } = condition

      const newIcon = icon.replace(/64/g, '128')

      return {
        conditionCode: code,
        conditionText: text,
        icon: newIcon,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir
      }
    })
}