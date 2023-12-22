import React, { useEffect, useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import './Bookingscreen.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Loader from "./Loader";
import Error from "./Error";

// import EmailSender from "./Emailsender"; // Adjust the import path accordingly

function Bookingscreen() {
  const [checkedItems, setCheckedItems] = useState({}); // State to track checked items

  const handleCheckboxChange = (itemName) => {
    setCheckedItems(prevState => ({
      ...prevState,
      [itemName]: !prevState[itemName] // Toggle the checked state
    }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Do something with the checked items (e.g., send to the server)
  //   console.log('Checked items:', checkedItems);
  // };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3aqzjic', 
      'template_q80d69v', 
      form.current,
      'nHlSdNaHTrzGYLWC0')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      }
      
      );
    };
  const { roomid, fromdate, todate } = useParams();
  const formRef = useRef();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fromdateMoment = moment(fromdate, "DD-MM-YYYY");
  const todateMoment = moment(todate, "DD-MM-YYYY");
  const totaldays = moment.duration(todateMoment.diff(fromdateMoment)).asDays() + 1;
  const [totalAmount, setTotalAmount] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(
          "http://localhost:8080/api/rooms/getroombyid",
          { roomid: roomid.toString() }
        );
        setRoom(response.data);
        const newTotalAmount = totaldays * response.data.renterpay;
        setTotalAmount(newTotalAmount);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [roomid, totaldays]);

  const bookRoom = async () => {
    const bookingDetails = {
      roomid: room._id,
      fromdate,
      todate,
      totalAmount,
      totaldays,
    };

    try {
      const result = await axios.post(
        "http://localhost:8080/api/bookings/bookroom",
        bookingDetails
      );

      if (result.data && result.data.success) {
        console.log("Booking successful!");
        // Optionally, you can trigger the email sending here as well
      } else {
        console.error("Booking failed:", result.data.message);
      }
    } catch (error) {
      console.error("An error occurred while booking:", error.message);
    }
  };

  return (
    <div>
     
      {loading ? (
        <Loader />
      ) : room ? (
        <>
        {/* <h1> {room.Name}</h1> */}
          <div className="flex">
            {room.imageurls && room.imageurls.length > 0 && (
              <img src={room.imageurls[0]} alt={room.Name} />
            )}
            <div className='contact-container'>
      <h2 className='mt-0 mb-5 text-lg font-bold'>
        Booking details:  {room.Name}
      </h2>
      <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Enter your Name:
          <input type="text" className='name' name="user_name" placeholder=' * Name' />
        </label>
        <label htmlFor="user_email">Enter your Email:
          <input type="email" className='name' name="user_email" placeholder=' * Email' />
        </label>
        <label htmlFor="user_phone_number">Enter Phone Number:
          <input type="number" className='name' name="user_phone_number" placeholder=' * Phone Number' />
        </label>
        <label htmlFor="from_date">Select From Date:
          <input type="date" className='name' id="from_date" name="from_date" required />
        </label>
        <label htmlFor="to_date">Select To Date:
          <input type="date" className='name' name="to_date" required />
        </label>
        <label>
        <input
          type="checkbox"
          name="Extra_adult_bed"
          checked={checkedItems['item1'] || false}
          onChange={() => handleCheckboxChange('item1')}
        />
       Extra Bed for adult
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Extra_Kids_Bed"
          checked={checkedItems['item2'] || false}
          onChange={() => handleCheckboxChange('item2')}
        />
       Kids Bed
      </label>
      <br />

        <label htmlFor="message">Enter your Message:
          <textarea className='message' name="message" placeholder=' * Write Your Query' rows={4} />
        </label>
        <button type='submit' className='mt-0 text-lg font-bold send-btn'>Submit</button>
      </form>
      </div>
      </div>
    
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;
