import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import roomsReducer from "./Reducers/roomsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    rooms: roomsReducer,
  },
});
