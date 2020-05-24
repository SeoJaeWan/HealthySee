var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");

const cors = require("cors");

var passport = require("passport");
var passportConfig = require("./passport");

var session = require("express-session");

var app = express();
passportConfig(passport);
app.use(cors()); // CORS 미들웨어 추가
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));



app.use(
  // 세션 설정을 위해 사용
  session({
    resave: false,
    saveUninitialized: false,
    secret: "kakaoTestsecret",
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(passport.initialize()); // passport.initialize 미들웨어는 요청(req객체)에 passport 설정을 심고
app.use(passport.session()); // passport.session 미들웨어는 req.session 객체에 passport 정보를 저장한다.
// req.session 객체는 express-session에서 생성하므로 express-session(28번째줄) 뒤에 설정해야한다.
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
