import mongoose from "mongoose";
import app from "/workspaces/Live-e-comm-bootcamp/src/app.js";
import config from "./config";


( async() => { 
    try {
       await mongoose.connect(config.MONGODB_URL)
       console.log("DB connected !");

       app.on('error',(error)=>{
        console.error("Error: ",error);
        throw error
       })

       const onListening = () =>{
        console.log(`listening on port ${config.PORT}`);
       }

       app.listen(config.PORT,onListening);

    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
} ) ()
