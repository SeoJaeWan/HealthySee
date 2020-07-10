var path = require("path");

const downloadFile = (req, res) => {
  const filename = req.params.filename;

  var file = path.join(__dirname, "../../../upload/") + filename;

  res.json(file);
};

module.exports = downloadFile;
