require('dotenv/config')

module.exports = {
  dialect: process.env.SQL_DIALECT,
  host: process.env.SQL_HOST,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.ebv.SQL_DB,
  define: {
    timestamps: true,
    uderscored: true,
    uderscoredAll: true,
  },
}
