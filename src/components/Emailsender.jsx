import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmailSender = ({ room }) => {
  const formRef = useRef();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(formRef.current);
      formData.append("fromdate", fromDate.toDateString());
      formData.append("todate", toDate.toDateString());

      const result = await emailjs.sendForm(
        "service_3aqzjic",
        "template_v3wqmyc",
        formData,
        "nHlSdNaHTrzGYLWC0"
      );
      console.log(result.text);
      formRef.current.reset();
      console.log("alert");
    } catch (error) {
      console.error(error.text);
    }
  };

  return (
    <div>
      <form ref={formRef}>
        <input type="text" className="name" name="user_name" placeholder=" * Name" /><br />
        <input type="email" className="name" name="user_email" placeholder=" * Email" /><br />
        <input type="number" className="name" name="user_phone_number" placeholder=" * Phone Number" /><br />

        {/* Date Range Picker */}
        <div>
          <label>From Date:</label>
          <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
        </div>
        <div>
          <label>To Date:</label>
          <DatePicker selected={toDate} onChange={(date) => setToDate(date)} />
        </div>
      </form>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default EmailSender;

