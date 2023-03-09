import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../slice/postSlice'
import adminReducer from '../slice/adminSlice'
const blogStore = configureStore({
    reducer:{
        blog:blogReducer,
        admins:adminReducer
    }
})
export default blogStore