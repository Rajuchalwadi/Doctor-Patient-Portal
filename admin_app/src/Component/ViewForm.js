import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
function ViewForm() {
  const params = useParams();
  const [data, setData] = useState("");
  const [medicine, setMedicine] = useState("");
  const [care, setCare] = useState("");

  const getData = async () => {
    const response = await axios.get(`/add/consulting/form/${params.id}`);
    setData(response.data);
  };

  const handleSubmit=()=>{
    console.log(medicine , care)
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <Grid container className="flex">
        <Grid md={5} xs={12} className=" bg-slate-800 m-2 tab">
          <div className="p-2">
            <h1 className="p-1 text-white font-semibold">Name : {data.name}</h1>
            <h1 className="p-1 text-white font-semibold">
              Phone Number: {data.number}
            </h1>
            <h1 className="p-1 text-white font-semibold">
              Illness : {data.illness ? data.illness : "N/A"}
            </h1>
            <p className="p-1 text-white font-semibold">
              Surgery : {data.surgery ? data.surgery : "N/A"}
            </p>
            <h1 className="p-1 text-white font-semibold">
              Mediacl : {data.mediacl ? data.mediacl : "N/A"}
            </h1>
            <h1 className="p-1 text-white font-semibold">
              Allergies : {data.allergies ? data.allergies : "N/A"}
            </h1>
            <h1 className="p-1 text-white font-semibold">
              Other : {data.other ? data.other : "N/A"}
            </h1>
          </div>
        </Grid>
        <Grid md={5} xs={12} className=" m-2 bg-slate-800">
          <form onSubmit={handleSubmit}>
            <table cellPadding={10}>
              <tr>
                <td className=" text-white font-semibold">Care to Taken</td>
              </tr>
              <tr>
                <td>
                  <textarea
                    cols={65}
                    rows={6}
                    placeholder="Care to Taken"
                    required
                    value={care}
                    onChange={(e)=>setCare(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td className=" text-white font-semibold">Medicine</td>
              </tr>
              <tr>
                <td>
                  <textarea
                    cols={65}
                    rows={4}
                    placeholder="Medicine"
                    required
                    value={medicine}
                    onChange={(e)=>setMedicine(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <button type="submit" className=" w-full bg-white m-1 hover:bg-slate-700 hover:text-white">Submit</button>
              </tr>
            </table>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default ViewForm;
