import React from 'react';
import RequestHelpButton from '../RequestHelpButton'


const ListRequest = ({ oneRequest, allRequests, setAllRequests }) => {

    return (
    <>
    <div>
       <p>{`${oneRequest.text}`}</p> 
       <h5>{`requested by ${oneRequest.userCreatedBy.name}, in ${oneRequest.userCreatedBy.city}`}</h5>
        {
        oneRequest.active===true ? 
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

export default ListRequest