const Sequelize = require('sequelize')

const connectionString = process.env.DATABASE_URL || 'postgresql-acute-13107'
const sequelize = new Sequelize(connectionString, {define: { timestamps: false }})

sequelize.sync()
  .then(() => {
    console.log('Sequelize updated database schema')
  })
  .catch(console.error)

module.exports = sequelize 

