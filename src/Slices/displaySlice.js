import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for display
const initialState = {
  editableTourPath: null,
  showProjectSelectionScene: true,
  tourConfiguration: {
    type: "tour",
    destinations: [
      {
        imageLocation:
          "D:/My Drawer/Creative Ideas/360 Tour Editor/Viewer/EditorPOC/Example_Tour//360Photos/pretoria_gardens.jpg",
        destinationID: 0,
        HOTSPOTS: [
          {
            position: [0, 0, -10],
            type: "info",
            id: 0,
            detailCard: {
              visible: false,
              title: "Destination 0",
              content: "Here is the detail information for destination 0",
            },
          },
          {
            position: [0, 5, -10],
            type: "tour",
            id: 1,
            destinationID: 1,
            detailCard: {
              visible: false,
              content: "Detail info for hotspot 2",
            },
          },
          {
            position: [-5, 3, -10],
            type: "tour",
            id: 3,
            destinationID: 2,
            detailCard: {
              visible: false,
              content: "Detail info for hotspot 2",
            },
          },
        ],
      },
      {
        imageLocation:
          "D:/My Drawer/Creative Ideas/360 Tour Editor/Viewer/EditorPOC/Example_Tour//360Photos/symmetrical_garden_02.jpg",
        destinationID: 1,
        HOTSPOTS: [
          {
            position: [2, 0, -10],
            type: "info",
            id: 0,
            detailCard: {
              visible: false,
              title: "Destination 1",
              content:
                "Here is the detail information for destination 1. Here is some more. I want it to be very big. Let's see if we can keep it going. One fish two fish red fish blue fish.",
            },
          },
          {
            position: [2, 5, -10],
            type: "tour",
            id: 1,
            destinationID: 0,
          },
        ],
      },
      {
        imageLocation:
          "D:/My Drawer/Creative Ideas/360 Tour Editor/Viewer/EditorPOC/Example_Tour//360Videos/360_vr_master_series___free_download___view_on_low_waterfall_with_nice_city-soundTest.mp4",
        destinationID: 2,
        HOTSPOTS: [
          {
            position: [2, 5, -10],
            type: "tour",
            id: 1,
            destinationID: 0,
          },
        ],
      },
    ],
    editInProgress: true,
    tourLoadedFromPath:
      "D:/My Drawer/Creative Ideas/360 Tour Editor/Viewer/EditorPOC/Example_Tour/",
  }, // Initialize as an empty object or with default values
};

// Create a slice for display
const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setEditableTourPath(state, action) {
      state.editableTourPath = action.payload;
    },
    setShowProjectSelectionScene(state, action) {
      state.showProjectSelectionScene = action.payload;
    },
    setTourConfiguration(state, action) {
      state.tourConfiguration = action.payload;
    },
  },
});

// Export the actions to update the state
export const {
  setEditableTourPath,
  setShowProjectSelectionScene,
  setTourConfiguration,
} = displaySlice.actions;

// Export the reducer to be used in the store
export default displaySlice.reducer;
