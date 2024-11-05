import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`\n MONGO DB connected || DB Host ${connectioninstance.connection.host} || ${connectioninstance.connection}`)
    } catch (error) {
        console.error(`MONGO DB error: ${error}`)
        process.exit(1)
    }
}
export default connectDB;