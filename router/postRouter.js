const app = require('express')
const { postblog, getblogs, getblogbyId, findDelete, findUpdate } = require('../controllers/postController')
const postRouter = app.Router()

postRouter.post('/posts',postblog)
postRouter.get('/allposts',getblogs)
          .get('/:id',getblogbyId)
          .delete('/:id',findDelete)
postRouter.put('/:id',findUpdate)
module.exports = postRouter