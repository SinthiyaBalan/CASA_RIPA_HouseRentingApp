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
    <div className='contact'>
      <h3>Please fill the form  to know more</h3>
      <form action="" onSubmit={handlesubmit}  >
      <input type="text" className='name'  name="name" placeholder=' * Name'/>
      <input type="email" className='name' name="email"  placeholder=' * Email' />
      <input type="number" className='name' name="number" placeholder=' * Phone Number' />
     <input type="text" className='name1' name="query" placeholder=' * Write Your Query' />
      </form>
      {/* <form action="">
      <label htmlFor="" placeholder='Wite the message '></label>
      <input type="text" name="" id="" />
      </form> */}
      <button type='submit' className='send-btn'>Submit</button>
    </div>
  )
}
export default Contact