import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PrescriptionListing() {
  const [data, setData] = useState([]);
  const params = useParams();
  const getData = async () => {
    const response = await axios.get(`/add/consulting/list/${params.id}`);
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Grid container>
        {data.map((item) => {
          return(
            <Grid md={3} className="m-1 tab flex justify-center bg-slate-800">
               <div className="p-2">
               <h1 className="p-1 text-white font-semibold">Name : {item.name}</h1>
                <h1 className="p-1 text-white font-semibold">Phone Number: {item.number}</h1>
                <h1 className="p-1 text-white font-semibold">Illness : {item.illness ? item.illness.slice(0,50)+'...' : 'N/A'}</h1>
                <p className="p-1 text-white font-semibold">Surgery : {item.surgery ? item.surgery.slice(0,50)+'...' : 'N/A'}</p>
                <h1 className="p-1 text-white font-semibold">Mediacl : {item.mediacl ? item.mediacl : 'N/A'}</h1>
                <h1 className="p-1 text-white font-semibold">Allergies : {item.allergies ? item.allergies : 'N/A'}</h1>
                <h1 className="p-1 text-white font-semibold">Other : {item.other ? item.other : 'N/A'}</h1>
               <Link to={`/view/consultingForm/${item._id}`}><button className=" tab w-full bg-white font-semibold hover:bg-slate-600 hover:text-white">View</button></Link>
               </div>
          </Grid>
          )
        })}
      </Grid>
    </>
  );
}

export default PrescriptionListing;
