import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/userSlice";
import adminReducer from "./Reducers/adminSlice";
import roomsReducer from "./Reducers/roomsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer,
    rooms: roomsReducer,
  },
});
