import React from "react";
import { Card, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

//component to title card
const TitleCard = ({ title, onClick, editClick, deleteClick }) => {
  const [bg, setBg] = useState(
    "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(137,235,255,1) 72%, rgba(46,220,255,1) 100%)"
  );
  return (
    <Card
      sx={{
        width: "30rem",
        height: "3rem",
        textAlign: "justify",
        margin: "0.5rem",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: bg,
      }}
      onMouseEnter={() => setBg("white")}
      onMouseLeave={() =>
        setBg(
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(137,235,255,1) 72%, rgba(46,220,255,1) 100%)"
        )
      }
    >
      <div style={{ width: "30rem" }}>
        <Typography
          onClick={onClick}
          sx={{
            padding: "2.5rem",
            fontSize: "0.81rem",
            fontWeight: "550",
            color: "black",
            textShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
          }}
        >
          {title}
        </Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <IconButton onClick={editClick}>
          <EditIcon htmlColor="grey" />
        </IconButton>
        <IconButton onClick={deleteClick}>
          <DeleteIcon htmlColor="#EB2900" />
        </IconButton>
      </div>
    </Card>
  );
};

export default TitleCard;
