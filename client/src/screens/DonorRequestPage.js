import React, { useState, useEffect } from 'react'
import ListRequest from '../components/ListRequest/ListRequest.js';
import { useTranslation } from "react-i18next";


const DonorRequestPage = () => {

    const { t } = useTranslation();
    const user = localStorage.getItem("donor")
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
          fetch("/requests/list",{
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
      <h5>{t("donor_request_page_intro")}</h5>
        <>

        <button
            data-testid="seeAllRequests"
            onClick = {(e) => {
                e.preventDefault();
                seeAllRequests()}} >
                    {t("See All Requests")}
        </button>

        <button
            data-testid="filterCityButton"
            onClick = {(e) => {
                e.preventDefault();
                filterByCity(jsonUser.city)}} >
                    {t("Filter by your city")}
        </button>

        <button
            data-testid="filterByFilteredRequests"
            onClick = {(e) => {
                e.preventDefault();
                filterByActive()}} >
                    {t("Show active requests")}
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