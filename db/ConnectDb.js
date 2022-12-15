import mongoose from "mongoose";

const connectDb=async(DATABASE_URL)=>{
    
    try {
        const dbInfo={
        
            dbName:process.env.dbName,
        
        }
        await mongoose.connect(DATABASE_URL,dbInfo)

        console.log("DataBase Connected :")

    } catch (error) {
       
        console.log(error)        
    
    }
}

export default connectDb