import Details from '@/components/Details'
import NavBar from '@/components/NavBar'
import { Button } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomButton from '../components/CustomButton'
import FormModal from '@/components/FormModal';

function Main() {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)
  if(loading) {
    return (
      <div className='loader'>
        <img src = {'/assets/Loading.gif'}  alt = "loader"></img>
        <div style={{color: 'gray'}}>Loading...</div>
      </div>
    )
  }
  return (
    <div>
        <NavBar />
        <Details />
        <FormModal open={openModal} handleClose={()=>setOpenModal(false)} />
    </div>
  )
}

export default Main