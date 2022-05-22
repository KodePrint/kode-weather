import { Sequelize } from 'sequelize'
import { vars } from '../../configurations/vars.config'
import { setUpModels } from '../../database/models/index'

const options = {
  dialect: 'postgres',
  loggin: vars.isProd
}

if (vars.isProd) {
  options.ssl = false
  options.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}

const sequelize = new Sequelize(
  vars.isProd ? vars.postgresDbUri : vars.postgresDbUriTest, options
)
setUpModels(sequelize)
export { sequelize }
