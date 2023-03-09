const { hashPassword, comparePassword } = require('../auth/Auth')
const adminSchema = require('../models/adminModel')
const {jwtSign} = require('../auth/jwt')
const jwt = require('jsonwebtoken')
const regAdmin = async(req,res)=>{
    const {email,password} = req.body
    const hpassword =await hashPassword(password)
    try {
        const adminreg = new adminSchema({
          email,password:hpassword
        })
        await adminreg.save()
        res.json(adminreg)
    } catch (error) {
        console.log(error)
    }
}
const login = async(req,res)=>{
    const {email,password}=req.body
    try {
        const log = await adminSchema.findOne({email})
        if(!log){
            res.json('email is invalid')
        }else{
            const pass = await comparePassword(password,log.password)
            if(!pass){
                res.json('password Wrong')
            }else{
               const token = await jwtSign(log.email)
               res.cookie('jwt',token,{httpOnly:true})
               res.json({token})
            }
        }
    } catch (error) {
        console.log(error)
    }
}
const logout = async(req,res)=>{
   res.cookie('jwt',null,{expires:new Date(Date.now()),httpOnly:true}).status(200).json('logout')
}
const getAdmin=async(req,res)=>{
    try {
        const re= await adminSchema.find()
        res.status(200).json(re)
    } catch (error) {
        console.log(error)
    }
}
module.exports.regAdmin = regAdmin
module.exports.login = login
module.exports.logout = logout
module.exports.getAdmin = getAdmin