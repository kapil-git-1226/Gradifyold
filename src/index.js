import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}` );
    })
    app.on("error",(error)=>{
        console.log(`Error occurred ${error}`)
        throw error
    })
})
.catch((err)=>{
    console.error(`mongo db connection failed : ${err}`);
})