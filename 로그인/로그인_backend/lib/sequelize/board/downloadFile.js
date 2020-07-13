var path = require("path");

const downloadFile = (req, res) => {
  var file = path.join(__dirname, "../../../upload/") + filename;
  let data = fs.readFileSync(file);

  res.json(data);
};

module.exports = downloadFile;
