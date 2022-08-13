const express = require("express");
const app = express();
require("dotenv").config();
require("express-async-errors");
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
//middleware

//routes

const authRouter = require("./routes/main");
app.use("/api/v1", authRouter);

const notFound = require("./middleware/not-found");
app.use(notFound);

const errorHandler = require("./middleware/error-handler");
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(PORT, () => console.log("server running"));
  } catch (err) {
    console.log(err);
  }
};

start();
