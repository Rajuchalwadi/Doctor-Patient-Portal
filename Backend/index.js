import express from "express";
import dotenv from 'dotenv'
import connect from "./Database/db.js";
import RegisterRouter from './Route/RegisterRoute.js'
import cors from 'cors'

dotenv.config()
connect()

const app = express()
app.use(express.json());
app.use(cors())

app.use('/add',RegisterRouter)
const PORT = process.env.PORT || "3001"
app.listen(PORT ,()=>{
    console.log("Running on port No :",PORT)
})
