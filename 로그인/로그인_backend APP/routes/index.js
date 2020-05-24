var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;




// var passport = require("passport");
// var express =  require("express");
// var KakaoStrategy = require("passport-kakao").Strategy;
// var appKey = "47c66686d86947ed1929be2f06df6421";
// var data = require('../commons/mariadbConn'),
// pool = require('../commons/consts'),
// bodyparser=require('body-parser');  

// // db 연결 준비용
// var pooconn = pool.getcon();
// var conn = pool.dbopen(pooconn);

// var acc = {};  // 정보 취합용 객체

// // 세션용도
// passport.serializeUser((user, done)=>{
//     done(null, user);
// });
// passport.deserializeUser((obj, done)=>{
//     done(null, obj);
// });

// //var appSecret = "YOUR_APP_CLIENT_SECRET_KEY";
// // passport 에 Kakao Oauth 추가
// passport.use( new KakaoStrategy({
//         clientID: appKey,
//         //clientSecret: appSecret,
//         callbackURL: "/kakaoAuth/callback"
//     },
//     (accessToken, refreshToken, params, profile, done)=>{
//         // authorization 에 성공했을때의 액션
//         console.log( "accessToken :" + accessToken );
//         console.log( "사용자 profile: " + JSON.stringify(profile._json) );
//         var profilekk=profile._json;
//         save(accessToken, refreshToken, profile);

//         //  정보 수집용 객체를 사용, 여기에서 정보를 취합
//         acc['name']=profile.displayName;
//         acc['email']=profile._json.kakao_account.email;
//         acc['platform']=1;
//         acc['reportedCount']=0;
//         acc['state']=1,
//         console.log(data.AC_NickName+" + "+data.AC_Platform_Account);
//         return done(null, profile._json);
//     })
// );


// // express 앱 설정
// var app = express();
// app.use(bodyparser.urlencoded({extended : false}));
// app.use(express.json());
// app.use(passport.initialize());
// app.get("/kakaologin", passport.authenticate('kakao',{state: "myStateValue"}));
// app.get("/kakaoAuth/callback", passport.authenticate('kakao'), (req, res)=>{
//     // 로그인 시작시 state 값을 받을 수 있음
//     res.send("state :" + req.query.state);
// });

// app.post('/process/checkUser', async(req,res)=>{
//     //var pooconn = ;
    
//     if(pooconn){
//         data.selecUser(conn, req.body.nickname||req.query.nickname, (err, selecedUser)=>{
//             if(err){
//                 console.log('Error Occured while select user from database!');
//                 res.json(err);
//                 return;
//             }
    
//             if(selecedUser){
//                 console.dir(selecedUser);
//                 console.log(selecedUser);
//                 res.json(selecedUser);
//             }else{
//                 console.log('Failed to select user from database!');
    
//             }
//         });
//         }else{
//             console.log('Failed to connect database!');
//         }
// });

// app.post('/process/addUser', async(req,res)=>{
//     console.log('/process/addUser 호출됨');

//     var paramNickName = req.body.nickname || req.query.nickname,
//     paramScope = req.body.scope || req.query.scope,
//     paramWeight = req.body.weight || req.query.weight,
//     paramGender = req.body.gender || req.query.gender;

//     // 정보 취합 확인용
//     console.log('요청 파라미터 : '+paramNickName+" + "+
//     paramScope+" + "+paramWeight+" + "+paramGender+" + "+acc.name+" + "+
//     acc.platform+" + "+acc.email+" + "+acc.reportedCount+" + "+paramScope
//     +" + "+acc.state);
    
//     if(pooconn){
//     data.adduser(paramNickName, acc.name, acc.platform, acc.email, acc.reportedCount, paramScope, paramWeight, acc.state, paramGender, (err, addedUser)=>{
//         if(err){
//             console.log('Error Occured while insert into database!');
//             res.json(err);
//             return;
//         }

//         if(addedUser){
//             console.dir(addedUser);
//             console.log('inserted '+ addedUser.affectedRows+' rows');
//             console.log(addedUser.insertedId+'is inserted');
//             res.json({status:'ok'});
//         }else{
//             console.log('Failed to insert into database!');

//         }
//     });
//     }else{
//         console.log('Failed to connect database!');
//     }
// });
// app.get("/logout", (req, res) => {
//     req.logOut();
//     res.redirect("/kakaologin");
//   });
// app.listen(3000);
// // 사용자 구현 부분
// function save(){
//     //save 로직 구현
// }
