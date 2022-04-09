import React from 'react';
import { useTranslation } from "react-i18next";


const ListRequest = ({ oneRequest }) => {
    const { t } = useTranslation();
    const userName = oneRequest.userCreatedBy.name
    const userCity = oneRequest.userCreatedBy.city

    return (
    <>
    <div>
       <p>{`${oneRequest.text}`}</p> 
       <h5>{t("requested_by_info", {userName, userCity})}</h5>
    </div>
    </>
    )
}

export default ListRequest