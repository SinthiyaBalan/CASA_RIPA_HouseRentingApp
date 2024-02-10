import { useState, useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import axios from "axios";
import React from "react";
import Room from "./Room";


function Booking() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();


  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (
          await axios.get("http://localhost:8080/api/rooms/getallrooms")
        ).data;
        // console.log(data);
        setrooms(data);
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
    <div className="container">
      <div className="row mt-5">
  
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {loading ? (
            <Loader />
          ) : rooms.length > 1 ? (
            rooms.map((room) => {
              return (
                <div key={room.id} className="col-md-9 mt-2">
                  <Room room={room} />
              
                </div>
              );
            })
          ) :  (
            <Error />
          )}
        </div>
      </div>
    </div>
  );
}

export default Booking;
