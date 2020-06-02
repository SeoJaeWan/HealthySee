const Board = require("../../../models").board;

const deletePost = async (req, res) => {
  console.log(req.params);
  var BO_Code = req.params.BO_Code;

  console.log("여기와따!", BO_Code, req.params);

  await Board.destroy({ where: { BO_Code: BO_Code } })
    .then(() => {
      res.json({ result: 1 });
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = deletePost;
