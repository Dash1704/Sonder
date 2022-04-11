import React, { useState, useEffect } from 'react'
import AddRequest from '../components/AddRequest/AddRequest.js'
import ListRequest from '../components/ListRequest/ListRequest.js'


const MotherRequestPage = () => {

    const [allRequests, setAllRequests] = useState([])
    const [basket, setBasket] = useState([])
    const [allItems, setAllItems] = useState([])

    useEffect(()=>{
        fetch("/requests/list",{
          headers:{
            'Content-Type':'application/json'
            }
        })
        .then(response => response.json())
        .then(result => {
            setAllRequests(result.requests)
            setAllItems(result.images)
            })
        }, [])

        const addToBasket = (item) => {
          setBasket([...basket, item.name])
        }

        const removeFromBasket = (item) => {
          return setBasket(basket.filter(i =>  i !== item))
        }
        

    return (
   
      <div className="container">

  <>
      {allItems.map((item) => {
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
      <div className="order_list">
         {
          basket.map((item) => { 
            return (
              <>
              <h6 key={item}>{item} </h6>
              <btn onClick={() => removeFromBasket(item)}> Remove </btn>
              </>
              )
            })
          }
         </div>
  </>
        
      < AddRequest 
        setAllRequests={setAllRequests}
        allRequests={allRequests}
        basket={basket}
        setBasket={setBasket}
        />
        <>
        {allRequests.map( oneRequest => {
            return < ListRequest 
            oneRequest={oneRequest}
            key={oneRequest._id}
            />
        })}
        </>
      </div>
     
    )
  }

  export default MotherRequestPage