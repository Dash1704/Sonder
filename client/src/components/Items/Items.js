import React from 'react';


const Items = ({ item }) => {
    return (
    <>
        <div>
            <img src={`${item.image}`} alt={`${item.name}`}></img>
        </div>
    </>
    )
}

export default Items