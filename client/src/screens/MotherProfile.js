import React, {useState, useEffect} from 'react';
import ListRequest from '../components/ListRequest/ListRequest.js'
import M from 'materialize-css';
import { useTranslation } from "react-i18next";
import motherProfileImage from "../images/mother-profile-icons.png";
import {useNavigate} from 'react-router-dom';

const MotherProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
      <div className='row profile'>
        <div className='col s7'>
          <h1 className="m-profile-title">{t("Welcome")}, {profile.name}</h1>
          <p className="m-profile-request-statement">{t("request_and_email_sentence_profile")}</p>
          <ul className="profile-details-box">
            <li className='profile-input'><span className='profile-headers'>{t("name_profile")}: </span>{profile.name}</li>
            <li className='profile-input'><span className='profile-headers'>{t("email")}: </span>{profile.email}</li>
            <li className='profile-input'><span className='profile-headers'>{t("city")}: </span>{profile.city}</li>
            <ul>
              <li className='profile-input'><span className='profile-headers'>{t("About Yourself")}: </span>{profile.about_yourself}</li>
              <li className='profile-input'><span className='profile-headers'>{t("Interests")}: </span>{profile.languages}</li>
              <li className='profile-input'><span className='profile-headers'>{t("Children")}: </span>{profile.how_many_children}</li>
            </ul>
          </ul>
          <h5 className="m-profile-update">{t("Update Your Profile")}:</h5>
          <div>
            <form onSubmit={onSubmit}>
              <div className='m-profile-edit-form'>
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
              </div>
              <div>
                <button className="waves-effect waves-light btn-small call-to-action-button" type='submit'>{t("update_bio")}</button>
              </div>
            </form>
          </div>
        </div>
        <div className='col s5'>
          <div className="m-profile-requests-column">
            <div className="m-profile-requests-section">
              <span className='m-your-requests'>{t("Your Requests")}:<button className="waves-effect waves-light btn-small call-to-action-button m-profile-manage-requests-button"  onClick={()=> {
            navigate('/dashboard')}}>{t("Manage your requests")}</button></span>
            </div>
            <div className="m-profile-requests-list">
              {myRequests.map( oneRequest => {
                    return < ListRequest 
                    oneRequest={oneRequest}
                    setMyRequests={setMyRequests}
                    myRequests={myRequests}
                    key={oneRequest._id}
                    />
              })}
            </div>
            <img className="m-profile-icons" src={motherProfileImage} alt="Motherhood icons"/>
          </div>
        </div>
    </div>
  </div>
   </>
    )
  }

  export default MotherProfile

  
 