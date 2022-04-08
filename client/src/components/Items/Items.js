import React from 'react';


const Items = ({ item }) => {
    return (
    <>
        <div>
            <img src={`${item.image}`} alt={`${item.name}`}></img>
            <button
                data-testid="add-button"
                onClick = {(e) => {
                    e.preventDefault();
                    }
                } >
                Add to list
            </button>
        </div>
    </>
    )
}

export default Items