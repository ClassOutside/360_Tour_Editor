import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { MdDelete, MdExpandMore, MdChevronRight } from "react-icons/md";
import { MdImage, MdInfo, MdLocationOn } from "react-icons/md";

const HotspotCard = ({
  type = "info",
  title = "GSO1139",
  content = "Default Content",
}) => {
  const [expanded, setExpanded] = useState(false);

  const getIcon = () => {
    if (type === "info") return <MdInfo size="8vh" />;
    if (type === "tour") return <MdLocationOn size="8vh" />;
    return <MdImage size="8vh" />;
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "grey",
        borderRadius: "8px",
        padding: "0.5vw",
        width: "100%",
        minHeight: "7vh", // Ensuring it has enough space vertically like the DestinationCard
        height: "auto", // Allow the card to grow based on content
      }}
    >
      <IconButton sx={{ padding: 0 }}>
        <MdDelete size="3vh" />
      </IconButton>

      {/* Dynamic Icon based on type */}
      <Box
        sx={{
          marginRight: "1vw",
          marginLeft: "1vw",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
        }}
      >
        {getIcon()}
      </Box>

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
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            userSelect: "none",
            fontSize: "2vh",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default HotspotCard;
