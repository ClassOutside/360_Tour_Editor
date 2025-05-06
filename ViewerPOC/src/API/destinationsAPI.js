// src/api/destinationsAPI.js

import store from "../store"; // Import the default export from store.js
import { setLoadedDestination } from "../Slices/destinationSlice"; // Import the setter action

// Function to get the current value of loadedDestination from the store
export const getLoadedDestination = () => {
  const state = store.getState(); // Get the current state of the store
  return state.destinations.loadedDestination; // Access the loadedDestination in the destinations slice
};

// Function to set the loadedDestination in the store
export const setLoadedDestinationAPI = (destination) => {
  store.dispatch(setLoadedDestination(destination)); // Dispatch the action to set the loadedDestination
};
