const express = require('express')
const route = express.Router()
// const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Article = require('../models/Article')
const Article_pic = require('../models/Article_pic')
// route.use(cors())

process.env.SECRET_KEY = 'secret'


// notice an article
// //////////////////////////////////////////////////////////////////////
route.post('/noticeArticle', (req, res) => {
//   const today = new Date()
  const articleData = {
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
    time: req.body.time,
    admin_r:req.body.admin_r,
    admin_w:req.body.admin_w,
    member_r:req.body.member_r,
    member_w:req.body.member_w,
    viewer_r:req.body.viewer_r
  }

//   const articlePicData = {
//     pic:req.body.article_pic,

//   }

//   var thePic;
//   Article_pic.findOne({
//       where: {
//         article_pic: req.body.article_pic
//       }
//   })
//     .then(pic => {
        
//         if (!pic) {
//             Article_pic.create(article_pic)
//             .then(article => {
//               res.json({ status: article.title + ' titled article is noticed!',
//                          body: article.body,
//                          name: article.userId + " is the creator",
//                          time: article.time
//                     })
//             })
//             .catch(err => {
//               res.send('error: ' + err)
//             })

//         }
//     })



  Article.findOne({
    where: {
        title: req.body.title,
    }
  })
    //TODO bcrypt
    .then(article => {
      if (!article) {
        
          Article.create(articleData)
            .then(article => {
              res.json({ status: article.title + ' titled article is noticed!',
                         body: article.body,
                         name: article.userId + " is the creator",
                         time: article.time
                    })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        // })
      } else {
        res.json({ error: 'Article already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})





// Delete an article
// //////////////////////////////////////////////////////////////////////

// try 1

route.delete('/deleteArticle', (req, res) => {
var deleteArticleId = req.body.articleId

// console.log("the article id is "+deleteArticleId)
// Delete the pics first
    // Article_pic.findOne({
    //     where: {
    //         articleId: deleteArticleId
    //     }
    // })
    // .then((pic) => {
    //     if (pic) {
    //         Article_pic.destroy({
    //             where: { articleId: deleteArticleId},
    //         })
    //         .then(() => {





                Article.findOne({
                    where: {
                        id: deleteArticleId
                    }
                })
                .then((article) => {
                    if (article) {
                        Article.destroy({
                            where: { id: deleteArticleId },
                        })
                        .then(() => {
                            res.send({ msg: 'The article is successfully deleted!' });
                        })
                        .catch((err) => {
                            res.status(400).json({ error: 'Article deletion failed.  ' + err });
                        });
                    } else {
                        res.status(400).json({ error: ' Article does not exists!' });
                    }
                });

        //         // res.send({ msg: 'The pics are successfully deleted!' });
        //     })
        //     .catch((err) => {
        //         res.status(400).json({ error: 'pic deletion failed.  ' + err });
        //     });
        // } else {
        //     res.status(400).json({ error: 'No pics exists!' });
        // }
});


    //   then delete article
    // Article.findOne({
    //     where: {
    //         id: deleteArticleId
    //     }
    // })
    // .then((article) => {
    //     if (article) {
    //         Article.destroy({
    //             where: { id: deleteArticleId },
    //         })
    //         .then(() => {
    //             res.send({ msg: 'The article is successfully deleted!' });
    //         })
    //         .catch((err) => {
    //             res.status(400).json({ error: 'Article deletion failed.  ' + err });
    //         });
    //     } else {
    //         res.status(400).json({ error: ' Article does not exists!' });
    //     }
    // });

// })







// seeing the data
route.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  Article.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('Article does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = route
