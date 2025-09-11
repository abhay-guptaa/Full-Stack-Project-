//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:'./.env'
})

console.log("Loaded MONGODB_URI:", JSON.stringify(process.env.MONGODB_URI));

/*IIFE FuncTIon*/
/*(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Can't able to connect with express",error);
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`App is listening on port`)
        })
    }
    catch(error){
        console.error("Error", error)
        throw err
    }
})()*/

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log("Server is running !!!!!")
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!  ",err)
})
