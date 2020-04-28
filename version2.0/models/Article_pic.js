const Sequelize = require('sequelize')
const db = require('../database/db.js')

const Article = require('./Article')
var Article_pic

Article_pic = db.sequelize.define(
  'article_pic',
  {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    articleId: {
        type: Sequelize.INTEGER,
        references: {
            model: Article,
            key: "id"  
        }
    },
    article_pic: {
        type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
)


// Article.belongsTo(Article_pic)
module.exports = Article_pic;