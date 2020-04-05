const pool = require("./dbconnect.js");

// pool.query(
//   "COPY songs_artists (song_id, artist_id) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedSongsAndArtists.csv' DELIMITER ',' CSV HEADER",
//   (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log("copied songs and artists hoe");
//     pool.query(
//       "COPY playlist_songs (playlist_id, song_id) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generetedSongsAndPlaylists.csv' DELIMITER ',' CSV HEADER",
//       (err, result) => {
//         if (err) {
//           throw err;
//         }
//         console.log("copied songs and playlists hoe");
//       }
//     );
//   }
// );
