var model = require("../model/mySQLindex.js");

const SongHandler = {
  addSong: (req, res, next) => {
    model.songs.createSong(req.body, data => {
      res.send(data);
    });
  },
  addSongToPlaylist: (req, res, next) => {
    model.songs.addASong(req.body, data => {
      res.send(data);
    });
  },
  deleteASong: (req, res, next) => {
    console.log(req.body);
    model.songs.deleteSong(req.body, data => {
      res.send(data);
    });
  },
  getSongByName: (req, res, next) => {
    model.songs.getSongs(req.body.songQuery, data => {
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
  },
  updatePlaylistName: (req, res, next) => {
    model.playlist.changePlaylistName(req.body, data => {
      res.send(data);
    });
  },
  deleteSongFromPlaylist: (req, res, next) => {
    model.playlist.deleteASong(req.body, data => {
      res.send(data);
    });
  }
};

module.exports = { SongHandler, PlaylistHandler };
