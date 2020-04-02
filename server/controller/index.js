var model = require("../model/index.js");

const SongHandler = {
  addSong: (req, res, next) => {
    console.log(req.body);
    model.songs.createSong(req.body, data => {
      res.send(data);
    });
  },
  addSongToPlaylist: (req, res, next) => {
    model.songs.addASong(req.body, data => {
      res.send(data);
    });
  }
};

const PlaylistHandler = {
  getPlaylist: (req, res, next) => {
    model.playlist.getPlaylist(req.params.playlist_Id, data => {
      res.send(data);
    });
  },
  addNewPlaylist: (req, res, next) => {
    model.playlist.createPlaylist(req.body, data => {
      res.send(data);
    });
  }
};

module.exports = { SongHandler, PlaylistHandler };
