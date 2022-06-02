import Room from "models/room";
import ErrorHandler from "utils/errorHandler";
import catchAsyncError from "middlewares/catchAsyncError";

const getAllRoom = catchAsyncError(async (req, res) => {
  const rooms = await Room.find();
  res.status(200).json({ success: true, count: rooms.length, rooms });
});

const getRoom = catchAsyncError(async (req, res, next) => {
  const room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }
  res.status(200).json({ success: true, room });
});

const createRoom = catchAsyncError(async (req, res) => {
  const room = await Room.create(req.body);
  res.status(200).json({ success: true, room });
});

const updateRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }
  room = await Room.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ success: true, room });
});

const deleteRoom = catchAsyncError(async (req, res, next) => {
  let room = await Room.findById(req.query.id);
  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }
  await room.remove();
  res.status(200).json({ success: true, message: "Room deleted" });
});
export { getAllRoom, createRoom, getRoom, updateRoom, deleteRoom };
