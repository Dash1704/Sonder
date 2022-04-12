import React, {useState, useEffect} from 'react';
import ListRequest from '../components/ListRequest/ListRequest.js'
import M from 'materialize-css';
import { useTranslation } from "react-i18next";

const MotherProfile = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState([])
  const [myRequests, setMyRequests] = useState([])
  const [toSend, setToSend] = useState({
    about_yourself: "",
    languages: "",
    how_many_children: "",
    
  });
  const mother = localStorage.getItem("mother")
  const jsonUser = JSON.parse(mother)
  const userEmail = jsonUser.email
  const userId = JSON.parse(localStorage.getItem('mother'))._id

  useEffect(()=>{
    seeMyRequests(userId),
    getUserProfile(userEmail)
  }, [])
    

  const getUserProfile = (userEmail) => {
    fetch(`/users/mother/${userEmail}`,{
      headers:{
        'Content-Type':'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        setProfile(result.mother)
        })
      }

    const seeMyRequests = (userId) => {
      console.log(userId)
      fetch(`/requests/${userId}`,{
        headers:{
          'Content-Type':'application/json'
          }  
      })
      .then(response => response.json())
      .then(result => {
        console.log(result.requests)
          setMyRequests(result.requests)
          })
    }
    
    const handleChange = (e) => {
         setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    
    const onSubmit = async (e) => {
      e.preventDefault();
      if( toSend.about_yourself === "" || toSend.languages === "" || toSend.how_many_children === ""){
        return M.toast({html: 'Please fill in all fields', classes: '#536dfe indigo accent-2'})
      } else {
      fetch(`/users/mother/${userEmail}`,{
        method: "post",
        headers:{
        'Content-Type':'application/json'
      },
        body: JSON.stringify({
          toSend
        })
      })
      .then(response => response.json())
      .then((bigResponse) => {
        setProfile(bigResponse.resMother[0])
        console.log('Success, bio added');
      })
      .catch((err) => {
        console.log('Failed to add to bio...', err);
      });
      setToSend({
        about_yourself: "",
        languages: "",
        how_many_children: "",
      })
    }
  };
    

  return (
    <>
   <div className="container"> 
   <div className='profile'>
    <h4>
     <ul>
       <li>{t("name_profile")}: {profile.name}</li>
       <li>{t("email")}: {profile.email}</li>
       <li>{t("city")}: {profile.city}</li>
       <ul>{t("bio")}:
         <li><h5>{t("About Yourself")}: {profile.about_yourself}</h5></li>
         <li><h5>{t("Interests")}: {profile.languages}</h5></li>
         <li><h5>{t("Children")}: {profile.how_many_children}</h5></li>
       </ul>
      </ul>
    </h4>
   </div>
      <div className='update_bio_form'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='about_yourself'
            placeholder={t("about_yourself_placeholder")}
            value={toSend.about_yourself}
            onChange={handleChange}
          />
          <input
            type='text'
            name='languages'
            placeholder={t("interests_placeholder")}
            value={toSend.languages}
            onChange={handleChange}
          />
          <input
            type='text'
            name='how_many_children'
            placeholder={t("children_bio_placeholder")}
            value={toSend.how_many_children}
            onChange={handleChange}
          />
          <button type='submit'>{t("update_bio")}</button>
        </form>
      </div>

      <div className='my_requests'>
        <h5>{t("request_and_email_sentence_profile")}</h5>
        {myRequests.map( oneRequest => {
              return < ListRequest 
              oneRequest={oneRequest}
              setMyRequests={setMyRequests}
              myRequests={myRequests}
              key={oneRequest._id}
              />
          })}
      </div>
   </div>
   </>
    )
  }

  export default MotherProfile

  
 