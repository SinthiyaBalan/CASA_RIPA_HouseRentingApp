import express from 'express';
import roomModel from '../models/room.js';

const router = express.Router();

router.get('/getallrooms', async(req,res)=>{
    try {
        const rooms = await roomModel.find({})
        res.status(200).json(rooms);
    } catch (error) {
        return res.status(500).json({message : error})
    }   
})
router.post('/getroombyid', async(req,res)=>{
   
    try {
        const roomid = req.body.roomid
        const room = await roomModel.findOne({ _id: roomid });
        res.status(200).json(room);
    } catch (error) {
        return res.status(500).json({message : error})
    }   
})

export default router;
