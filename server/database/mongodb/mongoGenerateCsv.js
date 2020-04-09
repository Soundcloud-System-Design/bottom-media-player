const fs = require("fs");
const fake = require("faker");
const path = require("path");

let writePlaylists = fs.createWriteStream(
  path.join(__dirname, "./generatedMongoPlaylists.json")
);

// writePlaylists.write("playlist_name, songs\n");

let musicUrlLists = [
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/29.)+The+Leaning+Tower+of+Pepperoni+Pizza+Pie.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/4.)+Crabinet.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/43.)+Banana+Boys.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/6th_Sense_-_05_-_05_Too_Complex_Instrumental_____6th_Sense__The_Kid_Daytona.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Action_Davis_-_01_-_Something_Intro.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/BLEO_-_05_-_Sultry_Space_Showers.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Beat_von_Stein_-_Happy_Happy_Happy_Birthday.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/BoxCat_Games_-_04_-_B-3.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/BoxCat_Games_-_05_-_Battle_Boss.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/BoxCat_Games_-_10_-_Epic_Song.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Broke_For_Free_-_01_-_As_Colorful_As_Ever.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Broke_For_Free_-_01_-_Night_Owl.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Catherine_Pancake_-_16_-_i_love_you.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Chris_Zabriskie_-_01_-_The_Temperature_of_the_Air_on_the_Bow_of_the_Kaleetan.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Chuzausen_-_06_-_Raro_Bueno.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Comfort_Fit_-_03_-_Sorry.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Hadokowa_-_04_-___Get_a_Dog_Pet_a_Dog.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Holy_Coast_-_08_-_The_Beach_The_Beach.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Jahzzar_-_01_-_Please_Listen_Carefully.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Jahzzar_-_07_-_Little_Chance.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Jason_Shaw_-_12_MORNINGS.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Jason_Shaw_-_RUNNING_WATERS.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Jason_Shaw_-_SERENITY.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Jason_Shaw_-_WORDS.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Kevin_MacLeod_-_01_-_Impact_Prelude.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Kevin_MacLeod_-_04_-_DD_Groove.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Kevin_MacLeod_-_AcidJazz.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Kevin_MacLeod_-_Backed_Vibes_Clean.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Kevin_MacLeod_-_Parisian.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Kidkanevil__DZA_-_45_-_Nuff_Stickers.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Lame_Drivers_-_01_-_Frozen_Egg.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Lomz__Lezet_-_08_-_Cod.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Mark_Neil_-_11_strANGE_Ls.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Monk_Turner__Fascinoma_-_01_-_Its_Your_Birthday.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Monk_Turner__Fascinoma_-_05_-_Piano_Version_in_B.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Monk_Turner__Fascinoma_-_06_-_Piano_Version_in_C.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Noisewaves_-_04_-_Horses_With_Fake_Legs.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Podington_Bear_-_Bittersweet.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Podington_Bear_-_Blue_Highway.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Podington_Bear_-_Starling.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Rolemusic_-_04_-_The_Pirate_And_The_Dancer.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Scott_Holmes_-_11_-_Back_On_The_Road_Again.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Scott_Joplin_-_Ragtime_Dance.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Sergey_Schepkin_-_02_-_Andrew_Bisset_Cultural_Dis-Ease.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/The_Freak_Fandango_Orchestra_-_01_-_Requiem_for_a_Fish.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/United_States_Marine_Band_-_We_Wish_You_a_Merry_Christmas.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Vitus_Von_Degen_-_04_-_Black_Gloves.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Will_Heikoop_-_17_-_Christmas_Star.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/Windom_Earle_-_05_-_kirblooey.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/sorin_urzica_-_Happy_Birthday_to_You_-_Special_Song.mp3",
  "https://project-music.s3-us-west-1.amazonaws.com/music+folder/springtide_-_15_-_Fall_asleep_under_the_millions_of_stars_Instrumental.mp3",
];

const writeOneMillionPlaylists = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 1;
  write();
  function write() {
    let ok = true;
    do {
      i -= 1;
      const playlist_name = fake.lorem.words();
      const allSongsWithInfos = [];
      for (var j = 10; j > 0; j--) {
        let songTitle = fake.lorem.words();
        let songUrl = musicUrlLists[fake.random.number({ min: 0, max: 50 })];
        let artistName = fake.lorem.words();
        let coverArt = fake.image.image();
        allSongsWithInfos.push({
          song_title: songTitle,
          song_url: songUrl,
          artist_name: artistName,
          cover_art: coverArt,
        });
      }
      const data = JSON.stringify({
        id: id,
        playlist_name: playlist_name,
        songs: { allSongsWithInfos },
      });
      id += 1;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once("drain", write);
    }
  }
  write();
};

writeOneMillionPlaylists(writePlaylists, "utf-8", () => {
  writePlaylists.end();
});
