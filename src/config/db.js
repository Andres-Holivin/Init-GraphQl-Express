require("dotenv").config();

const mongoose= require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;
console.log(DATABASE_URL)

const connectDb=()=>{
    return mongoose.connect(DATABASE_URL,{useUnifiedTopology:true,useUnifiedTopology:true},err=>{
        if(err){
            console.log("Connection to Db failed");
        }
        else{
            console.log("Connection to db Success");
        }
    })
}

const db= mongoose.connection;
db.on("error",console.error.bind(console,"MongoDB connection error"));

module.exports= connectDb;