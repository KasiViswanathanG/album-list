import { useEffect, useState } from "react";
import TitleCard from "./components/TitleCard";
import { Card } from "@mui/material";
import PlayAlbumCard from "./components/PlayAlbumCard";
import NewAlbumCard from "./components/NewAlbumCard";
import UpdateAlbumCard from "./components/UpdateAlbumCard";

function App() {
  var album = { userId: 0, id: 0, title: "", body: "" };
  const [albums, setAlbums] = useState([album]);
  const [selectedAlbum, setSelectedAlbum] = useState(1);
  const [playEditNew, setPlayEditNew] = useState("play");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setAlbums(json);
      });
  }, [selectedAlbum, playEditNew]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "2rem 0rem 2rem 0rem",
      }}
    >
      <Card
        sx={{
          height: "39rem",
          overflow: "auto",
          background:
            "linear-gradient(90deg, rgba(255,236,138,1) 0%, rgba(255,253,188,1) 50%, rgba(255,255,255,0.25253851540616246) 100%);",
          "&::-webkit-scrollbar": { display: "none" },
          boxShadow: "0px 1px 2px black",
        }}
      >
        {albums.map((album) => {
          return (
            <div key={album.id}>
              {
                <TitleCard
                  title={album.title}
                  onClick={() => {
                    setSelectedAlbum(album.id);
                    setPlayEditNew("play");
                  }}
                  editClick={() => {
                    setSelectedAlbum(album.id);
                    setPlayEditNew("edit");
                  }}
                  deleteClick={() => {
                    setSelectedAlbum(album.id);
                    fetch(
                      `https://jsonplaceholder.typicode.com/posts/${selectedAlbum}`,
                      {
                        method: "DELETE",
                      }
                    ).then(console.log("Deleted -", album.title));
                  }}
                />
              }
            </div>
          );
        })}
      </Card>
      <div
        style={{
          marginRight: "5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        {playEditNew === "play" && (
          <PlayAlbumCard
            id={selectedAlbum}
            newClick={() => {
              setPlayEditNew("new");
            }}
          />
        )}
        {playEditNew === "new" && <NewAlbumCard />}
        {playEditNew === "edit" && <UpdateAlbumCard id={selectedAlbum} />}
      </div>
    </div>
  );
}

export default App;
