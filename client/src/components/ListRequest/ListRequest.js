import React from 'react';
import RequestHelpButton from '../RequestHelpButton'


const ListRequest = ({ oneRequest }) => {
    
    return (
    <>
    <div>
       <p>{`${oneRequest.text}`}</p> 
       <h5>{`requested by ${oneRequest.userCreatedBy.name}, in ${oneRequest.userCreatedBy.city}`}</h5>
        {
        oneRequest.active===true && 
        <RequestHelpButton
        oneRequest={oneRequest}
        />
        } {
        oneRequest.active===false &&
        <p>
            Request is being fulfilled
        </p>
        }
    </div>
    </>
    )
}

export default ListRequest