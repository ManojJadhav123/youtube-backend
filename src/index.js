// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from './db/index.js';
import { app } from "./app.js";
dotenv.config({
  path : './env'
})

connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running on PORT : ${process.env.PORT}`);
  })
})
.catch((error)=>{
  console.log("Mongo connection failed ", error);
})



// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

//     app.on("error", (error) => {
//       console.log("Error connecting to server file", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`app is listening on ${processe.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("ERROR", error);
//     throw error;
//   }
// })();
