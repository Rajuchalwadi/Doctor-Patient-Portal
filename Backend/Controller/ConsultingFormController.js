import consulting from "../Model/ConsultingForm.js"

const addConsultingData=async(req ,res)=>{
    const{name , illness,surgery,number,mediacl,allergies,other} = req.body
    try {
        const new_data = new consulting({
            doctor_id:req.params.id,
            name:name,
            illness:illness,
            surgery:surgery,
            number:number,
            mediacl:mediacl,
            allergies:allergies,
            other:other,
        })

        await new_data.save()
        res.send("Data Save")
    } catch (error) {
        console.log(error)
    }
}

const getAllConstultingFormdata=async(req,res)=>{
    const data = await consulting.find({doctor_id:req.params.id})
    if(data){
        res.send(data)
    }
}

const getConsultingFormData=async(req,res)=>{
    const data = await consulting.findById(req.params.id)
    if(data){
        res.send(data)
    }
}
export {addConsultingData , getAllConstultingFormdata , getConsultingFormData}