import React from 'react';


const RequestHelpButton = ({ oneRequest }) => {

  const ChangeStatus = (id) => {
    fetch(`/requests/${id}`,{
        method: "post",
        headers:{
          'Content-Type':'application/json'
        }})
      .then(response => response.json())
      .then(data => {console.log('ACTIVITY CHANGED')})}
    
  return (
    <>
      <button
        onClick = {(e) => {
        e.preventDefault();
        ChangeStatus(oneRequest._id)}} >
        Fulfill this request
      </button>
    </> 
  )
}

export default RequestHelpButton