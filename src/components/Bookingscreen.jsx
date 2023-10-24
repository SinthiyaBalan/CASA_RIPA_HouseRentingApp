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
  const fromdateMoment = moment(fromdate, 'DD-MM-YYYY');
const todateMoment = moment(todate, 'DD-MM-YYYY');
 
  const totaldays = moment.duration(todateMoment.diff(fromdateMoment)).asDays(); 

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
          <h1>Room id = {roomid}</h1>
          <p>From Date:{fromdate}</p>
          <p>To Date:{todate}</p>
          <p>Total days: {totaldays}</p>
          <h1>Room id = {roomid}</h1>
          <h1>Max Count = {room.MaxCount}</h1>
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
