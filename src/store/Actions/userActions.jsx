import {
  saveUser,
  removeUser,
  sendmail,
  signuperror,
  createroom,
  bookroom,
  signinerror,
} from "../Reducers/userSlice";
import axios from "../../utils/axios";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/user");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    //(error.response.data);
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signuperror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    dispatch(signinerror(error.response.data.message)); // Pass error to the reducer(error.response.data);
  }
};


export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/signout");
    dispatch(removeUser());
  } catch (error) {
    //(error.response.data);
  }
};

export const createRoom = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/createroom`, formData);
    dispatch(createroom(response.data.newinternship));
  } catch (error) {
    //(error);
  }
};

export const bookRoom = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/bookroom`, formData);
    dispatch(bookroom(response.data.newinternship));
  } catch (error) {
    //(error);
  }
};

