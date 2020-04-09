const MongoClient = require("mongodb").MongoClient;
// const mongoose = require("mongoose");

// const server = "localhost";
// const database = "sdc-mongo";

const getPlaylist = (playlistId, callback) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect("mongodb://localhost:27017/sdc-mongo", (err, db) => {
      if (err) {
        console.error("error no connection");
        reject(err);
      }

      let query = { id: Number(playlistId) };

      const collection = db.collection("playlists");
      collection.find(query).toArray((err, item) => {
        if (err) {
          console.error("error at mongoConnect", err);
        }
        resolve(item);
      });
    });
  });
};

module.exports = { getPlaylist };

// mongoose.connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true });

// const dbConnect = mongoose.connection;

// dbConnect.on("error", console.error.bind(console, "MongoDB connection error"));

// const playlistSchema = new mongoose.Schema({
//   playlist_name: String,
//   allSongsWithInfos: [
//     {
//       song_title: String,
//       song_url: String,
//       artist_name: String,
//       cover_art: String,
//     },
//   ],
// });

// const Playlist = mongoose.model("playlists", playlistSchema);
