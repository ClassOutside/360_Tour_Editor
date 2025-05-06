import React from "react";
import { Paper } from "@mui/material";
import { Grid2 } from "@mui/material"; // Use Grid2 instead of Grid
import NewTourButton from "./NewTourButton";
import NewGalleryButton from "./NewGalleryButton";
import LoadProjectButton from "./LoadProjectButton";

const NewProjectCard = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        width: 400,
        padding: 3,
        borderRadius: 5,
        backgroundColor: "#f5f5f5",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid2 container spacing={4} justifyContent="center">
        <Grid2>
          <NewTourButton />
        </Grid2>
        <Grid2>
          <NewGalleryButton />
        </Grid2>
        <Grid2>
          <LoadProjectButton />
        </Grid2>
      </Grid2>
    </Paper>
  );
};

export default NewProjectCard;
