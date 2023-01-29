const app = require("express")();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use((req, res, next) =>
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? req.headers.origin,
  })(req, res, next)
);

app.use(cookieParser());

app.all("*", (req, res, next) => {
  console.log(req.cookies);

  res.json({
    origin: req.headers.origin,
    cookies: req.cookies,
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
