import mongoose from "mongoose";

const PatientRegisterFormModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age:{
        type:String,
        require:true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    surgery: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: true,
    },
    illness: {
      type: String,
      require: true,
    },
    password:{
      type:String,
      require:true
    }
  },
  {
    timestamps: true,
  }
);

const paitent = mongoose.model('patient' , PatientRegisterFormModel)
export default paitent