const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookie = require('cookie-parser')
const adminRouter = require('./router/adminRouter')
const postRouter = require('./router/postRouter')
require('dotenv').config()
const cors = require('cors')
const corsoptions = {
    orgin:'http://localhost:3000'
}
app.use(cors(corsoptions))
app.use(express.json())
app.use(cookie())
app.use('/post',postRouter)
app.use('/admin',adminRouter)
mongoose.connect(process.env.MONGO_URI).then(()=>console.log('DB Connected')).catch((e)=>console.log(e))

app.listen(process.env.PORT,()=>console.log(`${process.env.PORT} connected`))