import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Room from './Room'
import Loader from "./Loader";

function Bookingscreen() {
  const { roomid } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post("http://localhost:8080/api/rooms/getroombyid", { roomid: roomid.toString()  });
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
        <h1>Room id = {roomid}</h1>
      {loading ? (
        <h1><Loader/></h1>
      ) : error ? (
        <div>Error loading room data.</div>
      ) : room ? (
        <>
          <h1>Name: {room.Name}</h1>
          {room.imageurls && room.imageurls.length > 0 && (
            <img src={room.imageurls[0]} alt={room.Name} />
          )}
          <p>From Date:</p>
          <h1>Bookingscreen</h1>
          <h1>Room id = {roomid}</h1>
          <h1>Max Count = {room.MaxCount}</h1>
        </>
      ) : (
        <div>No room data available.</div>
      )}
    </div>
  );
}

export default Bookingscreen;
