import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import {
  MdDelete,
  MdExpandMore,
  MdChevronRight,
  MdImage,
} from "react-icons/md";
import HotspotCard from "./HotspotCard"; // Import HotspotCard component
import {
  getLoadedDestination,
  setLoadedDestinationAPI,
} from "../../ViewerPOC/src/API/destinationsAPI";

const DestinationCard = ({
  destination = {},
  title = "GSO1139",
  date = "Jan 1st 2001",
  hotspots = [],
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setLoadedDestinationAPI(destination);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end", // Align the whole card to the right
      }}
    >
      {/* Destination Card */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "grey",
          borderRadius: "8px",
          padding: "0.5vw",
          width: "100%", // Keeps it aligned right, but still full-width inside parent
          minHeight: "7vh", // Slightly smaller, but not too tiny
          height: "auto",
        }}
        onClick={handleCardClick} // Handle the click event on the entire card
      >
        {/* Icons Stack (Trash & Chevron) */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            minHeight: "7vh",
          }}
        >
          <IconButton sx={{ padding: 0 }}>
            <MdDelete size="3vh" />
          </IconButton>

          <IconButton
            sx={{ padding: 0, alignSelf: "flex-end" }}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <MdExpandMore size="3vh" />
            ) : (
              <MdChevronRight size="3vh" />
            )}
          </IconButton>
        </Box>

        {/* Image Placeholder */}
        <MdImage
          size="7vh" // Slightly smaller image
          style={{
            marginRight: "1vw",
            marginLeft: "1vw",
            flexShrink: 0,
          }}
        />

        {/* Title and Date */}
        <Box
          sx={{
            flexGrow: 2,
            maxWidth: "calc(100% - 10vw)",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              userSelect: "none",
              fontSize: "2vh",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "left",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              userSelect: "none",
              fontSize: "1.8vh", // Slightly smaller text
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              textAlign: "left",
            }}
          >
            {date}
          </Typography>
        </Box>
      </Box>

      {/* Dropdown Content - HotspotCards */}
      {expanded && hotspots.length > 0 && (
        <Box
          sx={{
            marginTop: "0.5vw",
            display: "flex",
            flexDirection: "column",
            gap: "0.4vw",
            alignItems: "flex-end", // Ensures dropdown is also right-aligned
            width: "85%", // Slightly smaller width for better alignment
          }}
        >
          {hotspots.map((hotspot) => (
            <HotspotCard
              key={hotspot.id}
              type={hotspot.type}
              title={
                hotspot.type === "info" ? hotspot.detailCard.title : undefined
              }
              content={
                hotspot.type === "info" ? hotspot.detailCard.content : undefined
              }
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default DestinationCard;
