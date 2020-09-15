const E_evaluation = require("../../../models").e_evaluation;

const deleteReview = async (req, res, next) => {
    
    // 평점 코드
    var EEV_Code = req.params.code;

    // 해당 평점이 있는지 판단 & State가 0인지 판단 정상적인 댓글인지
    var comment = await E_evaluation.findOne({
      where: { EEV_Code, EEV_State : 0 },
    });
    
    req.params.EX_Name = comment.Exercise_EX_Name;
   
    await E_evaluation.destroy({where : {EEV_Code}}).catch((err) => {
        console.error(err);
        res.status(401).end();
      });

     next();
  };
  
  module.exports = { deleteReview};
