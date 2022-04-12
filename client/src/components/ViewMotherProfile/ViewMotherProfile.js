import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
 

const ViewMotherProfile = () => {
  const [profile, setProfile] = useState([])
  const { _id } = useParams()

  useEffect(()=>{
    console.log(_id)
    fetch(`/users/mother/profile/${_id}`,{
      headers: {'Content-Type':'application/json'},
    })
    .then(res => res.json())
    .then(result => {
      setProfile(result.mother)
    })
    .catch(err => console.log(err))

    
    }, [])
  
  return (

    <div>
       <h2>{profile.name}</h2>
    </div>

    )
  
}

export default ViewMotherProfile