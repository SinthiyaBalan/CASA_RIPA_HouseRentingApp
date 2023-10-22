import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Carousel } from 'react-bootstrap';

function Room({ room }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className="sm:flex-col md:flex-row">
    <div >
      <img src={room.imageurls[0]} style={{width : 500, height: 400, padding: 10}}/>
      </div>
      
    <div >
      <h1>Name: {room.Name}</h1>
      <p>Description: {room.Description}</p>
      <p>MaxCount: {room.MaxCount}</p>
      <p>Type: {room.Type}</p>
      </div>
     
      <div style={{ float: 'right' }}>
        <Link to={`/book/${room._id}`}>
          <Button className="btn btn-primary">Book Now</Button>
        </Link>
        <Button className="btn btn-primary" onClick={handleShow}>
          View Details
        </Button>
        </div>
      {/* Modal to display room images */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{room.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Carousel>
  {room.imageurls.map((url) => (
    <Carousel.Item key={url}>
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
      </div>
    </>
  );
}

export default Room;
