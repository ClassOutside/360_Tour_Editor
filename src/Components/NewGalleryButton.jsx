import React from "react";
import { Box, Typography } from "@mui/material";
import { FiImage } from "react-icons/fi"; // Using react-icons

const NewGalleryButton = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ cursor: "pointer" }}
    >
      <FiImage size={40} />
      <Typography variant="body1">Gallery</Typography>
    </Box>
  );
};

export default NewGalleryButton;
