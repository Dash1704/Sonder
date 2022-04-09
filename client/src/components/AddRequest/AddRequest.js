import React, { useState } from 'react'

const AddRequest = ({setAllRequests, allRequests}) => {

    const user = localStorage.getItem("user")
    const jsonUser = JSON.parse(user)
    

    const [newRequest, setNewRequest] = useState("")

    const NewRequest = () => {
        fetch("/requests/new", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                    text: newRequest,
                    userCreatedBy: jsonUser
                })
            })
            .then(response => response.json())
            .then(data => {
                let updatedRequests = [data, ...allRequests]
                setAllRequests(updatedRequests);
                setNewRequest("");
            })
            .catch(err => console.log(err))
        }
 
    return (
    <div>
        <h2>What items do you need?</h2>
        <form>
            <label htmlFor="request">Type Your Request Here</label>
            <input type="text" 
                value={newRequest}
                onChange = {(e) => setNewRequest(e.target.value)}
                placeholder="Post a new request here..."
                data-testid="requestBody"
            /> 
           
            <button
                data-testid="addRequestButton"
                onClick = {(e) => {
                    e.preventDefault();
                    NewRequest()}} >
                Request
            </button>
        </form>
    </div>
    )
}

export default AddRequest;