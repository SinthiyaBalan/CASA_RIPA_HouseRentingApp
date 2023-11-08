import express from "express";
import roomModel from "../models/room.js";

const router = express.Router();

router.get("/getallrooms", async (req, res) => {
  try {
    const rooms = await roomModel.find({});
    res.status(200).json(rooms);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});
router.post("/getroombyid", async (req, res) => {
  // const roomId = req.params.roomId;
  const roomId = req.body.roomid;
  try {
    const room = await roomModel.findById(roomId);
    res.status(200).json(room);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
});

export default router;
