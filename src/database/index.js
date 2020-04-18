import Sequelize from 'sequelize'
import dbConfig from '../config/databaseSql'

export default new Sequelize(dbConfig)
