import express from 'express';
const router = express.Router();

import roomModel from '../models/room.js';


router.get('/getallrooms', async(req,res)=>{
    try {
        const rooms = await roomModel.find({})
         res.send(rooms)
    } catch (error) {
        return res.status(500).json({message : error})
    }
   
})

export default router;
