import React from 'react';


const AddRequest = () => {

    return (
    <div>
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