const pool = require("./dbconnect.js");

pool.query(
  "CREATE TABLE artists (id serial primary key, artist_name varchar(250))",
  (err, res) => {
    if (err) {
      throw err;
    }
    pool.query(
      "CREATE TABLE songs (id serial primary key, music_title varchar(250), music_url varchar(250), cover_art varchar(250), primary_artist varchar(250))",
      (err, res) => {
        if (err) {
          throw err;
        }
        pool.query(
          "CREATE TABLE playlists (id serial primary key, playlist_title varchar(250))",
          (err, res) => {
            if (err) {
              throw err;
            }
            pool.query(
              "CREATE TABLE songs_artists (id serial primary key, song_id integer references songs(id), artist_id integer references artists(id))",
              (err, res) => {
                if (err) {
                  throw err;
                }
                pool.query(
                  "CREATE TABLE playlist_songs (id serial primary key, playlist_id integer references playlists(id), song_id integer references songs(id))",
                  (err, res) => {
                    if (err) {
                      throw err;
                    }
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);
