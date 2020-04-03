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
    },
    deleteSong: (songInfo, callback) => {
      console.log(songInfo);
      const { id } = songInfo;
      const queryString = `DELETE FROM songList WHERE id=${id}`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    getSongs: (songName, callback) => {
      const queryString = `SELECT * FROM songList WHERE music_title LIKE '%${songName}%'`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    getSongByArtist: (artistQuery, callback) => {
      const queryString = `SELECT DISTINCT artist_name FROM songList WHERE artist_name LIKE '%${artistQuery}%' LIMIT 10`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    changeSongInfo: (songInfo, songId, callback) => {
      const { musicTitle, artistName, albumCover, musicUrl } = songInfo;
      const queryString = `UPDATE songList SET music_title='${musicTitle}', artist_name='${artistName}', album_cover='${albumCover}', music_url='${musicUrl}' WHERE id=${songId}`;
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
    },
    changePlaylistName: (playlistInfo, callback) => {
      const { playlistId, playlistName } = playlistInfo;
      const queryString = `UPDATE playlists SET playlist_title = "${playlistName}" WHERE id = ${playlistId}`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        callback(results);
      });
    },
    deleteASong: (songInfo, callback) => {
      const { songId, playlistId } = songInfo;
      const queryString = `DELETE FROM playlist_songs WHERE song_id=${songId} AND playlist_id=${playlistId}`;
      return db.query(queryString, (err, results) => {
        if (err) {
          throw err;
        }
        console.log(results);
        callback(results);
      });
    }
  }
};
