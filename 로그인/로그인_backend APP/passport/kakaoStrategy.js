const KaKaoStrategy = require("passport-kakao").Strategy;
const config = require("../config/config");

module.exports = (passport) => {
  passport.use(
    new KaKaoStrategy(
      {
        clientID: '47c66686d86947ed1929be2f06df6421',
        callbackURL: 'http://192.168.0.20:3000/auth/kakaoAuth/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        info = {
          accessToken,
          profile,
        };
        done(null, info);
      }
    )
  );
};


// {  재완이꺼
//     clientID: "547c9b9d2e03aadbbe27934850cb0bc9",
//     callbackURL: "http://localhost:4000/auth/kakao/check",
// },