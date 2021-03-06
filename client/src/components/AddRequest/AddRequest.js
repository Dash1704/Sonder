import React, { useState } from 'react'
import { useTranslation } from "react-i18next";

const AddRequest = ({setAllRequests, allRequests, basket, setBasket}) => {
    const { t } = useTranslation();
    const mother = localStorage.getItem("mother")
    const jsonUser = JSON.parse(mother)
    const userName = jsonUser.name


    const [newRequest, setNewRequest] = useState("")

    const NewRequest = () => {
        console.log(basket)
        fetch("/requests/new", {
            method: "post",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                    text: newRequest,
                    userCreatedBy: jsonUser,
                    basket
                })
            })
            .then(response => response.json())
            .then(data => {
                let updatedRequests = [data, ...allRequests]
                setAllRequests(updatedRequests);
                setNewRequest("");
                setBasket([])
            })
            .catch(err => console.log(err))
        }
 
    return (
    <div>
        
        <h2 className="m-requests-question">{t("request_page_intro_sentence", {userName})}</h2>
        <form>
          <div className="m-request-form">
            <label className="m-request-type-request" htmlFor="request">{t("type_request")}</label>
            <input type="text" 
                value={newRequest}
                onChange = {(e) => setNewRequest(e.target.value)}
                placeholder={t("request_placeholder")}
                data-testid="requestBody"
            /> 
          </div>
            <button className="waves-effect waves-light btn-small call-to-action-button"
                data-testid="addRequestButton"
                onClick = {(e) => {
                    e.preventDefault();
                    NewRequest()}} >
                {t("request_button")}
            </button>
        </form>
    </div>
    )
}

export default AddRequest;