import TouchRipple from '@mui/material/ButtonBase/TouchRipple'
import React, { useEffect } from 'react'
import {useDispatch, useSelector}from 'react-redux'
import { admin, getAdmin } from '../slice/adminSlice'
const Admin = () => {
  const selector=useSelector(admin)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAdmin())
  },[])
 console.log(selector)
  return (
    <div>
     <table>
      <thead>
        <tr>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {selector.map((ad)=>(
          <tr>
            <td>{ad.email}</td>
          </tr>
        ))}
      </tbody>
     </table>
    </div>
  )
}

export default Admin