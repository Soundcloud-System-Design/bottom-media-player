require("newrelic");
const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");
const db = require("./database/postgres/dbconnect.js");
const path = require("path");
const { SongHandler, PlaylistHandler } = require("./controller/index");
const model = require("./database/mongodb/mongoConnection.js");

// console.log(__dirname);
// any middlewares?
// app.use(require("body-parser").json()); // wow.
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: true }));

// seting up s3 credentials

// =================== GET REQUESTS

app.get("/getPlaylist/:playlist_Id", async (req, res) => {
  let playlistId = req.params.playlist_Id;
  // await model.getPlaylist(playlistId, (result) => {
  //   res.send(result);
  // });
  await model.getPlaylist(playlistId).then((result) => {
    res.send(result);
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
