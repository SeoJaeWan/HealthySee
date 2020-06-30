var path = require("path");

const downloadFile = (req, res) => {
  const filename = req.params.filename;

  var file = path.join(__dirname, "../../../upload/") + filename;

  res.download(file);
};

module.exports = downloadFile;