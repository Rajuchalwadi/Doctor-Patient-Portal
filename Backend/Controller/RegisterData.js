import doctor from "../Model/DoctorRegisterFormModel.js";
import paitent from "../Model/PatientRegisterFormModel.js";
import login from "../Model/LoginModel.js";
const addDoctorData = async (req, res) => {
  // const Storage = multer.diskStorage({
  //     destination:"uploads",
  //     filename:(req,file,cb)=>{
  //         cb(null ,file.originalname)
  //     }
  // })

  // const upload = multer({
  //     storage:Storage
  // }).single('testImage')

  // upload(req,res,(err)=>{
  //     if(err){
  //         console.log(err)
  //     }else{
  //         const new_image = new imagedata({
  //             image:{
  //                 data:image.name,
  //                 contentType:'image/png'
  //             }
  //         })

  //         console.log(new_image)
  //     }
  // })

  const { name, email, number, specialty, experience, password } = req.body;

  try {
    const doctor_data = await login.findOne({ email });
    if (doctor_data) {
      res.send("Email already exists")
    } else {
      const new_data = new doctor({
        name: name,
        email: email,
        number: number,
        specialty: specialty,
        experience: experience,
      });

      const login_data = new login({
        type: "Doctor",
        email: email,
        password: password,
      });

      await login_data.save();
      await new_data.save();
      res.send("Data Sucessfully Save");
    }
  } catch (error) {
    res.send(error.message).status(500);
  }
};

const addPatientData = async (req, res) => {
  const { name, age, email, number, surgery, illness, password } = req.body;

  try {
    const patient_data = await login.findOne({ email });
    console.log(patient_data);
    if (patient_data) {
        res.send("Email already exists")
    } else {
      const add_data = new paitent({
        name: name,
        age: age,
        email: email,
        number: number,
        surgery: surgery,
        illness: illness,
      });

      const login_data = new login({
        type: "Patient",
        email: email,
        password: password,
      });

      await login_data.save();
      await add_data.save();
      res.send("Data Sucessfully Save");
    }
  } catch (error) {
    res.send(error.message).status(500);
  }
};

const LoginData=async(req,res)=>{
    const {email , password} = req.body
    const login_data = await login.findOne({email})
    if(login_data && login_data.password === password){
        res.send(login_data)
    }else{
        res.send("Invalid email or password")
    }
}

const getData=async(req , res)=>{
    const getData = await doctor.find()
    if(getData){
        res.json(getData)
    }
}

const getDoctorData=async(req ,res)=>{
  const id = req.params.id
  const data = await login.findById(id)
  if(data){
    const doctor_data= await doctor.find({email:data.email})
    res.send(doctor_data)
  }
}

export { addDoctorData, addPatientData ,LoginData , getData ,getDoctorData};
