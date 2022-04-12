import React, {useState} from 'react';
import { send } from 'emailjs-com';

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
      })
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

 return (
   <>
    <h5> Please get in touch if you have any feedback or help with our website and we will get back to you as soon as we can</h5>
      <div className='contact_form'>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='from_name'
            placeholder='from name'
            value={toSend.from_name}
            onChange={handleChange}
          />
          <input
            type='text'
            name='message'
            placeholder='Your message'
            value={toSend.message}
            onChange={handleChange}
          />
          <input
            type='text'
            name='from_email'
            placeholder='Your email'
            value={toSend.from_email}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
   </>
  
 )
    
}

export default ContactForm