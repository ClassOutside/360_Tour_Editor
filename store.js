import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./src/Slices/displaySlice";

// Configure the store with the display slice reducer
const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;
