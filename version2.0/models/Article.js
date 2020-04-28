const Sequelize = require('sequelize')
const db = require('../database/db.js')

const User = require('./User')
const Article_pic = require('./Article_pic')
var Article

Article = db.sequelize.define(
  'article',
  {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: "id"
        }
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.TEXT
    },
    time: {
        type: Sequelize.DATE
     },
    admin_r: {
        type: Sequelize.TINYINT
    },
    admin_w: {
        type: Sequelize.TINYINT
    },
    member_r: {
        type: Sequelize.TINYINT
    },
    member_w: {
        type: Sequelize.TINYINT
    },
    viewer_r: {
        type: Sequelize.TINYINT
    }
  },
  {
    timestamps: false
  }
)


Article.hasMany(Article_pic,{ onDelete: 'cascade' });
module.exports = Article;