import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
})
import  connectDB  from "./db/db.js";


//console.log("ENV CHECK:", process.env.MONGO_URI); // 👈 add this
// pakage.json me jakr "scripts" me dev me kch change krenge.

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
  // app.on("error",(err)=>{
  //           console.error("database connection error:", err)
  //           throw err
  //       })
    
})
.catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with an error code
});







//METHOD 1 TO CONNECT DB
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";


// import express from "express";
// const app = express();

// export const connectDB=async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}` )
//         console.log("Connected to MongoDB")

//         app.on("error",(err)=>{
//             console.error("MongoDB connection error:", err)
//             throw err
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error)
//         process.exit(1)
//     }
// }