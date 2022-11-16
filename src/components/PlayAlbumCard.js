import { Card, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const PlayAlbumCard = ({ id, newClick }) => {
  const [album, setAlbum] = useState({ userId: 0, id: 0, title: "", body: "" });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setAlbum(json);
      });
  }, [id]);
  return (
    <Card
      sx={{
        height: "30rem",
        width: "20rem",
        padding: "2rem 1rem 1rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
        background:
          "linear-gradient(90deg, rgba(112,112,112,1) 0%, rgba(185,185,185,1) 50%, rgba(112,112,112,1) 100%)",
      }}
    >
      <div style={{ display: "flex" }}>
        <Paper
          elevation={5}
          sx={{
            height: "12.5rem",
            width: "12.5rem",
            padding: "0.5rem",
            borderRadius: "50%",
            background: "#eeeeee",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton onClick={newClick}>
            <MusicNoteIcon
              sx={{
                fontSize: "5rem",
                color: "#dacd05",
              }}
            />
          </IconButton>
        </Paper>
        <div style={{ margin: "10.5rem -1rem 0rem 0rem" }}>
          <PersonOutlineIcon
            sx={{
              margin: "0 0 -0.7rem -0.31rem",
              fontSize: "1.76rem",
              color: "#eeeeee",
            }}
          />
          <div
            style={{
              height: "0.888rem",
              width: "0.888rem",
              border: "2px solid #eeeeee",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{ fontSize: "0.69rem", fontWeight: "550", color: "#eeeeee" }}
            >
              {album.userId}
            </Typography>
          </div>
        </div>
      </div>
      {/*eslint-disable-next-line */}
      <marquee style={{ margin: "0rem 1.5rem" }}>
        <Typography
          sx={{
            marginTop: "1rem",
            fontSize: "1.2rem",
            fontWeight: "550",
            color: "black",
            textShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
          }}
        >
          {album.title}
        </Typography>
      </marquee>
      <Typography
        sx={{
          margin: "0rem 2.5rem",
          fontSize: "0.9rem",
          fontWeight: "400",
          textAlign: "justify",
          marginTop: "0.5rem",
          color: "white",
          textShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
        }}
      >
        {album.body}
      </Typography>
    </Card>
  );
};

export default PlayAlbumCard;
