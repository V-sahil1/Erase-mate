import mongoose from "mongoose";
const connetctDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log('Database is connected');
        
    })
    await mongoose.connect(`${process.env.MONGO_DB_URI}/bg-removal`)
}
export default connetctDB