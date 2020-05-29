const BoardDetail = require("../../models").boarddetail;
const B_Comment = require("../../models").b_comment;

const readPost = (req, res, next) => {
    var BO_CODE = req.params.BO_CODE;
    var self = req.body.self;

    var responseData = {};

    if(!self)
        Board.increment("BO_HIT", { where: { BO_CODE: BO_CODE } });

    var BoardD = await BoardDetail.findOne({
        where: { BO_CODE},
    });
    var comments = await B_Comment.findAll({
        where: { Board_BO_Code: BO_CODE },
    });

    responseData.boardDetail = BoardD;
    responseData.comments = comments;

    return res.json(responseData);
};

module.exports= readPost