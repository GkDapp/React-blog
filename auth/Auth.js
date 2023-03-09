const bcrypt = require('bcrypt')

const hashPassword = async(password)=>{
try{
    const passwords = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password,passwords)
   return hash
}catch(e){
    console.log(e)
}
}
const comparePassword = async(hashpass,reqpass)=>{
    try {
        const comparing = await bcrypt.compare(hashpass,reqpass)
        return comparing
    } catch (error) {
        console.log(error)
    }
}
module.exports.hashPassword = hashPassword
module.exports.comparePassword = comparePassword