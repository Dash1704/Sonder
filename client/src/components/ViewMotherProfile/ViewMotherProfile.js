import React, {useEffect, useState} from 'react';


const ViewMotherProfile = ({userId}) => {
  const [profile, setProfile] = useState([])

  useEffect(()=>{
    fetch(`/users/mother/${userId}`,{
      headers: {'content-Type':'application/json'},
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