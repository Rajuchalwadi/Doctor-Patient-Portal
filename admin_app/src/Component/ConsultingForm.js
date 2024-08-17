import axios, { all } from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

function ConsultingForm() {
  const [name, setName] = useState("");
  const [illness, setIllness] = useState("");
  const [surgery, setSurgery] = useState("");
  const [number, setNumber] = useState("");
  const [mediacl, setMedical] = useState("");
  const [allergies, setAllergies] = useState("");
  const [other, setOther] = useState("");

  const id = useParams();
  const handleSubmit = async () => {
    axios.post(`/add/consulting/${id.id}`, {
      name,
      illness,
      surgery,
      number,
      mediacl,
      allergies,
      other,
    });
    alert("Data Sucessfully Send");

    setName("");
    setIllness("");
    setSurgery("");
    setMedical("");
    setNumber("");
    setOther("");
    setAllergies("");
  };
  return (
    <>
      <div className="flex justify-center align-middle p-10 w-full tables bg-slate-900">
        <form className="p-5 tab bg-slate-800">
          <h1 className=" text-white font-semibold w-full justify-center flex mb-5 text-2xl">
            Consultation Form
          </h1>
          <table cellPadding={10}>
            <tr>
              <td className=" text-white">Patient's Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={name}
                  s
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Phone Number</td>
              <td>
                <input
                  type="text"
                  name="number"
                  placeholder="1234567890"
                  required
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Current Illness History</td>
              <td>
                <textarea
                  cols={25}
                  rows={3}
                  placeholder="Current Illness History"
                  value={illness}
                  onChange={(e) => setIllness(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Recent Surgery Data</td>
              <td>
                <textarea
                  cols={25}
                  rows={3}
                  placeholder="Recent Surgery Data.."
                  value={surgery}
                  onChange={(e) => setSurgery(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Family medical history</td>
              <td className="mx-2 text-white">
                <input
                  className=" text-white"
                  onChange={(e) => setMedical(e.target.value)}
                  type="radio"
                  name="medical"
                  value="Diabetics"
                />
                Diabetics
                <input
                  type="radio"
                  className=" text-white"
                  onChange={(e) => setMedical(e.target.value)}
                  name="medical"
                  value="Non-Diabetics"
                />
                Non-Diabetics
              </td>
            </tr>
            <tr>
              <td className=" text-white">Allergies</td>
              <td>
                <input
                  type="text"
                  name="allergies"
                  placeholder="Allergies"
                  required
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Other</td>
              <td>
                <input
                  type="text"
                  name="other"
                  placeholder="Other"
                  value={other}
                  onChange={(e) => setOther(e.target.value)}
                />
              </td>
            </tr>
          </table>
          <div className=" w-full flex justify-center mt-2">
            <button
              onClick={handleSubmit}
              type="button"
              className="tab bg-slate-100 px-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ConsultingForm;
