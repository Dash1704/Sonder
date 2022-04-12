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
      <ul>
       <li>Name: {profile.name}</li>
       <li>Email: {profile.email}</li>
       <li>City: {profile.city}</li>
       <ul>Bio:
         <li><h5>About Yourself: {profile.about_yourself}</h5></li>
         <li><h5>Languages: {profile.languages}</h5></li>
         <li><h5>Children: {profile.how_many_children}</h5></li>
       </ul>
      </ul>
    </div>

    )
  
}

export default ViewMotherProfile