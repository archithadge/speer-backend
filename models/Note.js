const mongoose=require('mongoose');

const noteSchema=new mongoose.Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId
    },
    noteText:{
        type:String
    },
    lastEditedBy:{
        type:mongoose.Schema.Types.ObjectId
    },
    isNoteDeleted:{
        type:Boolean
    },
    isNoteShared:{
        type:Boolean
    },
    sharedBy:{
        type:mongoose.Schema.Types.ObjectId
    }
});

module.exports=mongoose.model("Note",noteSchema);