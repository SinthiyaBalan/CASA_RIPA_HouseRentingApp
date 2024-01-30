import React, { useRef } from "react";
import emailjs from "emailjs-com";

const EmailSender = ({room}) => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(formRef.current);
   

      const result = await emailjs.sendForm(
        "service_3aqzjic",
        "template_v3wqmyc",
        formData,
        "nHlSdNaHTrzGYLWC0"
      );
      console.log(result.text);
      formRef.current.reset();
      console.log("alert")
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <div>
        
      <form ref={formRef}>
  
        <input type="text" className='name' name="user_name" placeholder=' * Name'/><br />
        <input type="email" className='name' name="user_email" placeholder=' * Email' /><br />
        <input type="number" className='name' name="user_phone_number" placeholder=' * Phone Number' /><br />
        <input type="hidden" name="fromdate" value={fromdate} />
        <input type="hidden" name="todate" value={todate} />


    

      </form>

      
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailSender;
