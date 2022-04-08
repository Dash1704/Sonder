import React from 'react';


const ListRequest = ({ oneRequest }) => {

    return (
    <>
    <div>
       <p>{`${oneRequest.text} requested by ${oneRequest.name}`}</p>
    </div>
    </>
    )
}

export default ListRequest