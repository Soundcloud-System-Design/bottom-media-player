const express = require("express");
const app = express();
const port = 4000;
var cors = require("cors");
const db = require("./database/index.js");
const path = require("path");
const { SongHandler, PlaylistHandler } = require("./controller/index");

// console.log(__dirname);
// any middlewares?
// app.use(require("body-parser").json()); // wow.
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.urlencoded({ extended: true }));

// seting up s3 credentials

app.get("/getPlaylist/:playlist_Id", PlaylistHandler.getPlaylist);

app.post("/addSong", SongHandler.addSong);

app.post("/addPlaylist", PlaylistHandler.addNewPlaylist);

app.post("/addSongToPlaylist", SongHandler.addSongToPlaylist);

app.listen(port, function() {
  console.log(`listening on port http://localhost:${port}`);
});
