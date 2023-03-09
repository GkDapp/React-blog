const jwt = require('jsonwebtoken')

const jwtSign = async(email)=>{
try{
    const sign = await jwt.sign({id:email._id},'hello')
    return sign
}catch(e){
    console.log(e)
}
}
module.exports.jwtSign = jwtSign