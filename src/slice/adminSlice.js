import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getAdmin = createAsyncThunk('get/admin',async()=>{
    const res=await axios.get('http://localhost:7000/admin/admins')
    return res.data
})

const initialState ={
    admins:[]
}
const adminSlice=createSlice({
    name:'admins',
    initialState,
    extraReducers(builder){
        builder.addCase(getAdmin.fulfilled,(state,action)=>{
            state.admins=action.payload
        })
    } 
})
export const admin=(state)=>state.admins.admins
export default adminSlice.reducer