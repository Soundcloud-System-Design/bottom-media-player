var model = require("../model/index.js");

const SongHandler = {
  getSong: (req, res, next) => {
    model.songs.getPlaylist(req.params.playlist_Id, data => {
      res.send(data);
    });
  },
  addSong: (req, res, next) => {
    console.log(req.body);
    model.songs.addSong();
  }
};

module.exports = SongHandler;
