import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux"; // Import the necessary hooks
import {
  setEditableTourPath,
  setShowProjectSelectionScene,
  setTourConfiguration,
} from "../Slices/displaySlice"; // Import the action

const LoadProjectButton = () => {
  const dispatch = useDispatch();
  const editableTourPath = useSelector(
    (state) => state.display.editableTourPath
  );

  // Listen for a response from the main process
  const handleResponse = (event, response) => {
    if (response.success) {
      dispatch(setEditableTourPath(response.filePath)); // Update state in Redux store
      dispatch(setTourConfiguration(response.tourConfiguration));
    } else {
      alert(`Error loading JSON: ${response.error}`);
    }

    // Remove the listener after receiving the response
    window.ipcRenderer.off("loadJSONResponse", handleResponse);
  };

  // Effect to track changes in editableTourPath and log it to the console
  useEffect(() => {
    if (editableTourPath !== null) {
      console.log("Editable Tour Path updated:", editableTourPath);
      dispatch(setShowProjectSelectionScene(false));
    }
  }, [editableTourPath]); // This will run when editableTourPath is updated

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/json") {
      // Send the 'loadJSON' request to the main process
      window.ipcRenderer.send("loadJSON", file.path, file.name);

      // Set up the listener for the response
      window.ipcRenderer.on("loadJSONResponse", handleResponse);
    } else {
      alert("Please select a valid JSON file.");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ cursor: "pointer" }}
    >
      <label htmlFor="json-file-input" style={{ cursor: "pointer" }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <FiUpload size={40} />
          <Typography variant="body1">Load</Typography>
        </Box>
      </label>

      <input
        type="file"
        accept=".json"
        onChange={handleFileInputChange}
        id="json-file-input"
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default LoadProjectButton;
