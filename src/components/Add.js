import {Button, FormGroup, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import {makeStyles} from '@mui/styles'
import {CKEditor} from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useDispatch} from 'react-redux'
import { postBlog } from '../slice/postSlice';
import { FormControl } from '@mui/material';
import { useNavigate } from "react-router-dom";
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
const Add = () => {
  const classes = useStyles()
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const navigate = useNavigate()
 // const state = useSelector(blog)
  const dispatch = useDispatch()
  const editorRef = useRef()
  const onSubmit = (e)=>{
    e.preventDefault()
    const post = {title,description}
    try {
      dispatch(postBlog(post))
      setTitle('')
      setDescription('')
      editorRef.current.setData('')
    
    } catch (error) {
      console.log(error)
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

export default Add