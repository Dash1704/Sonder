import React, { useState, useEffect } from 'react'
import ListRequest from '../components/ListRequest/ListRequest.js'


const DonorRequestPage = () => {

    const [allRequests, setAllRequests] = useState([])

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
            })
        }, [])

    return (
      <>
      <h1>Donor Request Page</h1>
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

  export default DonorRequestPage