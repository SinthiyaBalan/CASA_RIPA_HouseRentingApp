import { useState, useEffect } from "react";
import "antd/dist/reset.css";
import axios from "axios";
import React from "react";
import Room from "./Room";
import moment from "moment";
import { DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;

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
        console.log(data);
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
  function filterbyDate(dates) {
    console.log(moment(dates[0].format("DD-MM-YYYY")));
    console.log(moment(dates[0].format("DD-MM-YYYY")));
  }
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterbyDate} />
        </div>
      </div>
      <div className="container">
      <div className="row justify-content-center mt-5">      
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        rooms.map((room) => {
          return (
            <div className="col-md-9 mt-2">
              <Room room={room} /> 
              {/* <h1>there are {rooms.length}</h1>
              <h1>{room.Name}</h1>
              <Room room={room} /> */}
            
            </div>
          );
        })
      )}
      </div>
       </div>
    </div>
  );
}

export default Booking;
