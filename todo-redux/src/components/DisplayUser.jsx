import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { removeUser } from './store/Slices/UserSlice'

import { MdDeleteForever } from 'react-icons/md'



const DisplayUser = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.users
    })
    // console.log(data)
    const deleteUser=(id)=>{
         dispatch(removeUser(id))
    }

  return (
    data.map((user,id)=>{
        return <li key={id}>
            {user}
            <button className='btn-delete' onClick={()=>deleteUser(id)}>
                Delete
            </button>
        </li>
    })
   
  )
}

export default DisplayUser