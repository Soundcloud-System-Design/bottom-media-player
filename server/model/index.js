var db = require("../database");

module.exports = {
  songs: {
    createSong: (songData, callback) => {
      const { musicTitle, artistName, albumCover, musicUrl } = songData;
      const queryString = `INSERT INTO songList (music_title, artist_name, album_cover, music_url) VALUES ('${musicTitle}', '${artistName}', '${albumCover}', '${musicUrl}')`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    addASong: (songPlaylistData, callback) => {
      const { songId, playlistId } = songPlaylistData;
      const queryString = `INSERT INTO playlist_songs (song_id, playlist_id) VALUES ('${songId}', '${playlistId}')`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    }
  },
  playlist: {
    createPlaylist: (playlistData, callback) => {
      const { playlistTitle } = playlistData;
      const queryString = `INSERT INTO playlists (playlist_title) VALUES ('${playlistTitle}')`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    getPlaylist: (id, callback) => {
      var queryString = `SELECT * FROM songList LEFT JOIN playlist_songs ON songList.id = playlist_songs.song_id WHERE playlist_songs.playlist_id = ${id}`;
      // randomize the sqlChart.
      return db.query(queryString, function(err, results) {
        if (err) {
          throw err;
        }
        callback(results);
      });
    }
  }
};
