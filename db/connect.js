const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url, {
    useNewURLParser: true,
    useUnifiedTopoplogy: true,
  });
};

module.exports = connectDB;
