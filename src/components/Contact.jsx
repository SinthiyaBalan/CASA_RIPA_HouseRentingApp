import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';


function Contact() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3aqzjic', 
      'template_v3wqmyc', 
      form.current,
      'nHlSdNaHTrzGYLWC0')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          alert('ok')
      }, (error) => {
          console.log(error.text);
      }
      
      );
    };
  return (
    <div className='contact-wrapper'>
    <div className='contact-container'>
      <h2 className='mt-0 mb-5 text-lg font-bold'>Enquiries regarding your booking on CASA RIPA</h2>
      <form className="form-wrapper" ref={form} onSubmit={sendEmail}  >
      <input type="text" className='name'  name="user_name" placeholder=' * Name'/><br />
      <input type="email" className='name' name="user_email"  placeholder=' * Email' /><br />
      <input type="number" className='name' name="user_phone_number" placeholder=' * Phone Number' /><br />
     <textarea className='message' name="message" placeholder=' * Write Your Query' rows={4}/><br />
     <button type='submit' value="Send" className='mt-0 text-lg font-bold send-btn'>Submit</button>
      </form>
      </div>
      
    </div>
  )
}
export default Contact