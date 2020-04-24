const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.STRING
    },
    roll: {
        type: Sequelize.ENUM('greatAdmin','admin','member')
    }
  },
  {
    timestamps: false
  }
)
