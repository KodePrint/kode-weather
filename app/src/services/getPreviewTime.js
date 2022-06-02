import { vars } from '../config/config.vars'
import axios from 'axios'

// If with latitude and loingitude the name is the reion

export const getPreviewTime = ({ city = null, latitude = null, longitude = null } = {}) => {

  const options = {
    method: 'GET',
    // Search URL
    // url: 'https://weatherapi-com.p.rapidapi.com/search.json',
    // Location URL
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: '14.795836, -89.545294'},
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': vars.weatherKey
    }
  }

  const data = axios(options)
  return data
    .then(({ data }) => {
      const { location, current } = data
      const { country, localtime, region, name } = location
      const { condition, feelslike_c, is_day, temp_c, wind_dir, wind_kph} = current
      const { code, text } = condition

      return {
        conditionCode: code,
        conditionText: text,
        country,
        localtime,
        name: region,
        isDay: is_day,
        feelsLike: feelslike_c,
        temp: temp_c,
        windDir: wind_dir,
        windSpeed: wind_kph
      }
    })
    .catch(err => err)
}