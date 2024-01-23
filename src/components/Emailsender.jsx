import React, { useRef } from "react";
import emailjs from "emailjs-com";

const EmailSender = ({ fromdate, todate, totaldays, room, totalAmount }) => {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(formRef.current);
      formData.set("fromdate", fromdate);
      formData.set("todate", todate);
      formData.set("totaldays", totaldays.toString());
      formData.set("maxCount", room.MaxCount.toString());
      formData.set("totalAmount", totalAmount.toString());

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
        <input type="hidden" name="totaldays" value={totaldays} />
        <input type="hidden" name="maxCount" value={room.MaxCount.toString()} />
        <input type="hidden" name="totalAmount" value={totalAmount.toString()} />

        <h1>Name: {room.Name}</h1>
        <p>From Date: {fromdate}</p>
        <p>To Date: {todate}</p>
        <p>Total days: {totaldays}</p>
        <p>Max Count = {room.MaxCount}</p>
        <p>Total amount = {totalAmount}</p>
      </form>
      {/* <button onClick={() => { this.sendEmail(); alert('Email sending in progress...'); }}>Send Email</button> */}
      
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailSender;
