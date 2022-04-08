import React, { useState, useEffect } from 'react'
import AddRequest from '../components/AddRequest/AddRequest.js'
import ListRequest from '../components/ListRequest/ListRequest.js'
import Items from '../components/Items/Items.js'

const RequestPage = () => {

    const [allRequests, setAllRequests] = useState([])
    const [allItems, setAllItems] = useState([])

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

    return (
      <>
      <h1>Request Page</h1>
        <>
        {allItems.map( item => {
        return <Items
            item={item}
            key={item._id}/>
          })}
          </>
          < AddRequest 
        setAllRequests={setAllRequests}
        allRequests={allRequests}
        />
        <>
        {allRequests.map( oneRequest => {
            return < ListRequest 
            oneRequest={oneRequest}
            key={oneRequest._id}
            />
        })}
        </>
      </>
    )
  }

  export default RequestPage
