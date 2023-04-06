const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://hiral:hiral270698@testcluster1.q6fap.mongodb.net/flexcar?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("mongo db connection successful!");
  });

  connection.on("error", () => {
    console.log("mongo db connection failed!");
  });
}

connectDB();

module.exports = mongoose;
