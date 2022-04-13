import React, {useState} from 'react';
import { send } from 'emailjs-com';
import M from 'materialize-css';


const ContactForm = () => {

  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    from_email: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'SonderEmail',
      'template_0yo210f',
      toSend,
      'gWfY7gMc4qo9a3kBt'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({from_name: '',
        message: '',
        from_email: '',
      })})
      .then(M.toast({html: 'Email Sent To Sonder HQ', classes: '#536dfe indigo accent-2'}))
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

 return (
   <>

   <div className='card'>
    <h5>Get in touch</h5>
      <div className='contact_form'>
        <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
        <div className="input-field col s6">
        <i className="material-icons prefix">account_circle</i>
          <input
            className="validate"
            id="first_name icon_prefix" 
            type='text'
            name='from_name'
            required="true"
            aria-required="true"
            value={toSend.from_name}
            onChange={handleChange}
          />
        <label htmlFor="first_name">First Name</label>
        <span className="helper-text" data-error="Required" data-success=""></span>
        </div>
        <div className="input-field col s6">
        <i className="material-icons prefix">email</i>
           <input
            className="validate"
            id="email icon_prefix"
            type='email'
            name='from_email'
            required
            aria-required="true"
            value={toSend.from_email}
            onChange={handleChange}
          />
        <label htmlFor="email">Email</label>
        <span className="helper-text" data-error="Please enter a valid email" data-success=""></span>
        </div>
        <div className="input-field col s12">
        <i className="material-icons prefix">create</i>
          <textarea
            className="materialize-textarea validate"
            id="message icon_prefix"
            name='message'
            required
            aria-required="true"
            value={toSend.message}
            onChange={handleChange}
          />

        <label htmlFor="message">Your message</label>
        <span className="helper-text" data-error="Required" data-success=""></span>
        </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Send<i className="material-icons right">send</i></button>
        </div>
        </form>
      </div>
      </div>
   </>
  
 )
    
}

export default ContactForm