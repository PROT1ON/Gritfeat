const mongoose =require("mongoose");

const newSchema =new mongoose.Schema({
    title : {
        type : String,
        required: true,
    },
    completed : {
        type : Boolean,
        default : false
    },
      createdAt: {
    type: Date,
    default: Date.now
  }
}, {timestamps: true})

module.exports = mongoose.model("Todo", newSchema);
