const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userId:{
        type:String
    },
    password:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    DOB:{
        type:Date
    }
});

module.exports=mongoose.model("User",userSchema);