import React, { useState, useEffect } from 'react';

import AddRequest from '../components/AddRequest/AddRequest.js';
import ListRequest from '../components/ListRequest/ListRequest.js';
import { useTranslation } from "react-i18next";


const MotherRequestPage = () => {
    const { t } = useTranslation();
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

    
    <div className="container order-list">
      <div className='row'>
  <>    <div> 
          <div className='col s6'>
            < AddRequest 
              setAllRequests={setAllRequests}
              allRequests={allRequests}
              basket={basket}
              setBasket={setBasket}
            />
        <div>
          <div className='col s6'>
            <p className="requested-city-title">{t("requested_title")}</p>
            <div className='m-requests-list'>
              {allRequests.map( oneRequest => {
                  return < ListRequest 
                  oneRequest={oneRequest}
                  key={oneRequest._id}
                  />
              })}
            </div>           
          </div>
          <div className='col s6 '>
            <p className="request_item_added_title">{t("request_item_added")}</p>
          {
            basket.map((item) => { 
              return (
                <>
                <div className="request_item_added">
                  <p key={item}>{item} </p>
                  <btn className="waves-effect waves-light btn-small call-to-action-button" onClick={() => removeFromBasket(item)}> Remove </btn>
                </div>
                </>
                )

            })
          }
          </div>
      </div>
        </div>
        </div>
          <ul className='m-requests-items-all'>
            {allItems.map((item, index) => {
                  return (   
                      <li className="col s3" key={item._id}><span className={item.name} id={index} item={item}></span> 
                        <img className="m-requests-img" src={`${item.image}`} alt={`${item.name}`}></img>
                        <br/>
                        <button className="waves-effect waves-light btn-small call-to-action-button center" onClick={() => addToBasket(item)}> Add {item.name}</button>
                      </li>
                    )
            })}
          </ul>
  </>
        </div>
      </div>  
    )
  }

  export default MotherRequestPage
