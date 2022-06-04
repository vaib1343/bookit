import { ALL_ROOM } from "../constants/roomConstant";
import axios from "axios";
import absoluteURL from "next-absolute-url";

export const getAllRoom = (req) => {
  return async (dispatch, getState) => {
    dispatch({ type: ALL_ROOM.pending });
    try {
      const { origin } = absoluteURL(req);
      const response = await axios.get(`${origin}/api/rooms`);
      dispatch({ type: ALL_ROOM.success, payload: response.data });
    } catch (error) {
      dispatch({ type: ALL_ROOM.failed, payload: error.response.data.message });
    }
  };
};
