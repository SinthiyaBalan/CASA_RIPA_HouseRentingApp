// bookingsRoute.js
import express from 'express';
import Booking from '../models/booking.js'; // Import your Mongoose model

const router = express.Router();

router.post('/bookroom', async (req, res) => {
  const {
    roomid,
    userid,
    fromdate,
    todate,
    totalAmount,
    totaldays
  } = req.body;

  try {
    // Create a new booking document and save it to the database
    const newBooking = new Booking({
      roomid,
      userid,
      fromdate,
      todate,
      totalAmount,
      totaldays
    });

    const booking = await newBooking.save();

    // Respond with a success message and the booking data
    res.status(201).json({ success: true, message: 'Booking successful', booking });
  } catch (error) {
    // Handle any errors that occur during the booking process
    res.status(500).json({ success: false, message: 'An error occurred while booking.' });
  }
});

export default router;
