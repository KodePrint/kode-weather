import { vars } from '../configurations/vars.config'

export const db = {
  development: {
    url: vars.postgresDbUriTest,
    dialect: 'postgres'
  },
  production: {
    url: vars.postgresDbUri,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
}
