import React, { useState, useEffect } from 'react'
import ListRequest from '../components/ListRequest/ListRequest.js'


const DonorRequestPage = () => {

    const user = localStorage.getItem("user")
    const jsonUser = JSON.parse(user)
    const [allRequests, setAllRequests] = useState([])

    useEffect(()=>{
        seeAllRequests()
        }, [])

        const filterByActive = () => {
          fetch(`/requests/active`, {
            headers:{
              'Content-Type':'application/json'             
          }})
          .then(response => response.json())
          .then(result => {
              setAllRequests(result.requests)
              })   
        }

        const filterByCity = (city) => {
            fetch(`/requests/filter/${city}`,{
                headers:{
                  'Content-Type':'application/json'
              }})
              .then(response => response.json())
              .then(result => {
                  setAllRequests(result.requests)
                  })
        }

        const seeAllRequests = () => {
          fetch("/requests",{
            headers:{
              'Content-Type':'application/json'
              }
              
          })
          .then(response => response.json())
          .then(result => {
              setAllRequests(result.requests)
              })
        }

    return (
      <>
      <h1>Donor Request Page</h1>
        <>

        <button
                data-testid="seeAllRequests"
                onClick = {(e) => {
                    e.preventDefault();
                    seeAllRequests()}} >
                See All Requests
            </button>

        <button
                data-testid="filterCityButton"
                onClick = {(e) => {
                    e.preventDefault();
                    filterByCity(jsonUser.city)}} >
                Filter by city
            </button>

            <button
                data-testid="filterByFilteredRequests"
                onClick = {(e) => {
                    e.preventDefault();
                    filterByActive()}} >
                Filter by active
            </button>
 

        {allRequests.map( oneRequest => {
            return < ListRequest
            oneRequest={oneRequest}
            setAllRequests={setAllRequests}
            allRequests={allRequests}
            key={oneRequest._id}
            />
        })}
        </>
      </>
    )
  }

  export default DonorRequestPage