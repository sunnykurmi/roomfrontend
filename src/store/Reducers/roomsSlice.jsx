// roomsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  error: null,
};

const roomsSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    roomsFound(state, action) {
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const { roomsFound } = roomsSlice.actions;
export default roomsSlice.reducer;
