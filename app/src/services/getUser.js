import { vars } from '../config/config.vars'

export const getUser = async () => {
  const url = `${vars.backend}auth/good`

  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': true
    }
  }).then(response => {
    if (response.status === 200) return response.json()
    throw new Error('authentication failed')
  }).then(data => {
    console.log(data)
    return data
  })
}