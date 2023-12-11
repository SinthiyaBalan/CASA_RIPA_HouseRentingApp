import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Room from "./Room";
import moment from "moment";
import Loader from "./Loader";
import Error from "./Error";

function Bookingscreen() {
  const { roomid } = useParams();
  const { fromdate } = useParams();
  const { todate } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fromdateMoment = moment(fromdate, "DD-MM-YYYY");
  const todateMoment = moment(todate, "DD-MM-YYYY");

  const totaldays =
    moment.duration(todateMoment.diff(fromdateMoment)).asDays() + 1;
  const [totalAmount, settotalAmount] = useState(null);
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
        const newtotalamount = totaldays * response.data.renterpay;
        settotalAmount(newtotalamount);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.error(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [roomid, totaldays]);

  async function bookRoom() {
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
        // Handle a successful booking
        console.log("Booking successful!");
      } else {
        // Handle a failed booking
        console.error("Booking failed:", result.data.message);
      }
    } catch (error) {
      console.error("An error occurred while booking:", error.message);
    }
  }
  return (
    <div>
      <h1 className="text-center">Bookingscreen</h1>
      {loading ? (
        <Loader />
      ) : room ? (
        <>
          <div className="flex">
            {room.imageurls && room.imageurls.length > 0 && (
              <img src={room.imageurls[0]} alt={room.Name} />
            )}
            <div className="m-14">
              <h1>Name: {room.Name}</h1>
              {/* <h1>Room id = {roomid}</h1> */}
              <p>From Date:{fromdate}</p>
              <p>To Date:{todate}</p>
              <p>Total days: {totaldays}</p>
              <p>Max Count = {room.MaxCount}</p>
              <p>Total amount = {totalAmount}</p>
            </div>
          </div>
          <button className="btn btn-primary float:right" onClick={bookRoom}>
            Paynow
          </button>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Bookingscreen;
