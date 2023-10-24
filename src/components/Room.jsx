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
          <div className="div">
            <img
              src={room.imageurls[0]}
              style={{ width: 500, height: 300, padding: 10 }}
            />

            <div className="m-4 sm:flex flex-col lg: flex flex-row gap-2">
              <h1>Name: {room.Name}</h1>
              <p>Description: {room.Description}</p>
              <p>MaxCount: {room.MaxCount}</p>
              <p>Type: {room.Type}</p>
              <div className="m-2">
                <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
                  <Button className="btn btn-primary m-2">Book Now</Button>
                </Link>
                <Button className="btn btn-primary m-2" onClick={handleShow}>
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
