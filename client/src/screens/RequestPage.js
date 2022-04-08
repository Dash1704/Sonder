import React, { useState, useEffect } from 'react'
import AddRequest from '../components/AddRequest/AddRequest.js'


const RequestPage = () => {

    const [allRequests, setAllRequests] = useState([])
    const [allItems, setAllItems] = useState([])
    const [basket, setBasket] = useState([])

    useEffect(()=>{
        fetch("/requests",{
          headers:{
            'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setAllRequests(result.requests)
            setAllItems(result.images)
            })
        }, [])

        const addToBasket = (item) => {
          setBasket([...basket, item])
        }

    return (

      <>
    <div className='row'>
      <h1>Request Page</h1>
        <>
        {allItems.map( item => {
        return    <>
        <div item={item}
            key={item._id}>
            <img src={`${item.image}`} alt={`${item.name}`}></img>
            <button onClick={() => addToBasket(item)}> Add to basket</button>
            </div>
    </>
            
          })}
          </>
          < AddRequest 
        setAllRequests={setAllRequests}
        allRequests={allRequests}
        />
         </div>
        
        <>
        <div className="basket">
        <div className="order_title">
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
         </div>
         </div>
        </>
        </>
      
    )
  }

  export default RequestPage
