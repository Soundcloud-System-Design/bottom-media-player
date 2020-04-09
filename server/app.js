require("newrelic");
const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");
const db = require("./database/postgres/dbconnect.js");
const path = require("path");
const { SongHandler, PlaylistHandler } = require("./controller/index");
const model = require("./model/mySQLindex.js");

app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: true }));

// =================== GET REQUESTS

app.get("/getPlaylist/:playlist_Id", async (req, res) => {
  await model.playlist.getPlaylist(req.params.playlist_Id, (data) => {
    res.send(data);
  });
});

app.get("/getSong/:song_id", SongHandler.getSongById);

app.get("/getSongQuery", SongHandler.getSongsByName);

app.get("/getArtistSongs", SongHandler.getSongsByArtist);

// ==================== POST REQUESTS

app.post("/addSong", SongHandler.addSong);

app.post("/addPlaylist", PlaylistHandler.addNewPlaylist);

app.post("/addSongToPlaylist", SongHandler.addSongToPlaylist);

// ===================== PUT/UPDATE REQUESTS

app.put("/changePlaylistName", PlaylistHandler.updatePlaylistName);

app.put("/changeSongInfo/:songId", SongHandler.updateSongInfo);

// ===================== DELETE REQUESTS

app.delete("/deleteASong", SongHandler.deleteASong);

app.delete("/deleteSongFromPlaylist", PlaylistHandler.deleteSongFromPlaylist);

app.listen(port, function () {
  console.log(`listening on port http://localhost:${port}`);
});
