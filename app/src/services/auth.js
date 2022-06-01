import { vars } from '../config/config.vars'

export const authWith = (option) => {
  const url = `${vars.backend}auth/${option}`
  window.open(url, '_self')
}