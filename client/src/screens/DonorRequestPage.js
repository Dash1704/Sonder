import React, { useState, useEffect } from 'react'
import ListRequest from '../components/ListRequest/ListRequest.js';
import { useTranslation } from "react-i18next";
import donorImage from "../images/donor-image.png";


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
      <div className='container'>
        <div className='row'>
          <h1 className="m-requests-question col s6">{t("donor_request_title")}</h1>
        </div>
        <div className='row'>
          <button className="waves-effect waves-light btn-small call-to-action-button donor-request-buttons"
                  data-testid="seeAllRequests"
                  onClick = {(e) => {
                      e.preventDefault();
                      seeAllRequests()}} >
                  See All Requests
          </button>    
          <button className="waves-effect waves-light btn-small call-to-action-button donor-request-buttons"
              data-testid="filterCityButton"
              onClick = {(e) => {
                  e.preventDefault();
                  filterByCity(jsonUser.city)}} >
              Filter by your city
          </button>

          <button className="waves-effect waves-light btn-small call-to-action-button donor-request-buttons"
              data-testid="filterByFilteredRequests"
              onClick = {(e) => {
                  e.preventDefault();
                  filterByActive()}} >
              Show active requests
          </button>
        </div>
        <div className='row'>
        <div className='col s6 right donor-image-box'>
          <img className="donor-image" src={donorImage}></img>
        </div>
          <div className='d-requests-list col s5'>
          {allRequests.map( oneRequest => {
              return < ListRequest
              oneRequest={oneRequest}
              setAllRequests={setAllRequests}
              allRequests={allRequests}
              key={oneRequest._id}
              />
          })}
          </div>
        </div>
      </div>
    )
  }

  export default DonorRequestPage