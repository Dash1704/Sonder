import React, { useState } from 'react'

const AddRequest = ({setAllRequests, allRequests}) => {

    const [newRequest, setNewRequest] = useState("")
    const [name, setName] = useState("")

    const NewRequest = () => {
        fetch("/requests/new", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                    text: newRequest,
                    name
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('request posted succesfully')
                let updatedRequests = [...allRequests, data]
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
                onChange = {(e) => setNewRequest(e.target.value)}
                placeholder="Post a new request here..."
                data-testid="requestBody"
            /> 
            <input type="text" 
                value={name}
                onChange = {(e) => setName(e.target.value)}
                placeholder="Write your name here"
                data-testid="contactName"
            /> 
            <input type="submit"
                data-testid="addRequestButton"
                onClick = {() => NewRequest()}
            />
        </form>
    </div>
    )
}

export default AddRequest;