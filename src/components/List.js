import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { blog,deleteBlog,editBlog,getBlog } from '../slice/postSlice'
const Lists = () => {
  const state = useSelector(blog)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    dispatch(getBlog())
  },[])
  console.log(state)
  const handleEdit = (id)=>{
    navigate(`/edit/${id}`)
  }
  const handleRead=(id)=>{
    navigate(`/post/${id}`)
  }
  return (
    <div>
   <Link to={'/add'}><Button>Add</Button></Link>
  {state.map(bl=>(
    <div key={bl._id}>
      <Card>
        <CardHeader title={bl.title} />
        <CardContent>
          <Typography>
            {bl.description}
          </Typography>
        </CardContent>
        <Button onClick={()=>dispatch(deleteBlog({id:bl._id}))}>Delete</Button>
        <Button onClick={()=>handleEdit(bl._id)}>Edit</Button>
       <Link to={`/read/${bl._id}`}> <Button>Preview</Button></Link>
      </Card>
    </div>
  ))}
    </div>
  )
}

export default Lists