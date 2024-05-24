import mongoose from "mongoose";

const userSchema  = mongoose.Schema({
    email:{type:String, require:true},
    username:{type:String, require:true},
    password:{type:String, require:true, select:false},
    createdAt:{type:Date, default: Date.now()}
})

export const UserModel = mongoose.model("user", userSchema);
