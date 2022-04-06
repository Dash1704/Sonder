import React from 'react';


const AddRequest = () => {

    return (
    <div>
        <h1>Add Request Component </h1>
        <form>
            <label htmlFor="request">Type Your Request Here</label>
            <input type="text" 
                data-testid="requestBody"
            /> 
            <input type="submit"
                data-testid="addRequestButton"
            />
        </form>
    </div>
    )
}

export default AddRequest