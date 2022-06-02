import nc from "next-connect";
import { getAllRoom, createRoom } from "controllers/roomController";
import { dbConnect } from "config/dbConnect";

const handler = nc();

dbConnect();

handler.get(getAllRoom);

handler.post(createRoom);

export default handler;
