import React from 'react';


const ListRequest = ({ text, name }) => {

    return (
    <>
    <h1>List Item</h1>
    <div>
       <p>{`${text} requested by ${name}`}</p>
    </div>
    </>
    )
}

export default ListRequest