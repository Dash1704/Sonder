import React from 'react';

const RequestHelpButton = ({ oneRequest, allRequests, setAllRequests }) => {

  const ChangeStatus = (id) => {
    fetch(`/requests/${id}`,{
        method: "post",
        headers:{
          'Content-Type':'application/json'
        }})
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
        ChangeStatus(oneRequest._id)}} >
        Fulfill this request
      </button>
    </> 
  )
}

export default RequestHelpButton