const mongoose = require("mongoose");

async function connectDB() {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Database connection established ${connect.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit();
  }
}

module.exports = connectDB;
