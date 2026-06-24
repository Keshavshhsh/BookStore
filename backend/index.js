
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT=process.env.PORT||4000;
const URI=process.env.MONGO_URI;




// connect to mongodb
try {
  await mongoose.connect(URI);
  console.log("MongoDB Connected");
} catch (error) {
  console.log("Error:", error);
}



app.listen(PORT, () => {
  console.log(`Server app is listening on port ${PORT}`);
});