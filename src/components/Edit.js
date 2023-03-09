import React, { useState } from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { makeStyles } from '@mui/styles';
import { TextField,Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { blog, editBlog, selectPostbyId } from '../slice/postSlice';
import { useParams } from 'react-router-dom';
const useStyles = makeStyles((theme)=>({
  inputbutton:{
   justifyContent:'center',
    width:'60%',
    margin:'auto',
    paddingTop:'50px'
  },
  editor:{
    paddingTop:'25px',
    fontSize:14,
    width:"80%",
    height:'500px',
    margin:"auto"
  },
}))
const Edit = () => {
  const state = useSelector(blog)
  const {_id} = useParams()
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const classes = useStyles()
  const dispatch = useDispatch()
  const onSubmit = (e)=>{
    e.preventDefault()
    const edit = {_id,title,description}
    try{
      dispatch(editBlog(edit))
      setTitle('')
      setDescription('')
    }catch(e){
      console.log(e)
    }
  }
  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField value={title} onChange={(e)=>setTitle(e.target.value)} />
       <CKEditor
      editor={ClassicEditor}
      data=""
      className={classes.editor} // apply the custom class to the component
      onChange={handleEditorChange}
    />
       <Button variant='contained' color='primary' type='submit'>Submit</Button>
    </form>
    </div>
  )
}

export default Edit