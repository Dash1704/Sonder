import React, { useState, useEffect } from 'react'
import ListRequest from '../components/ListRequest/ListRequest.js';
import { useTranslation } from "react-i18next";
import donorImage from "../images/mothering.png";

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
          <h1 className="d-requests-title col s6">{t("donor_request_page_title")}</h1>
        <div className='row'>
          <p className="d-requests-question col s">{t("donor_request_page_intro")}</p>
        </div>
        </div>
        <div className='row'>
          <button className="waves-effect waves-light btn-small call-to-action-button donor-request-buttons"
                  data-testid="seeAllRequests"
                  onClick = {(e) => {
                      e.preventDefault();
                      seeAllRequests()}} >
                  {t("See All Requests")}
          </button>    
          <button className="waves-effect waves-light btn-small call-to-action-button donor-request-buttons"
              data-testid="filterCityButton"
              onClick = {(e) => {
                  e.preventDefault();
                  filterByCity(jsonUser.city)}} >
              {t("Filter by your city")}
          </button>

          <button className="waves-effect waves-light btn-small call-to-action-button donor-request-buttons"
              data-testid="filterByFilteredRequests"
              onClick = {(e) => {
                  e.preventDefault();
                  filterByActive()}} >
              {t("Show active requests")}
          </button>
        </div>
        <div className='row'>
        <div className='col s5 right donor-image-box'>
          <img className="donor-image" src={donorImage}></img>
        </div>
          <div className='d-requests-list col s6'>
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

  
  // {t("See All Requests")}
  // {t("Filter by your city")}
  // {t("Show active requests")}