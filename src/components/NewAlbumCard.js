import React from "react";
import { Card, TextField, Button, TextareaAutosize } from "@mui/material";
import { useState } from "react";

//component to create new album
const NewAlbumCard = () => {
  // useState to get values entered
  const [title, setTitle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [userId, setUserId] = useState(1);
  // post the new album
  const createAlbum = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: lyrics,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        alert(`
      userId - ${userId}
      title - ${title}
      lyrics - ${lyrics}`)
      );
  };
  return (
    <Card
      sx={{
        height: "30rem",
        width: "20rem",
        padding: "2rem 1rem 1rem 1rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        boxShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
        background:
          "linear-gradient(90deg, rgba(112,112,112,1) 0%, rgba(185,185,185,1) 50%, rgba(112,112,112,1) 100%)",
      }}
    >
      <TextField
        label="UserId"
        variant="outlined"
        type="number"
        sx={{
          width: "15rem",
          marginBottom: "1rem",
          input: {
            color: "white",
            fontSize: "1rem",
          },
        }}
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <TextField
        label="Title"
        variant="outlined"
        sx={{
          width: "15rem",
          marginBottom: "1rem",
          input: {
            color: "black",
            textShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
            fontSize: "1.1rem",
          },
        }}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <TextareaAutosize
        minRows={3}
        placeholder="Enter the Lyrics"
        style={{
          width: "13rem",
          padding: "1rem",
          background: "none",
          borderRadius: "0.5rem",
          border: "1px solid #707070",
          color: "white",
          textShadow: "0 0 5px #dacd05, 0 0 3px #dacd05",
          fontSize: "1.1rem",
        }}
        value={lyrics}
        onChange={(e) => {
          setLyrics(e.target.value);
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          createAlbum();
        }}
        style={{ position: "absolute", bottom: "0", margin: "2rem" }}
      >
        Create Album
      </Button>
    </Card>
  );
};

export default NewAlbumCard;
