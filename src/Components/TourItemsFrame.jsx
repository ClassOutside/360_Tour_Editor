import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import DestinationCard from "./DestinationCard";
import HotspotCard from "./HotspotCard";

const TourItemsFrame = () => {
  const tourConfiguration = useSelector(
    (state) => state.display.tourConfiguration
  );

  useEffect(() => {}, [tourConfiguration]);

  return (
    <Box
      sx={{
        backgroundColor: "blue",
        flex: "1",
        height: "100%",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px",
        overflowY: "auto",
      }}
    >
      {tourConfiguration?.destinations?.map((destination, index) => {
        // Extract filename without extension
        const imageName = destination.imageLocation
          ? destination.imageLocation
              .split("/")
              .pop()
              .replace(/\.[^/.]+$/, "")
          : "Unknown";

        return (
          <DestinationCard
            key={index}
            destination={destination}
            title={imageName} // Pass extracted name as title
            date={destination.date}
            hotspots={destination.HOTSPOTS}
          />
        );
      })}
    </Box>
  );
};

export default TourItemsFrame;
