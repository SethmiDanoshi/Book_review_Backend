const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDb connected on host : ${conn.connection.host}`);
    }catch(e){
        console.error(`MongoDB Connection Error : ${e}`);
        process.exit(1);
    }
};

module.exports = connectDB;