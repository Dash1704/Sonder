import React from 'react';
import RequestHelpButton from '../RequestHelpButton'


const ListRequest = ({ oneRequest }) => {

    return (
    <>
    <div>
       <p>{`${oneRequest.text}`}</p> 
       <h5>{`requested by ${oneRequest.userCreatedBy.name}, in ${oneRequest.userCreatedBy.city}`}</h5>
        
        <RequestHelpButton
        oneRequest={oneRequest}
        />
    </div>
    </>
    )
}

export default ListRequest