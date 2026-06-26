
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js"


const app = express();
app.use(cors());
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


//defining routes

app.use("/book",bookRoute)



app.listen(PORT, () => {
  console.log(`Server app is listening on port ${PORT}`);
});