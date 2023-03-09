import React, { useState } from 'react'
import {AppBar, Box, Drawer, List, ListItem, ListItemText} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import { Link,useLocation } from 'react-router-dom'

const Header = () => {
const [open,setOpen]=useState(false)
const location = useLocation()
let title = 'Admin DashBoard'
if(location.pathname==='/list'){
  title = 'Post'
}else if(location.pathname==='/edit'){
   title = 'Admins'
}else if(location.pathname==='/add'){
  title='Add Posts'
}
    return (
    <div>
        <AppBar position="static">                    
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={()=>setOpen(true)}>
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      {title}
    </Typography>
  </Toolbar>
</AppBar>
<Drawer anchor='left' open={open} onClose={()=>setOpen(false)}>
   <Box p={2} width='250px' textAlign='center' role='presentation'>
     <List>
    <Link to={'/list'}>   <ListItem button >
         <ListItemText>Post</ListItemText>
        </ListItem></Link>
    
     <Link to={'/admins'}>   <ListItem button >
            <ListItemText>Admins</ListItemText>
        </ListItem></Link>
     </List>
   </Box>
  </Drawer>
 
    </div>
  )
}

export default Header