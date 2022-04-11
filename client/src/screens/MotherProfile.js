import React, {useState, useEffect} from 'react';
import ListRequest from '../components/ListRequest/ListRequest.js'
//import ViewMotherProfile from '../components/ViewMotherProfile/ViewMotherProfile.js';
//import RequestResponse from '../components/RequestResponse/RequestResponse.js';

const MotherProfile = () => {
  const [profile, setProfile] = useState([])
  const [allRequests, setAllRequests] = useState([])
  const [toSend, setToSend] = useState({
    about_yourself: "",
    languages: "",
    how_many_children: "",
    
  });
  const mother = localStorage.getItem("mother")
  const jsonUser = JSON.parse(mother)
  const userEmail = jsonUser.email

  useEffect(()=>{
    seeAllRequests(),
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

    const seeAllRequests = () => {
      fetch("/requests/list",{
        headers:{
          'Content-Type':'application/json'
          }
          
      })
      .then(response => response.json())
      .then(result => {
          setAllRequests(result.requests)
          })
    }
    
    const handleChange = (e) => {
       if(e.target.value === ""){
          setToSend({ ...toSend, [e.target.name]: e.target.initalValue})
       }else{
         setToSend({ ...toSend, [e.target.name]: e.target.value });
       }   
       
      
    };
    
    const onSubmit = async (e) => {
      console.log(toSend)
      e.preventDefault();
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
          console.log(bigResponse)
          console.log('Success, bio added');
        })
        .catch((err) => {
          console.log('Failed to add to bio...', err);
        });
       
    };
    

  return (
    <>
   <div className="container"> 
   <div className='profile'>
     <p>{profile.name}</p>
   </div>
    <h3>Hello {profile.name}, see your requests below and if anyone has responded</h3>
   <h4>
     <ul>
       <li>Name: {profile.name}</li>
       <li>Email: {profile.email}</li>
       <li>City: {profile.city}</li>
       <ul>Bio:
         <li>{profile.about_yourself}</li>
         <li>{profile.languages}</li>
         <li>{profile.how_many_children}</li>
       </ul>

       </ul>
       <div className='contact_form'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='about_yourself'
            initalValue={profile.about_yourself}
            placeholder='tell us about yourself'
            value={toSend.about_yourself}
            onChange={handleChange}
          />
          <input
            type='text'
            name='languages'
            initalValue={profile.languages}
            placeholder='What language do you speak'
            value={toSend.languages}
            onChange={handleChange}
          />
          <input
            type='text'
            name='how_many_children'
            initalValue={profile.how_many_children}
            placeholder='Do you have kids or are they on the way?'
            value={toSend.how_many_children}
            onChange={handleChange}
          />
          <button type='submit'>Update Bio</button>
        </form>
      </div>

   </h4>
   
        {allRequests.map( oneRequest => {
            return < ListRequest 
            oneRequest={oneRequest}
            key={oneRequest._id}
            />
        })}
        
   </div>
   </>
    )
  }

  export default MotherProfile

  
 