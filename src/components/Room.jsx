import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button, Carousel } from "react-bootstrap";

function Room({ room, fromdate, todate }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="conatiner">
        <div className="ml-36 mb-4 sm:flex flex-col lg:flex justify-center  gap-2 border-solid border-2 border-white-600">
          <div className="div lg:flex">
            <img
              src={room.imageurls[0]}
              style={{ width: 500, height: 300, padding: 10 }}
            />
                    <div className="div">
                    <div className="div">
      <iframe
        className="calendar"  style={{ width: 500, height: 300, padding: 10 }}
        src = {room.Calendar}
        // src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&hl=en_GB&showTz=0&showCalendars=0&showTabs=0&showTitle=1&src=ZDcwNThkOWQzODM5YzczZDYzNTM1Y2IxY2U5MDE4OWMwNjA2NTMzNmYyZjAzYjU0NzE5ZjAxMGI2NTVkMGYwYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
      ></iframe> 
      </div>
      </div>
            <div className="m-4 sm:flex flex-col lg: flex flex-row gap-2">
              <h1>Name: {room.Name}</h1>
              <p>Description: {room.Description}</p>
              <p>MaxCount: {room.MaxCount}</p>
              <p>Type: {room.Type}</p>
              <p>Rent: {room.renterpay}</p>
              <div className="m-2">
                <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                {/* <Link to ={'/ContactPage'}> */}
                  <Button style={{ backgroundColor: "#76a745"}}className="hover:bg-blue-700 font-bold black py-2 px-4 rounded ">Book Now</Button>
                </Link>
                {/* <Button className="btn btn-primary m-2" onClick={handleShow}>
                  View Details
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      {/* <div className="div">
      <iframe
        className="calendar"  style={{ width: 500, height: 300, padding: 10 }}
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&hl=en_GB&showTz=0&showCalendars=0&showTabs=0&showTitle=1&src=ZDcwNThkOWQzODM5YzczZDYzNTM1Y2IxY2U5MDE4OWMwNjA2NTMzNmYyZjAzYjU0NzE5ZjAxMGI2NTVkMGYwYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
      ></iframe> 
      <iframe 
        className="calendar" style={{ width: 500, height: 300, padding: 10 }}
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FBerlin&hl=en_GB&showTz=0&showCalendars=0&showTabs=0&showTitle=1&src=NDIxZjg0NzhlN2FlMjMzYjIzYmMyZTc2NDY2NDE2YzdjOGEwZWMzZjkzMWU1ZTA4ZTdhNjE4ZDAzZTFmYTBlNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00">
      </iframe>
      </div> */}
      {/* Modal to display room images */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls.map((url) => (
              <Carousel.Item className="w-60" key={url}>
                <img className="d-block w-100 h-78" src={url} alt="Room" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Room;
