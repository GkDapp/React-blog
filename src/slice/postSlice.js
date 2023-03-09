import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'
import axios from 'axios'



export const postBlog = createAsyncThunk('blog/post',async(initial)=>{
    const res = await axios.post('http://localhost:7000/post/posts',initial)
    return res.data
})
export const getBlog = createAsyncThunk('blog/get',async()=>{
    const res = await axios.get('http://localhost:7000/post/allposts')
    return res.data
})
export const deleteBlog = createAsyncThunk('blog/delete',async({id})=>{
    const res = await axios.delete(`http://localhost:7000/post/${id}`)
    return id
})
export const editBlog = createAsyncThunk('blog/edit',async(edata)=>{
 const {_id} = edata
 try{
 const res = await axios.put(`http://localhost:7000/post/${_id}`,edata)
 return res.data
 }catch(e){
  console.log(e)
 }
})
export const readId = createAsyncThunk('blog/read',async(_id)=>{
  try{
    const res = await axios.get(`http://localhost:7000/post/${_id}`)
    return res.data
  }catch(e){
    console.log(e)
  }
})
const initialState = {
    posts:[]
}
const blogSlice = createSlice({
  name:'blog',
  initialState,
  extraReducers(builder){
   builder.addCase(postBlog.fulfilled,(state,action)=>{
    state.posts.push(action.payload)
   })
   builder.addCase(getBlog.fulfilled,(state,action)=>{
      state.posts = action.payload
   })
   builder.addCase(deleteBlog.fulfilled,(state,action)=>{
     state.posts =  state.posts.filter((i)=>i.id!==action.payload.id)
   })
   builder.addCase(editBlog.fulfilled,(state,action)=>{
    const {_id}= action.payload
    const editpost = state.posts.filter((i)=>i._id!==_id)
    state.posts = [...editpost,action.payload]
   })
   builder.addCase(readId.fulfilled,(state,action)=>{
     state.posts = action.payload
   })
  }
})
export const selectPostbyId = (state,postId)=>{
  state.blog.posts.find(post => post.id === postId)
}
export const blog = (state)=>state.blog.posts
export default blogSlice.reducer