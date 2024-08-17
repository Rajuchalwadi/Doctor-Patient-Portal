import express from "express";
import {addDoctorData , addPatientData , LoginData,getData,getDoctorData} from '../Controller/RegisterData.js'
import { addConsultingData , getAllConstultingFormdata , getConsultingFormData} from "../Controller/ConsultingFormController.js";
const router = express.Router()

router.route('/doctor').post(addDoctorData)
router.route('/patient').post(addPatientData)
router.route('/login').post(LoginData)
router.route('/getData').get(getData)
router.route('/consulting/:id').post(addConsultingData)
router.route('/doctor/data/:id').get(getDoctorData)
router.route('/consulting/list/:id').get(getAllConstultingFormdata)
router.route('/consulting/form/:id').get(getConsultingFormData)


export default router