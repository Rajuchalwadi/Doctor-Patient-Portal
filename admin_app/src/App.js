import "./App.css";
import Login from "./Component/Login";
import Header from "./Component/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterFormofPatient from "./Component/RegisterFormofPatient";
import RegisterFormofDoctor from "./Component/RegisterFormofDoctor";
import DoctorList from "./Component/DoctorList";
import ConsultingForm from "./Component/ConsultingForm";
import PrescriptionListing from "./Component/PrescriptionListing";
import ViewForm from "./Component/ViewForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<DoctorList/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register/patient" element={<RegisterFormofPatient/>}/>
          <Route path="/register/doctor" element={<RegisterFormofDoctor/>}/>
          <Route path="/ConsultingForm/:id" element={<ConsultingForm/>}/>
          <Route path="/prescription/listing/:id" element={<PrescriptionListing/>}/>
          <Route path="/view/consultingForm/:id" element={<ViewForm/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
