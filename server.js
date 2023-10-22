import express from "express";
import dbConfig from './db.js'
import cors from 'cors'
import roomsRoute from './routes/roomsRoute.js';

const app = express();
const port = process.env.PORT || 8080
app.use(cors({
    origin: 'http://localhost:5173', // Replace with the actual URL of your React app
  }));
  
app.use(express.json())

app.use('/api/rooms',roomsRoute)
// app.post('/api/rooms/getroombyid')
app.listen(port,()=>console.log(`Server started on port ${port}`));

// dbConfig.connect()
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server started on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Error connecting to the database:', err);
//   });

// mongodb+srv://Nithyadevi:<password>@cluster0.i4azy4a.mongodb.net/