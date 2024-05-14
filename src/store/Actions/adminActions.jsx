import {
  saveAdmin,
  removeAdmin,
  signuperror,
  createroom,
  signinerror,
} from "../Reducers/adminSlice";
import axios from "../../utils/axios";

export const asynccurrentAdmin = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/admin/user");
    dispatch(saveAdmin(data.loggedinuser));
  } catch (error) {
    //(error.response.data);
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/admin/signup", user);
    dispatch(asynccurrentAdmin());
  } catch (error) {
    dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/admin/signin", user);
    dispatch(asynccurrentAdmin());
  } catch (error) {
    dispatch(signinerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};


export const asyncremoveAdmin = () => async (dispatch, getState) => {
  try {
    await axios.get("/admin/signout");
    dispatch(removeAdmin());
  } catch (error) {
    //(error.response.data);
  }
};

export const createRoom = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/admin/createroom`, formData);
    dispatch(createroom(response.data.newinternship));
  } catch (error) {
    //(error);
  }
};



