import mongoose from "mongoose";


const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "please enter name"]
    },
    email:{
        type:String,
        required: [true, "please enter email"]
    },
    number:{
        type:Number,
        required: [true, "please enter phone number"]
    },
    description:{
        type:String,
        required: [true, "say something about work"]
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

export const Contact = mongoose.model("Contact", contactSchema);