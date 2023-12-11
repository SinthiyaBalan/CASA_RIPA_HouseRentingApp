import express from "express";
import dbConfig from './db.js'
import cors from 'cors'
import roomsRoute from './routes/roomsRoute.js';
import bookingsRoute from './routes/bookingsRoute.js'
const app = express();
const port = process.env.PORT || 8080
app.use(cors({
    origin: 'http://localhost:5173', 
  }));
  
app.use(express.json())

app.use('/api/rooms',roomsRoute)
app.use('/api/bookings',bookingsRoute)
app.listen(port,()=>console.log(`Server started on port ${port}`));
