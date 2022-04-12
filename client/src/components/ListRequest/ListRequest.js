import React from 'react';

import { useTranslation } from "react-i18next";
import RequestHelpButton from '../RequestHelpButton'


const ListRequest = ({ oneRequest, allRequests, setAllRequests }) => {
  const { t } = useTranslation();
  const userName = oneRequest.userCreatedBy.name
  const userCity = oneRequest.userCreatedBy.city
  const donor = localStorage.getItem("donor")

  const deleteRequest = (userId, allRequests, setAllRequests) => {
      console.log(userId)
    fetch(`/requests/${userId}`,{
        method: "delete", 
      headers:{
        'Content-Type':'application/json'
        },
        body:JSON.stringify({
            _id: userId
        })
    })
    .then(response => response.json())
    .then(data => {
        const oldData = [...allRequests]
        const newData = oldData.filter(item => {
        item.userCreatedBy._id !== data.userCreatedBy._id
       })
       setAllRequests(newData)
      })
  }
    if(!donor) {
        return (
            <>
            <div id={oneRequest.userCreatedBy._id}>
               <p>{`${oneRequest.text}`}</p> 
               {oneRequest.basket.map(item => {
                   return (
                   <>
                   <p> {item} </p>
                   </>
                   )
               }
               )}
               <h5>{t("requested_by_info", {userName, userCity})}</h5>
               
               <button
                    id="delete_request"
                    onClick = {(e) => {
                        e.preventDefault();
                        deleteRequest(`${oneRequest.userCreatedBy._id}`, `${allRequests}`, `${setAllRequests}`)}} >
                        Delete request
                  </button>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div>
               <p>{`${oneRequest.text}`}</p> 
               <h5>{t("requested_by_info", {userName, userCity})}</h5>
               <a href={`/viewmotherprofile/${oneRequest.userCreatedBy._id}`}>View {userName} Profile</a>
                {
                oneRequest.status=== "NEW" ? 
                <RequestHelpButton
                    oneRequest={oneRequest}
                    allRequests={allRequests}
                    setAllRequests={setAllRequests}/> : 
                    <p>Request is being fulfilled</p>
                }
            </div>
        </>
        )
    }
    
}

export default ListRequest