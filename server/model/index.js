var db = require("../database");

module.exports = {
  songs: {
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
    // createSong: (songData, callback) => {
    //   const {
    //     musicTitle,
    //     artistName,
    //     albumCover,
    //     musicUrl,
    //     playlistName
    //   } = songData;
    // }
  }
};
