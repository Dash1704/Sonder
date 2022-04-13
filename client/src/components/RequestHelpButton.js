import React from 'react';
import { send } from 'emailjs-com';
import { useTranslation } from "react-i18next";

const RequestHelpButton = ({ oneRequest, allRequests, setAllRequests }) => {
  const donor = localStorage.getItem("donor")
  const jsonDonor = JSON.parse(donor)
  const { t } = useTranslation();

  const ChangeStatus = (id, samaritan ) => {
    fetch(`/requests/${id}`,{
        method: "post",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          samaritan: samaritan,
      })
    })
      .then(response => response.json())
      .then(data => {
        const oldData = [...allRequests]
        const newData = oldData.map(item => {
         if(item._id == data[0]._id){
           return data[0]
         }else{
           return item
         }
       })
       setAllRequests(newData)
      })
    }

    const sendEmailAlert = () => {
      const emailSetting = {
          mother_name: oneRequest.userCreatedBy.name,
          mother_email: oneRequest.userCreatedBy.email,
          donor_name: jsonDonor.name,
          mother_city: oneRequest.userCreatedBy.city,
          message: oneRequest.text
      };
      send(
        'SonderEmail',
        'template_89ahmrr',
         emailSetting, 
        'gWfY7gMc4qo9a3kBt'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    };

  return (
      <>
      <button className="waves-effect waves-light btn-small call-to-action-button donor-fulfill-button"
        onClick = {(e) => {
        e.preventDefault();
        sendEmailAlert()
        ChangeStatus(oneRequest._id, jsonDonor)}} >
        {t("donor_fulfill_request")}
      </button>
      </>
  )
}

export default RequestHelpButton