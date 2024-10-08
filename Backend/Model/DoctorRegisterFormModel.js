import mongoose from "mongoose";

const doctorRegisterFormSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  specialty: {
    type: String,
    require: true,
  },
  number:{
    type:String,
    require:true
  },
  experience:{
    type:String,
    require:true
  },
  password:{
    type:String,
    require:true
  }
},{
    timestamps:true
});

const doctor = mongoose.model('doctor' , doctorRegisterFormSchema)
export default doctor
