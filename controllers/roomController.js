import Room from "models/room";

const getAllRoom = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json({
      success: true,
      count: rooms.length,
      rooms,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if(!room){
      throw new Error('Room not found')
    }
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({
      success: true,
      room,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const updateRoom = (req,res) => {
  try {
    
  } catch (error) {
    
  }
}

export { getAllRoom, createRoom, getRoom };
