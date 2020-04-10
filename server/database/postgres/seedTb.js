const pool = require("./dbconnect.js");

pool
  .query(
    "COPY artists (artist_name) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedArtists.csv' DELIMITER ',' CSV HEADER"
  )
  .then(() => {
    console.log("playlists now");
    return pool.query(
      "COPY playlists (playlist_title) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedPlaylists.csv' DELIMITER ',' CSV HEADER"
    );
  })
  .then(() => {
    console.log("songs now");
    return pool.query(
      "COPY songs (music_title, music_url, cover_art, primary_artist) FROM '/Users/andrea/Desktop/bottom-media-player/server/database/postgres/generatedSongs.csv' DELIMITER ',' CSV HEADER"
    );
  })
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
  .then(() => {
    console.log("indexing");
    return pool.query("CREATE INDEX ON playlist_songs (playlist_id);");
  })
  .then((result) => {
    console.log(result);
    pool.end();
    return;
  })
  .catch((err) => {
    console.log(err, "error here");
  });
