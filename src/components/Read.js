import React, { useEffect, useState } from 'react'
import { blog, getBlog, readId, selectPostbyId } from '../slice/postSlice'
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom'
const Read = () => {
  const [post,setPost]=useState([])
  const {_id} = useParams()
  const select = useSelector(blog)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(readId(_id))
  },[])
  console.log(select)
  return (
    <div>
    
      <>
      <h1>{select.title}</h1>
      <p>{select.description}</p>
      </>
    </div>
  )
}

export default Read