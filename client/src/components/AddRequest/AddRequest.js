import React, { useState } from 'react'

const AddRequest = ({setAllRequests, allRequests}) => {

    const [newRequest, setNewRequest] = useState("")

    const NewRequest = () => {
        fetch("/users", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                    text: newRequest
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('request posted succesfully')
                let updatedRequests = [ 
                    ...allRequests, data
                ]
                setAllRequests(updatedRequests);
                setNewRequest("")
            })
            .catch(err => console.log(err))
        }
 
    return (
    <div>
        <h1>Add Request Component </h1>
        <form>
            <label htmlFor="request">Type Your Request Here</label>
            <input type="text" 
                value={newRequest}
                onChange = {(e) => setNewRequests(e.target.value)}
                placeholder="Post a new request here..."
                data-testid="requestBody"
            /> 
            <input type="submit"
                data-testid="addRequestButton"
                onClick = {() => NewRequest()}
            />
        </form>
    </div>
    )
}

export default AddRequest