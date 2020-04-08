const mongoose = require("mongoose");

const server = "localhost";
const database = "sdc-mongo";

const mongo = `mongodb://${server}/${database}`;
mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });

const dbConnect = mongoose.connection;

dbConnect.on("error", console.error.bind(console, "MongoDB connection error"));

const playlistSchema = new mongoose.Schema({
  playlist_name: String,
  allSongsWithInfos: [
    {
      song_title: String,
      song_url: String,
      artist_name: String,
      cover_art: String,
    },
  ],
});

const Playlist = mongoose.model("Playlist", playlistSchema);

module.exports = Playlist;
