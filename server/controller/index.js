var model = require("../model/index.js");

const SongHandler = {
  getSong: (req, res, next) => {
    console.log(req.params);
    model.songs.getPlaylist(req.params.playlist_Id, data => {
      res.send(data);
    });
  }
};

module.exports = SongHandler;
