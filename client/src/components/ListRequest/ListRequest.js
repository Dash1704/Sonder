import React from 'react';

import { useTranslation } from "react-i18next";
import RequestHelpButton from '../RequestHelpButton'


const ListRequest = ({ oneRequest, allRequests, setAllRequests }) => {
  const { t } = useTranslation();
  const userName = oneRequest.userCreatedBy.name
  const userCity = oneRequest.userCreatedBy.city
  const donor = localStorage.getItem("donor")
  
    if(!donor) {
        return (
            <>
          <div className='m-list-requests-box'>
               <p>{`${oneRequest.text}`}</p> 
               {oneRequest.basket.map(item => {
                   return (
                   <>
                   <p> - {item} - </p>
                   </>
                   )
               }
               )}

               <h5>{t("requested_by_info", {userName, userCity})}</h5>   
               <p className="m-request-details">{t("requested_by_info", {userName, userCity})}</p>   
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className='donor-requests-box'>
               <p>{`${oneRequest.text}`}</p> 
               <h5>{t("requested_by_info", {userName, userCity})}</h5>
               <a href={`/viewmotherprofile`}>View {userName}s Profile</a>
                {
                oneRequest.status=== "NEW" ? 
                <RequestHelpButton
                    oneRequest={oneRequest}
                    allRequests={allRequests}
                    setAllRequests={setAllRequests}/> : 
                    <p className='donor-fulfillment'>{t("donor_fulfillment")}</p>
                }
            </div>
        </>
        )
    }
    
}

export default ListRequest