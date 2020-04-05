// const mysql = require("mysql");
// const fake = require("faker");

// const dbConnection = mysql.createConnection({
//   user: "root",
//   password: "password",
//   database: "music"
// });

// dbConnection.connect();

// const playlistTitles = [
//   "bops of our founding father",
//   "kpop only",
//   "tiktok songs",
//   "80s playlist",
//   "bangerz",
//   "disney",
//   "drunkie songs?",
//   "look out the window during car rides",
//   "sweet tunes",
//   "chill hop"
// ];

// playlistTitles.forEach(title => {
//   let query = `insert into playlists (playlist_title) values ('${title}')`;
//   dbConnection.query(query, (err, result) => {
//     if (err) {
//       throw err;
//     }
//   });
// });

// const songTitles = {
//   // album: "Queen II",
//   artist: "Queen",
//   albumSongs: [
//     {
//       songTitle: "Bohemian Rhapsody",
//       url: "https://my-music-lists.s3.amazonaws.com/01+-+Bohemian+Rhapsody.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Another One Bites The Dust",
//       url: "https://my-music-lists.s3.amazonaws.com/01+-+Bohemian+Rhapsody.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Killer Queen",
//       url: "https://my-music-lists.s3.amazonaws.com/03+-+Killer+Queen.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Fat Bottomed Girls",
//       url:
//         "https://my-music-lists.s3.amazonaws.com/04+-+Fat+Bottomed+Girls.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Bicycle Race",
//       url: "https://my-music-lists.s3.amazonaws.com/05+-+Bicycle+Race.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "You're My Best Friend",
//       url:
//         "https://my-music-lists.s3.amazonaws.com/06+-+You're+My+Best+Friend.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Don't Stop Me Now",
//       url: "https://my-music-lists.s3.amazonaws.com/07+-+Don't+Stop+Me+Now.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Save Me",
//       url: "https://my-music-lists.s3.amazonaws.com/08+-+Save+Me.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Crazy Little Thing Called Love",
//       url:
//         "https://my-music-lists.s3.amazonaws.com/09+-+Crazy+Little+Thing+Called+Love.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Somebody To Love",
//       url: "https://my-music-lists.s3.amazonaws.com/10+-+Somebody+To+Love.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Now I'm Here",
//       url: "https://my-music-lists.s3.amazonaws.com/11+-+Now+I'm+Here.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Good Old Fashioned Lover",
//       url:
//         "https://my-music-lists.s3.amazonaws.com/12+-+Good+Old-Fashioned+Lover+Boy.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "Play The Game",
//       url: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/13+-+Play+The+Game.mp3"
//     },
//     {
//       songTitle: "Flash",
//       url: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/14+-+Flash.mp3"
//     },
//     {
//       songTitle: "Seven Seas of Rhye",
//       url:
//         "https://my-music-lists.s3.amazonaws.com/15+-+Seven+Seas+Of+Rhye.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "We Will Rock You",
//       url: "https://my-music-lists.s3.amazonaws.com/16+-+We+Will+Rock+You.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     },
//     {
//       songTitle: "We Are The Champions",
//       url:
//         "https://my-music-lists.s3.amazonaws.com/17+-+We+Are+The+Champions.mp3",
//       coverUrl: "https://my-music-lists.s3.amazonaws.com/00-queen.jpg"
//     }
//   ]
// };

// for (let i = 0; i < 6; i++) {
//   let artistId = null;
//   dbConnection.query(
//     `insert into artists (artist_name) values ("${songTitles.artist}")`,
//     (err, artist) => {
//       if (err) {
//         throw err;
//       }
//       songTitles.albumSongs.forEach(async song => {
//         let query = `insert into songs (music_title, music_url, cover_art) values ("${song.songTitle}", "${song.url}", "${song.coverUrl}")`;
//         let songId = null;
//         dbConnection.query(query, (err, song) => {
//           if (err) {
//             throw err;
//           }
//           dbConnection.query(
//             `insert into songsAndArtists (song_id, artist_id) values ("${song.insertId}", "${artist.insertId}")`,
//             (err, result) => {
//               if (err) {
//                 throw err;
//               }
//             }
//           );
//         });
//       });
//     }
//   );
// }

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (18, 1)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (31, 2)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (11, 3)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (33, 4)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (71, 5)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (32, 2)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (45, 1)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (18, 7)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (15, 6)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (40, 2)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (29, 2)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (29, 1)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// dbConnection.query(
//   "Insert into playlistInformation (song_id, playlist_id) values (29, 1)",
//   err => {
//     if (err) {
//       throw err;
//     }
//   }
// );

// // setTimeout
// // promisify

// dbConnection.end();

// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "root",
//   host: "localhost",
//   database: "music",
//   password: "getting started",
//   port: 5432
// });

// pool.connect();
const pool = require("./dbconnect.js");

pool.query(
  "CREATE TABLE songs (id serial primary key, music_title varchar(250), music_url varchar(250), cover_art varchar(250))",
  (err, res) => {
    if (err) {
      throw err;
    }
    pool.query(
      "CREATE TABLE artists (id serial primary key, artist_name varchar(250))",
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
