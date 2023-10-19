import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Bookingscreen() {
  const { roomid } = useParams();
  const [room, setroom] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      seterror(null);
      try {
        // const data = (await axios.get('http://localhost:8080/api/rooms/getallrooms')).data;
        const response = await axios.post("/api/rooms/getroombyid", { roomid });
        setroom(response.data);
        // setroom(data)
        setloading(false);
      } catch (error) {
        seterror(true);
        console.error(error.message);
        setloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>{room.Name}</h1>
      <p>From Date:</p>
      <h1>Bookingscreen</h1>
      <h1>Room id = {roomid}</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <div></div>
      ) : (
        <div>
          <h1>{room.Name}</h1>
          <h1>Bookingscreen</h1>
          <h1>Room id = {roomid}</h1>
        </div>
      )}
    </div>
  );
}

export default Bookingscreen;
