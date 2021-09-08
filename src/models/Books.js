const mongoose = require("mongoose")
const {Schema}=mongoose;

const booksSchema=new Schema({
    id:Number,
    name:String,
    authorId:Number
});
const Books= mongoose.model("Books",booksSchema);

module.exports={Books}