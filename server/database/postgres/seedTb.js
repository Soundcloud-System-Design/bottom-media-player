const pool = require("./dbconnect.js");

// pool.query(
//   "COPY songs (music_title, music_url, cover_art) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedSongs.csv' DELIMITER ',' CSV HEADER",
//   (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log("copied songs readdyyyy");
//     console.log(result);
//     pool.query(
//       "COPY playlists (playlist_title) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedPlaylists.csv' DELIMITER ',' CSV HEADER",
//       (err, result) => {
//         if (err) {
//           throw err;
//         }
//         console.log("copied playlists hoe");
//         pool.query(
//           "COPY artists (artist_name) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedArtists.csv' DELIMITER ',' CSV HEADER",
//           (err, result) => {
//             if (err) {
//               throw err;
//             }
//             console.log("copied artists hoe");
//             pool.end();
//           }
//         );
//       }
//     );
//   }
// );

pool
  .query(
    "COPY songs (music_title, music_url, cover_art) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedSongs.csv' DELIMITER ',' CSV HEADER"
  )
  .then(() => {
    console.log("playlists now");
    return pool.query(
      "COPY playlists (playlist_title) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedPlaylists.csv' DELIMITER ',' CSV HEADER"
    );
  })
  .then(() => {
    console.log("artists now");
    return pool.query(
      "COPY artists (artist_name) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedArtists.csv' DELIMITER ',' CSV HEADER"
    );
  })
  // .then(() => {
  //   return pool.end();
  // })
  // .catch((err) => {
  //   console.log("error seedtb.js");
  //   pool.end();
  // });
  .then(() => {
    console.log("songs and artists now");
    return pool.query(
      "COPY songs_artists (song_id, artist_id) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedSongsAndArtists.csv' DELIMITER ',' CSV HEADER"
    );
  })
  .then(() => {
    console.log("playlists and songs now");
    return pool.query(
      "COPY playlist_songs (playlist_id, song_id) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generetedSongsAndPlaylists.csv' DELIMITER ',' CSV HEADER"
    );
  })
  .then((result) => {
    console.log(result);
    pool.end();
    return;
  })
  .catch((err) => {
    console.log(err, "error here");
  });
