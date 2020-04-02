CREATE DATABASE IF NOT EXISTS music;

USE music;

CREATE TABLE IF NOT EXISTS songList (
  id INTEGER AUTO_INCREMENT,
  music_title VARCHAR(100) NOT NULL,
  artist_name VARCHAR(100) NOT NULL,
  album_cover VARCHAR(250) NOT NULL,
  music_url VARCHAR(300) NOT NULL,
  playlist_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS playlists (
  id INTEGER AUTO_INCREMENT,
  playlist_title VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
)