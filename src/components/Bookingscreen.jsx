import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Bookingscreen.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import Error from "./Error";


function Bookingscreen() {
  const [checkedItems, setCheckedItems] = useState({});
  const handleCheckboxChange = (itemName) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [itemName]: !prevState[itemName],
    }));
  };

  const form = useRef();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!fromDate || !toDate || toDate < fromDate) {
      alert("Please select valid From and To dates.");
      return;
    }
    const formData = new FormData(form.current);
    formData.append("from_date", fromDate.toDateString());
    formData.append("to_date", toDate.toDateString());

    emailjs
      .sendForm(
        "service_3aqzjic",
        "template_q80d69v",
        formData,
        "nHlSdNaHTrzGYLWC0"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          alert(
            "Email sent successfully! Thank you for choosing to stay at our place. We will revert soon!"
          );
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const { roomid } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [roomid]);

  const bookRoom = async () => {
    const bookingDetails = {
      roomid: room._id,
    };

    try {
      const result = await axios.post(
        "http://localhost:8080/api/bookings/bookroom",
        bookingDetails
      );

      if (result.data && result.data.success) {
        console.log("Booking successful!");
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
          <div className="flex flex-col gap-4 md:flex-row lg:flex-row">
            <div>
              {room.imageurls && room.imageurls.length > 0 && (
                <img
                  src={room.imageurls[0]}
                  alt={room.Name}
                  className="room-image"
                />
              )}
              <br />
              {room.imageurls && room.imageurls.length > 1 && (
                <img
                  src={room.imageurls[1]}
                  alt={room.Name}
                  className="room-image"
                />
              )}
              <br />
              <div className="sm:w-100 md:basis-1/2 lg:basis-1/2">
                {room.imageurls && room.imageurls.length > 2 && (
                  <img
                    src={room.imageurls[2]}
                    alt={room.Name}
                    className="room-image"
                  />
                )}
                <br />
              </div>
            </div>
            <div className="contact-container">
              <h2 className="decoration-sky-500 mt-0 mb-5 text-lg font-bold">
                Booking details <br />
                {room.Name}
              </h2>
              <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
                <label htmlFor="user_name">Enter your Name:</label>
                <input
                  type="text"
                  className="name"
                  name="user_name"
                  placeholder=" * Name"
                />
                <label htmlFor="user_email">Enter your Email:</label>
                <input
                  type="email"
                  className="name"
                  name="user_email"
                  placeholder=" * Email"
                />
                <label htmlFor="user_phone_number">Enter Phone Number:</label>
                <input
                  type="number"
                  className="name"
                  name="user_phone_number"
                  placeholder=" * Phone Number"
                />
                <div>
                  <label>Select From Date:</label>
                  <DatePicker
                    selected={fromDate}
                    onChange={(date) => setFromDate(date)}
                  />
                </div>
                <br />
                <div>
                  <label>Select To Date:</label>
                  <DatePicker
                    selected={toDate}
                    onChange={(date) => setToDate(date)}
                  />
                </div>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="Extra_adult_bed"
                    checked={checkedItems["item1"] || false}
                    onChange={() => handleCheckboxChange("item1")}
                  />
                  Extra Adult's Bed
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="Extra_Kids_Bed"
                    checked={checkedItems["item2"] || false}
                    onChange={() => handleCheckboxChange("item2")}
                  />
                  Extra Kid's Bed
                </label>
                <br />
                <label htmlFor="message">Enter your Message:</label>
                <textarea
                  className="message"
                  name="message"
                  placeholder=" * Write Your Query"
                  rows={4}
                />
                <br />
                <button type="submit" className="send-btn">
                  Submit
                </button>
              </form>
              <h1>
                *Thank you for choosing to stay at our place. We will revert
                soon!
              </h1>
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
