const Board = require("../../models").board;

const deletePost = async (req, res) => {
  var BO_CODE = req.params.BO_CODE;

  await Board.destroy({ where: { BO_CODE: BO_CODE } })
    .then(() => {
      res.json({ result: 1 });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = deletePost;
