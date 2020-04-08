const exec = require("child_process").exec;
const command =
  "mongoimport --type json -d sdc-mongo -c playlists --drop generatedMongoPlaylists.json";

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(err, "error importing");
  }
});
