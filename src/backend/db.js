const Sequelize = require('sequelize')
const sequelize = new Sequelize('collagr', 'postgres', 'postgres', {dialect: 'postgres'})
const Task = require('data.task')

const Photo = sequelize.define('Photo', {
  src: Sequelize.STRING,
  x: Sequelize.INTEGER,
  y: Sequelize.INTEGER
});

// sync :: Task Error Conn
const sync = new Task((rej, res) => sequelize.sync().then(res).catch(rej))

module.exports = {sync}
