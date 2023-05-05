const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const indexRouter = require("./routes/index");

const { sendResponse } = require("./helpers/utils");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/api", indexRouter);

const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoURI = process.env.MONGO_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log(`Server is listening on port ${port}`))
  .catch(err => console.log(err.message));

//Error handler
//catch 404
app.use((res, req, next) => {
  const err = new Error("Not found");
  err.statusCode = 404;
  next(err);
});

app.use((err, res, req, next) => {
  console.log("ERROR", err);
  if (err.isOperational) {
    return sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      err.errorType
    );
  } else {
    return sendResponse(
      res,
      err.statusCode ? err.statusCode : 500,
      false,
      null,
      { message: err.message },
      "Internal Sever Error"
    );
  }
});

module.exports = app;
