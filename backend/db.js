const mongoose = require("mongoose")

const MONGO_URI =
  "mongodb+srv://seth1602priyansh:Seth@cluster0.9zco0if.mongodb.net/";

const connectDB = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("connected to db");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connectDB;