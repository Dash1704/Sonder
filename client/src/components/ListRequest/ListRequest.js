import React from 'react';


const ListRequest = ({ oneRequest }) => {

    return (
    <>
    <div>
       <p>{`${oneRequest.text}`}</p> 
       <h5>{`requested by ${oneRequest.userCreatedBy.name}, in ${oneRequest.userCreatedBy.city}`}</h5>
    </div>
    </>
    )
}

export default ListRequest