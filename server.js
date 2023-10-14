import express from "express";

const app = express();

import dbConfig from './db.js'

// import cors from 'cors'

import router from './routes/roomsRoute.js';

// app.use(cors());

app.use('/api/Rooms',router)

const port = process.env.PORT || 3000

app.listen(port,()=>console.log(`Server started using nodemon`));

// mongodb+srv://Nithyadevi:<password>@cluster0.i4azy4a.mongodb.net/