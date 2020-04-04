const pool = require("./dbconnect.js");

pool.query(
  "COPY songs (music_title, music_url, cover_art) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedSongs.csv' DELIMITER ',' CSV",
  (err, result) => {
    if (err) {
      throw err;
    }
    console.log("copied and readdyyyy");
  }
);

pool.query(
  "COPY playlists (playlist_title) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedPlaylists.csv' DELIMITER ',' CSV",
  (err, result) => {
    if (err) {
      throw err;
    }
    console.log("copied playlists hoe");
  }
);
