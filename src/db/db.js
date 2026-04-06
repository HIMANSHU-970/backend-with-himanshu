import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

 const connectDB = async () => { // ye hm js me padhe h ki async fxn kaise aur kyo banate h
  try {
    const connectionHIM = await mongoose.connect(process.env.MONGO_URI, {
      dbName: DB_NAME,
    });
    console.log(`\n MONGODB CONNECTED !! DB_HOST: ${connectionHIM.connection.host} `);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}
export default connectDB;



// async fxn kaise aur kyo banate h: async fxn aise fxn h jo asynchronous code ko handle krte h. Async fxn ke andar hum await keyword ka use krke promises ko handle krte h. Jab hum kisi asynchronous operation ka result chahte h, to hum us operation ke samne await lagate h, jisse ki code us operation ke complete hone tak ruk jata h aur fir result return karta h. Isse code zyada readable aur maintainable ho jata h, kyunki humko callbacks ya .then() ka use nahi karna padta.