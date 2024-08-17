import mongoose from "mongoose";

const Login=mongoose.Schema({
    type:{
        type:String,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

const login = mongoose.model('login',Login)
export default login