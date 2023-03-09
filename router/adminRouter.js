const app = require('express')
const { regAdmin, login, logout, getAdmin } = require('../controllers/adminController')
const adminRouter = app.Router()

adminRouter.post('/register',regAdmin)
adminRouter.post('/login',login)
adminRouter.get('/logout',logout)
adminRouter.get('/admins',getAdmin)
module.exports = adminRouter