const KaKaoStrategy = require("passport-kakao").Strategy;

module.exports = (passport) => {
  passport.use(
    new KaKaoStrategy(
      {
        clientID: "547c9b9d2e03aadbbe27934850cb0bc9",
        callbackURL: "http://localhost:4000/auth/kakao/check",
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
