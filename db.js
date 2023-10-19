import mongoose from "mongoose";
const password = 'Mongo@123';
const encodedPassword = encodeURIComponent(password);

const mongoURL =`mongodb+srv://Nithyadevi:${encodedPassword}@cluster0.i4azy4a.mongodb.net/rooms`

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection

connection.on('error',()=> {console.log('MongoDB connection failed')})

connection.on('connected',()=> {console.log('MongoDB connection successful')})

export default mongoose


