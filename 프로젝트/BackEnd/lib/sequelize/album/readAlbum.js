const A_Comment = require("../../../models").a_comment;
const album = require("../../../models").album;
const { Op } = require("sequelize");
const FrontComment = require("../../../models").frontcomment;
const Picture = require("../../../models").picture;

const readPost = async (req, res, next) => {
  var AL_Code = req.params.AL_Code;

  var responseData = {};

  var Album = await album.findOne({
    where: { AL_Code },
  });

  var pictures = await Picture.findAll({
      where : {Album_AL_Code : Album.AL_Code},
  });

  // if(pictures){
  //     for(i = 0; i < pictures.length ; i++){
  //       Album.AL_Picture[i] = pictures[i].P_Picture;
  //     }
  // }
  // console.log(Album);

  // 댓글 1페이지
//   comments = await FrontComment.findAndCountAll({
//     where: { Board_BO_Code: AL_Code },
//     order: [
//       ["BC_Re_Ref", "DESC"],
//       ["BC_Code", "ASC"],
//     ],
//     limit : 20,
//   });

  
  if(req.method === 'GET')
    username = req.body.user.username;
  else
    username = req.body.username;

//  var isHealthsee = await B_Healthsee.count({
//     where : {[Op.and]:[ 
//       {Board_BO_Code: BO_Code },
//       {BH_Push_NickName : username },
// ]}})
// var isReport = await B_Reporter.count({
//   where : {[Op.and]:[ 
//     {Board_BO_Code: BO_Code },
//     {BR_Reporter_NickName : username },
// ]}})
 
   responseData.albumDetail = Album;
   responseData.picture = pictures;
//  responseData.comments = comments.rows;
//  responseData.lastPage = (Math.ceil(comments.count / 20) == 0)?1:Math.ceil(comments.count / 20);
//   responseData.isHealthsee = isHealthsee;
//   responseData.isReport = isReport;

  // BoardDetail 페이지에 CommnetCount 속성이 있어서 사용하지않음. 나중에 뷰의 효율을 위해 변경 가능
  //responseData.commentsCount = comments.count;

  return res.json(responseData);
};

const readComment = async (req, res, next) => {
  var BO_Code = req.params.BO_Code;
  var offset = 0;
  var page = req.params.page;

  if(page > 1)
    offset = (page - 1) * 20;
  else if (page < 1)
    {
      // 에러 발생
    }

  var responseData = {};
  comments = await FrontComment.findAndCountAll({
    where: { Board_BO_Code: BO_Code },
    order: [
      ["BC_Re_Ref", "DESC"],
      ["BC_Code", "ASC"],
    ],
    limit : 20, offset : offset
  },);
  responseData.comments = comments.rows;
  responseData.commentsCount = comments.count;
  responseData.lastPage = Math.ceil(comments.count / 20);
  res.json(responseData);
};

module.exports = { readPost, readComment };
