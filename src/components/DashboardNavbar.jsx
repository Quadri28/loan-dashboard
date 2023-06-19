import React,{useState} from 'react'
import {Box, TextField, Typography} from '@mui/material'
import LOS from '../Images/Union.png';
import {CiSearch} from 'react-icons/ci'
import {AiOutlineBell} from 'react-icons/ai'
import {TbCalendarStats} from 'react-icons/tb'
import {FaUserCircle, FaBars} from 'react-icons/fa'
import './DashNavbar.css';


const PrimarySearchAppBar = () => {
  const Search = <CiSearch/>
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <Box sx={{display:'flex', alignItems:'center', padding:'1rem 4rem',}}>
      <Box sx={{mr:'2rem'}}><img src={LOS} alt="App Logo"/></Box>
      <TextField label={Search} variant='standard' sx={{flexGrow:1, margin:'0 auto'}}/>
      <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars style={{color:'#3A358C', marginLeft:'5px'}}/>
        </div>
      <Box sx={{flexGrow:1, display:{md:'flex', sm:'flex', xs:'block'}, justifyContent:{lg:'flex-end', 
      md:'flex-end', sm:'flex-end', xs:'center'}, alignItems:'center',
      columnGap:'1.5rem', color:{xs:'#fff', sm:'#000', md:'#000'}}}
       className={`nav-elements  ${showNavbar && 'active'}`}>
        <Typography style={{fontSize:'20px', margin:{xs:'3rem 5rem'}}}><TbCalendarStats/></Typography>
        <Typography style={{fontSize:'20px', margin:{xs:'0 5rem'}}}><AiOutlineBell/></Typography>
        <Box sx={{margin:'1rem 5rem'}}>
          <span style={{fontSize:'30px', float:'left', marginRight:'5px'}}><FaUserCircle/></span>
           <Box className='dashboard'>
            <span style={{fontSize:'12px'}}>Ayobami </span>
            <span style={{fontSize:'12px'}}>aj.awoyelu@gmail.com</span>
            </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default PrimarySearchAppBar
