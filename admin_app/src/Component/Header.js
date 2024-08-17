import React from 'react'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import '../App.css'
function Header() {
  const data = localStorage.getItem("login")
  return (
    <>
    <Grid container className=' flex justify-between align-middle items-center w-full h-full' bgcolor="black" p="8px">
        <Grid md={4} xs={6}>
            <Link to={'/'}><span className=' cursor-pointer md:text-2xl text-sm font-bold text-yellow-300'>Doctor<span className=' md:text-xl text-sm font-semibold text-purple-100'>-Prescription</span></span></Link>
        </Grid>
        {!data && <Grid>
          <Link to={'/login'}><div className=' w-full flex justify-center align-middle bg-white py-0.5  px-4 font-semibold cursor-pointer login'>Login</div></Link>
        </Grid>}
    </Grid>
    </>
  )
}

export default Header