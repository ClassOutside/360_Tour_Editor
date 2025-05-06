import React from "react";
import { Box, Typography } from "@mui/material";
import { FiMapPin } from "react-icons/fi"; // Using react-icons

const NewTourButton = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ cursor: "pointer" }}
    >
      <FiMapPin size={40} />
      <Typography variant="body1">Tour</Typography>
    </Box>
  );
};

export default NewTourButton;
