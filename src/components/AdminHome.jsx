import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom'


function AdminHome({user}) {
    const navigate = useNavigate();

    useEffect( () => {

        if(!user){
            navigate('/AdminLogin')
        }
    },[])
  return (
    <div>Profile {user.name}</div>
  )
}

export default AdminHome