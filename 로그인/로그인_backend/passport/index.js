const kakao = require("./kakaoStrategy");

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    // serializeUser는 req.session 객체에 어떤 데이터를 저장할지 선택한다.
    done(null, user); // 매개변수로 user를 받아, done 함수에 두 번째 인자로 user를 넘긴다.
  }); // 첫 번째 인자는 에러가 발생 시 사용하는 것이다.

  passport.deserializeUser(async (user, done) => {
    // passport.session 미들웨어가 이 메서드를 호출한다.

    done(null, user); // serializeUser에서 세션에 저장했던 user를 받아 req.user에 저장하여 req.user를 사용해 사용자를 조회할 수 있다.
  }); // DB에서 사용자 조회 등 도 여기서 한다. Node.js 교과서 368p

  kakao(passport);
};

/*
    전체 과정을 보자면
    1. 로그인 요청이 들어옴
    2. passport.authenticate 메서드 호출
    3. 로그인 전략 수행
    4. 로그인 성공 시 사용자 정보 객체와  함께 req.login 호출
    5. req.login 메서드가 passport.serializeUser 호출

    kakaoStrategy 파일은 카카오 로그인 전략(3번에서 사용)이다.
*/
