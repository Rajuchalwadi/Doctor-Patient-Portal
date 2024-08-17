import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function RegisterFormofPatient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [surgery, setSurgery] = useState("");
  const [illness, setIllness] = useState("");
  const [password, setPassword] = useState("");

  const nevigate = useNavigate();
  const handleSubmit = async () => {
    const register = await axios.post("/add/patient", {
      name,
      email,
      number,
      age,
      surgery,
      illness,
      password,
    });
    if (register.data === "Email already exists") {
      alert(register.data);
    } else {
      alert(register.data);
      nevigate("/login");
    }
  };
  return (
    <>
      <div className="flex justify-center align-middle p-10 w-full tables bg-slate-900">
        <form className="p-5 tab bg-slate-800">
          <h1 className=" text-white font-semibold w-full justify-center flex mb-5 text-2xl">
            Patient's Register Form
          </h1>
          <table cellPadding={10}>
            <tr>
              <td className=" text-white">Full Name</td>
              <td>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Age</td>
              <td>
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  placeholder="JhonDoe@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <td className=" text-white">Profile Image</td>
              <td>
                <input type="file" name="image" required />
              </td>
            </tr>
            <tr>
              <td className=" text-white">History of Surgery</td>
              <td>
                <textarea
                  cols={25}
                  rows={3}
                  placeholder="History of Surgery"
                  value={surgery}
                  onChange={(e) => setSurgery(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">History of Illnes</td>
              <td>
                <textarea
                  cols={26}
                  rows={3}
                  placeholder="History of Illnes"
                  value={illness}
                  onChange={(e) => setIllness(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td className=" text-white">Password</td>
              <td>
                <input
                  type="password"
                  name="password"
                  placeholder="******"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          <div className=" mt-2 w-full justify-center flex">
            <p className=" text-white text-sm">
              <Link to={"/login"}>Login as patient / Login as Doctor</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterFormofPatient;
