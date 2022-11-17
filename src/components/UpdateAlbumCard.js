import React from "react";
import { Card, TextField, Button, TextareaAutosize } from "@mui/material";
import { useState, useEffect } from "react";

//component to update album
function UpdateAlbumCard({ id }) {
  //fetch particular album
  const [album, setAlbum] = useState({ userId: 0, id: 0, title: "", body: "" });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setAlbum(json);
      });
  }, [id]);
  //update the album
  const updateAlbum = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: album.title,
        body: album.lyrics,
        userId: album.userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) =>
        alert(`
      userId - ${album.userId}
      title - ${album.title}
      lyrics - ${album.body}`)
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
        value={album.userId}
        onChange={(e) => {
          setAlbum(() => {
            return {
              userId: e.target.value,
              id: album.id,
              title: album.title,
              body: album.body,
            };
          });
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
        value={album.title}
        onChange={(e) => {
          setAlbum(() => {
            return {
              userId: album.userId,
              id: album.id,
              title: e.target.value,
              body: album.body,
            };
          });
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
        value={album.body}
        onChange={(e) => {
          setAlbum(() => {
            return {
              userId: album.userId,
              id: album.id,
              title: album.title,
              body: e.target.value,
            };
          });
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          updateAlbum();
        }}
        style={{ position: "absolute", bottom: "0", margin: "2rem" }}
      >
        Update Album
      </Button>
    </Card>
  );
}

export default UpdateAlbumCard;
