// src/Components/ProjectView.js
import React from "react";
import { Box } from "@mui/material"; // Import Box from Material UI
import ViewerFrame from "./ViewerFrame"; // Import ViewerFrame
import TourItemsFrame from "./TourItemsFrame"; // Import the new TourItemsFrame

const ProjectView = () => {
  return (
    <Box
      sx={{
        padding: "16px", // 16px padding around the content
        height: "100vh", // Take up full height of the viewport
        width: "100vw", // Take up full width of the viewport
        display: "flex", // Flex layout for the inner content
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
      }}
    >
      <Box
        sx={{
          display: "flex", // Flexbox layout for left-right
          gap: "16px", // Gap between the two boxes
          width: "100%", // Full width of the container
          height: "100%", // Full height of the container
        }}
      >
        {/* Red Box containing the Viewer360Frame */}
        <ViewerFrame />

        {/* Blue Box (now in a separate component) */}
        <TourItemsFrame />
      </Box>
    </Box>
  );
};

export default ProjectView;
