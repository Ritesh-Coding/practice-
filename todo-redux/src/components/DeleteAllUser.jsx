import React from 'react'
// import { clearAllUsers } from './store/Slices/UserSlice'
import { clearAllUsers
  
 } from './store/actions'
import { useDispatch } from 'react-redux'

const DeleteAllUser = () => {
  const dispatch = useDispatch()
  const deleteUsers = ()=>{
      dispatch(clearAllUsers())
  }
  return (
    <button onClick={deleteUsers}>DeleteAllUser</button>
  )
} 

export default DeleteAllUser