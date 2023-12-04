const mongoose = require("mongoose");
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

const dbConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${db_user}:${db_password}@cluster0.wpflsxi.mongodb.net/edumart?retryWrites=true&w=majority`
    );
    console.log("database connected");
  } finally {
  }
};

module.exports = dbConnection;
