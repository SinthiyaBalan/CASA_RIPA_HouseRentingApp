import React , { useRef } from 'react'
import './Contact.css'


function Contact() {
  const name =useRef(null);
  const email =useRef(null);
  const phone = useRef(null);
  const message= useRef(null);
  
  const handlesubmit = (e) =>{
    e.preventDefault();
    consolelog({
        Name : name.target.value,
        Email : email.target.value,
        Phone : phone.target.value,
        Message : message.target.value
      });
  };
  return (
    <div className='contact-wrapper'>
    <div className='contact-container'>
      <h2 className='mt-0 mb-5 text-lg font-bold'>Enquiries regarding your booking on CASA RIPA</h2>
      <form className="form-wrapper" onSubmit={handlesubmit}  >
      <input type="text" className='name'  name="name" placeholder=' * Name'/><br />
      <input type="email" className='name' name="email"  placeholder=' * Email' /><br />
      <input type="number" className='name' name="number" placeholder=' * Phone Number' /><br />
     <input type="text" className='message' name="query" placeholder=' * Write Your Query' /><br />
     <button type='submit' className='mt-0 text-lg font-bold send-btn'>Submit</button>
      </form>
      </div>
      
    </div>
  )
}
export default Contact