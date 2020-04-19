import User from '../components/users/models/User'
import dbConfig from '../config/postgres'
import Sequelize from 'sequelize'

const connection = new Sequelize(dbConfig)

User.init(connection)

export default connection
