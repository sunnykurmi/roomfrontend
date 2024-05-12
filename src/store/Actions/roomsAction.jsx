import axios from "../../utils/axios";
import {
  roomsFound,
} from "../Reducers/roomsSlice";

export const allrooms = () => async (dispatch) => {
  try {
    const response = await axios.get("/");
    dispatch(roomsFound(response.data.allrooms));
  } catch (error) {
    //(error);
  }
};

