import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Loader from "./Loader";
import Error from "./Error";
import "antd/dist/reset.css";
import axios from "axios";
import React from "react";
import Room from "./Room";
import moment from "moment";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

function Booking() {
  const [rooms, setrooms] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const[fromdate,setfromdate] =useState();
  const[todate,settodate] =useState();

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
  function filterbyDate(dates, dateStrings) {
    // Ensure that the dateStrings array contains two elements: start date and end date
    if (dateStrings.length === 2) {
      const startDate = moment(dateStrings[0], "DD-MM-YYYY");
      const endDate = moment(dateStrings[1], "DD-MM-YYYY");
      // Use startDate and endDate for filtering rooms or any other date-related operations
      // console.log("Start Date:", startDate.format("DD-MM-YYYY"));
      setfromdate(startDate.format("DD-MM-YYYY"))
      // console.log("End Date:", endDate.format("DD-MM-YYYY"));
      settodate(endDate.format("DD-MM-YYYY"))
    }
  }
  return (
    <div className="container">
      <div className="row mt-5">
        {/* <div className="col-md-3">
          <RangePicker format="DD-MM-YYYY" onChange={filterbyDate} />
        </div> */}
      </div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          {loading ? (
            <Loader />
          ) : rooms.length > 1 ? (
            rooms.map((room) => {
              return (
                <div className="col-md-9 mt-2">
                  <Room room={room} fromdate={fromdate} todate ={todate}/>
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
