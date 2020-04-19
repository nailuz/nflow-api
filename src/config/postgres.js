import 'dotenv/config'

export default {
  dialect: process.env.SQL_DIALECT,
  host: process.env.SQL_HOST,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DB,
  define: {
    timestamps: true,
    uderscored: true,
    uderscoredAll: true,
  },
}
