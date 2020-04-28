const Sequelize = require('sequelize')
const db = require('../database/db.js')
// var DataTypes = require('sequelize/lib/data-types');
var User;
const Article = require('./Article')
User = db.sequelize.define(
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
        type: Sequelize.ENUM(['greatAdmin','admin','member'])
    }
  },
  {
    timestamps: false
  }
)

User.hasMany(Article);

module.exports = User;
