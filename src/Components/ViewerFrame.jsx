// src/Components/ViewerFrame.js
import React from "react";
import { Box } from "@mui/material";
import Viewer360Frame from "../../ViewerPOC/src/Components/Viewer360Frame";
import configData from "../../defaults.json"; // Importing defaults.json

const ViewerFrame = () => {
  return (
    <Box
      sx={{
        flex: "3", // Takes up 3 parts of the available space
        height: "100%", // Full height of the container
        borderRadius: "16px", // 16px border radius
        display: "flex", // Center content inside the box
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        overflow: "hidden", // Ensure content doesn't overflow the border radius
      }}
    >
      <Viewer360Frame config={configData} />
    </Box>
  );
};

export default ViewerFrame;
