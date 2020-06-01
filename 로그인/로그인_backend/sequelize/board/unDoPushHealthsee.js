const B_Healthsee = require("../../models").b_healthsee;
const BoardList = require("../../models").boardlist;
var today = require("../../Date/time");


const unDoPushHealthsee = async (req, res) => {
    var Board_BO_Code = req.params.BO_Code;
    var BH_Push_NickName = req.body.user.username;
    var response = {};
    await B_Healthsee.destroy({
        where : {Board_BO_Code :Board_BO_Code,BH_Push_NickName : BH_Push_NickName },
      })

      var boardList = await BoardList.findOne({
          where : {BO_Code : Board_BO_Code} ,
      });
      response.isHealthsee = false;
      response.BO_Healthsee_Count = boardList.BO_Healthsee_Count;
      
      console.log(response);

      res.json(response)

    
  };




module.exports = unDoPushHealthsee;