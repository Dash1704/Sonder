import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
 

const ViewMotherProfile = () => {
  const [profile, setProfile] = useState([])
  const { _id } = useParams();
  const { t } = useTranslation();

  useEffect(()=>{
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
       <li>{t("name_profile")}: {profile.name}</li>
       <li>{t("email")}: {profile.email}</li>
       <li>{t("city")}: {profile.city}</li>
       <ul>Bio:
         <li><h5>{t("About Yourself")}: {profile.about_yourself}</h5></li>
         <li><h5>{t("Interests")}: {profile.languages}</h5></li>
         <li><h5>{t("Children")}: {profile.how_many_children}</h5></li>
       </ul>
      </ul>
    </div>

    )
  
}

export default ViewMotherProfile