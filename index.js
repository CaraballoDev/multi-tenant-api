const app = require("express")();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use((req, res, next) =>
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") ?? req.headers.origin,
    credentials: true,
  })(req, res, next)
);

app.use(cookieParser());

app.all("*", (req, res, next) => {
  console.log(req.cookies);

  res.json({
    host: req.headers.host,
    cookies: req.cookies,
  });
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
