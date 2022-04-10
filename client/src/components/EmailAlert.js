import React from 'react';
import { send } from 'emailjs-com';

const EmailAlert = ( {oneRequest} ) => {

    const donor = localStorage.getItem("donor")
    const jsonDonor = JSON.parse(donor)
    // const [toSend, setToSend] = useState({
    // mother_name: "",
    // mother_email: "",
    // donor_name: "",
    // mother_city: "",
    // message: ""
    // });

  const sendEmailAlert = async (e) => {
    e.preventDefault();
    const emailSetting = {
        mother_name: oneRequest.userCreatedBy.name,
        mother_email: oneRequest.userCreatedBy.email,
        donor_name: jsonDonor.name,
        mother_city: oneRequest.userCreatedBy.city,
        message: oneRequest.text
    };
    await send(
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

//   const handleChange = (e) => {
//     setToSend({
//         mother_name: oneRequest.createdBy.name,
//         mother_email: oneRequest.createdBy.email,
//         donor_name: jsonDonor.name,
//         mother_city: oneRequest.createdBy.city,
//         list_of_items: oneRequest.basket
//     });
//   };

 return (
   <>
      <div className='Email_alert_button'>
        <form onSubmit={sendEmailAlert}>
          <button type='submit'>Send Email Alert</button>
        </form>
      </div>
   </>
  
 )
    
}

export default EmailAlert

// mother_name: oneRequest.createdBy.name,
// mother_email: oneRequest.createdBy.email,
// donor_name: jsonDonor.name,
// mother_city: oneRequest.createdBy.city,
// list_of_items: oneRequest.basket