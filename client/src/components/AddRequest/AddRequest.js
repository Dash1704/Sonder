import React, { useState } from 'react'

const AddRequest = ({setAllRequests, allRequests}) => {

    const user = localStorage.getItem("user")
    const jsonUser = JSON.parse(user)
    

    const [newRequest, setNewRequest] = useState("")
    // const [basket, setBasket] = useState([])
    // const [allItems, setAllItems] = useState([])

    const NewRequest = () => {
        console.log(jsonUser)
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
                console.log('request posted succesfully')
                let updatedRequests = [data, ...allRequests] 
                setAllRequests(updatedRequests);
                setNewRequest("");
            })
            .catch(err => console.log(err))
        }

        // const addToBasket = (item) => {
        //     setBasket([...basket, item])
        //   }
 
    return (
    <div>
        <h1>What items do you need?</h1>
        <form>
            <label htmlFor="request">Type Your Request Here</label>
            <input type="text" 
                value={newRequest}
                onChange = {(e) => setNewRequest(e.target.value)}
                placeholder="Post a new request here..."
                data-testid="requestBody"
            />
             {/* <>
        {allItems.map( item => {
        return (   
        <>
        <div item={item}
            key={item._id}>
            <img src={`${item.image}`} alt={`${item.name}`}></img>
            <button onClick={() => addToBasket(item)}> Add to basket</button>
            </div>
        </>
        )
          })}
          </> */}
            <button
                data-testid="addRequestButton"
                onClick = {(e) => {
                    e.preventDefault();
                    NewRequest()}} >
                Request
            </button>
        </form>
        {/* <div className="order_title">
         <h5>Your Order</h5>
        </div>
        <div className="order_list">
         {
          basket.map((item, index) => { 
            return (
              <>
              <h6 key={index}>{item.name} </h6>
              </>
              )
            })
          }
        </div> */}
    </div>

    
    )
}

export default AddRequest;