import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../App.css";
import image from "../Images/images.jpg";
import axios from "axios";
import { json, Link } from "react-router-dom";
function DoctorList() {
  const [data, setData] = useState([]);
  const [profile, setProfile] = useState([]);
  const getData = async () => {
    const response = await axios.get("/add/getData");
    setData(response.data);
  };

  const login_data = JSON.parse(localStorage.getItem("login"));

  const getDoctorData = async () => {
    if (login_data) {
      const response = await axios.get(`/add/doctor/data/${login_data._id}`);
      setProfile(response.data);
    }
  };

  useEffect(() => {
    getData();
    localStorage.getItem("login");
    getDoctorData();
  }, []);

  const login = localStorage.getItem("login");
  console.log(login);
  const handleAlert = () => {
    alert("Please Login");
  };

  console.log("profile :", profile);
  return (
    <>
      {login_data === null || login_data.type !== "Doctor" ? (
        <Grid container>
          {data.map((i) => {
            return (
              <Grid
                xs={12}
                md={2.5}
                className="flex justify-evenly m-1 tab py-4 px-0 bg-slate-800 w-full h-full"
              >
                <img className="image w-20" src={image} />
                <div>
                  <h1 className="text-white text-xl font-bold">{i.name}</h1>
                  <h1 className=" text-yellow-400 text-sm font-semibold">
                    {i.specialty} specialty
                  </h1>
                  {login ? (
                    <Link to={`/ConsultingForm/${i._id}`}>
                      <button className=" bg-white hover:bg-slate-700 hover:text-white px-3 mt-2 tab">
                        Consult
                      </button>
                    </Link>
                  ) : (
                    <Link>
                      <button
                        onClick={handleAlert}
                        className=" bg-white hover:bg-slate-700 hover:text-white px-3 mt-2 tab"
                      >
                        Consult
                      </button>
                    </Link>
                  )}
                </div>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Grid container>
          {profile.map((item) => {
            return (
              <Grid md={3.5} xs={12}>
                <div className="m-1 p-4 bg-slate-800 tab">
                  <h1 className="flex justify-center text-xl w-full font-bold text-white px-3 py-2 tab">
                    Your Profile..
                  </h1>
                  <div className=" flex justify-around items-center text-white w-ful">
                    <img className="image w-20" src={image} />
                    <div>
                      <h1 className="px-2 py-1">Name : {item.name}</h1>
                      <h1 className="px-2 py-1">
                        Specialty : {item.specialty}
                      </h1>
                      <h1 className="px-2 py-1">Email : {item.email}</h1>
                      <h1 className="px-2 py-1">Number : {item.number}</h1>
                    <Link to={`/prescription/listing/${item._id}`}><button className=" bg-slate-50 px-2 pb-1 text-black tab hover:bg-slate-700 hover:text-white" type="button">prescription</button></Link>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default DoctorList;
