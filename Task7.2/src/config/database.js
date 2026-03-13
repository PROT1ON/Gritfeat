const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);

    console.log("Database Connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

module.exports = connectDatabase;