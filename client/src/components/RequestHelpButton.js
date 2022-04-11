import React from 'react';

const RequestHelpButton = ({ oneRequest, allRequests, setAllRequests }) => {
  const donor = localStorage.getItem("donor")
  const jsonDonor = JSON.parse(donor)

  const ChangeStatus = (id, samaritan ) => {
    fetch(`/requests/${id}`,{
        method: "post",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          samaritan: samaritan,
      })
    })
      .then(response => response.json())
      .then(data => {
        const oldData = [...allRequests]
        const newData = oldData.map(item => {
         if(item._id == data[0]._id){
           return data[0]
         }else{
           return item
         }
       })
       setAllRequests(newData)
      })
    }
    
  return (
    <>
      <button
        onClick = {(e) => {
        e.preventDefault();
        ChangeStatus(oneRequest._id, jsonDonor)}} >
        Fulfill this request
      </button>
    </> 
  )
}

export default RequestHelpButton