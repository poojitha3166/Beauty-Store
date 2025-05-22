import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
    const DB = process.env.DB;
    
try {
    await mongoose.connect(DB).then(() =>{
        console.log("Database is connected successfully");

    })
} catch (error) {
    console.log(error);
    // Retry connection after 5 seconds
    console.log("Retrying database connection in 5 seconds...");
    // Retry connection after 5 seconds
 
  setTimeout(dbConnection, 5000);

}
}
export default dbConnection;