import React from 'react';


const ListRequest = ({ oneRequest }) => {

    return (
    <>
    <div>
       <p>{`${oneRequest.text} requested by ${oneRequest.name} requested with id ${oneRequest.userCreatedBy}`}</p>
    </div>
    </>
    )
}

export default ListRequest