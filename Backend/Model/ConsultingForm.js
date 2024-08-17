import mongoose from "mongoose";

const consultingSchema=mongoose.Schema({
    doctor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"doctor",
        required: true,
    },
    name:{
        type:String,
        require:true
    },
    illness:{
        type:String,
    },
    surgery:{
        type:String
    },
    number:{
        type:String
    },
    mediacl:{
        type:String
    },
    allergies:{
        type:String
    },
    other:{
        type:String
    }
},{
    timestamps:true
})

const consulting = mongoose.model('consulting',consultingSchema)
export default consulting