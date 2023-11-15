import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
  
  const sentEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm()
    
  };
  return (
    <div className='contact-wrapper'>
    <div className='contact-container'>
      <h2 className='mt-0 mb-5 text-lg font-bold'>Enquiries regarding your booking on CASA RIPA</h2>
      <form className="form-wrapper" onSubmit={sentEmail}  >
      <input type="text" className='name'  name="name" placeholder=' * Name'/><br />
      <input type="email" className='name' name="email"  placeholder=' * Email' /><br />
      <input type="number" className='name' name="number" placeholder=' * Phone Number' /><br />
     <textarea className='message' name="query" placeholder=' * Write Your Query' rows={4}/><br />
     <button type='submit' className='mt-0 text-lg font-bold send-btn'>Submit</button>
      </form>
      </div>
      
    </div>
  )
}
export default Contact