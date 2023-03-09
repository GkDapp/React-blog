const postSchema = require("../models/postModel")


const postblog =async(req,res,next)=>{
    
    try{
        const post = new postSchema({
            title:req.body.title,
            description:req.body.description
        })
        await post.save()
        res.json(post)
        console.log(post)
        }catch(e){
            console.log(e)
        }
}
const getblogs = async(req,res,next)=>{
    try{
        const getblog = await postSchema.find()
        res.json(getblog)
    }catch(e){
        console.log(e)
    }
}
const getblogbyId = async(req,res)=>{
    const id = req.params.id
    try{
        const byId = await postSchema.findById(id)
        res.json(byId)
    }catch(e){
        console.log(e)
    }
}
const findDelete = async(req,res)=>{
    const id = req.params.id
    try {
        const del = await postSchema.findByIdAndDelete(id)
        res.json(del)
    } catch (error) {
        console.log(error)
    }
}
const findUpdate = async(req,res)=>{
    const id = req.params.id
    try {
        const update = await postSchema.findByIdAndUpdate(id,{$set:req.body},{new:true})
        res.json(update)
    } catch (error) {
        console.log(error)
    }
}
module.exports.postblog = postblog
module.exports.getblogs = getblogs
module.exports.getblogbyId = getblogbyId
module.exports.findDelete = findDelete
module.exports.findUpdate = findUpdate