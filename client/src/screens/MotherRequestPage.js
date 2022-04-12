import React, { useState, useEffect } from 'react'
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
  <>
      <div className='col s12'>
          <ul className='m-requests-items'>
            {allItems.map((item) => {
                  return (   
                      <>
                        <div item={item}
                        key={item._id}>
                          <ul>
                            <li><img src={`${item.image}`} alt={`${item.name}`}></img></li> 
                            <li><button onClick={() => addToBasket(item)}> Add to basket</button></li>
                          </ul>
                        </div>
                      </>
                        )
                  })}
            </ul>
      </div>
      <div className='col s6'>
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
      <div className='m-requests-question'> 
        <div className='col s6'>
          < AddRequest 
            setAllRequests={setAllRequests}
            allRequests={allRequests}
            basket={basket}
            setBasket={setBasket}
            />
        </div>
       </div>
          <>
        <div className='col s3'>
            <h5>{t("requested_title")}</h5>
            <div className='m-requests-list'>
              {allRequests.map( oneRequest => {
                  return < ListRequest 
                  oneRequest={oneRequest}
                  key={oneRequest._id}
                  />
              })}
            </div>
        </div>
          </>
      </div> 
      </div>
     
    )
  }

  export default MotherRequestPage
