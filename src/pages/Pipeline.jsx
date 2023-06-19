import React,{useState} from 'react'
import {Box, Grid, Typography} from '@mui/material'
import PrimarySearchAppBar from '../components/DashboardNavbar'
import {FiSettings, FiPlus, FiMail, FiUser} from 'react-icons/fi';
import {LuLayoutDashboard} from 'react-icons/lu';
import {Link} from 'react-router-dom'
import './Dashboard.css';

const Pipeline = () => {
    const [activate, setActivate]= useState('Pipeline')
  return (
    <Box className='dashboard'>
        <PrimarySearchAppBar/>
        <Box sx={{backgroundColor:'#F3F4F6', marginTop:'3rem', display:'flex',
         alignItems:'center', padding:'2rem 4rem'}}>
        <Grid container columns={{xs:3, sm:8, md:12}} spacing={2} sx={{fontSize:'14px',
         justifyContent: 'space-between'}}>
            <Grid item xs={2} >
                <Link to="/dashboard" style={{display:'flex', alignItems:'center', color:'#333'}} 
                onClick={()=>setActivate('Dashboard')} className={ activate === 'Dashboard' ? 'activate': ''}>
                 <LuLayoutDashboard style={{marginRight:'3px'}}/> Dashboard</Link>
                 </Grid>
            <Grid item xs={2}> 
            <Link to='/create-loan' style={{display:'flex', alignItems:'center', color:'#333'}}
            onClick={()=>setActivate('create')} className={ activate === 'create' ? 'activate': ''}>
            <FiPlus style={{marginRight:'2px'}}/> Create Loan
            </Link>
            </Grid>
            <Grid item xs={1} >
                <Link to='/pipeline' style={{display:'flex', position:'relative', alignItems:'center', color:'#333'}}
                onClick={()=>setActivate('Pipeline')} className={ activate === 'Pipeline' ? 'activate': ''}>
                <LuLayoutDashboard style={{marginRight:'3px'}}/> Pipeline
                </Link>
            </Grid>
            <Grid item xs={2} >
                <Link to='/user-management' style={{display:'flex', alignItems:'center', color:'#333'}}
                onClick={()=>setActivate('User')} className={ activate === 'User' ? 'activate': ''}>
                 <FiUser style={{marginRight:'3px'}}/> User Management
                 </Link></Grid>
            <Grid item xs={3} >
                <Link to='/credit-scoring' style={{display:'flex', alignItems:'center', color:'#333'}} 
                onClick={()=>setActivate('Credit')} className={ activate === 'Credit' ? 'activate': ''}>
                <LuLayoutDashboard style={{marginRight:'3px'}}/> Credit Scoring & Risk Management</Link>
                </Grid>
            <Grid item xs={2} md={1} >
                <Link to='/reports' style={{display:'flex', alignItems:'center', color:'#333'}}
                onClick={()=>setActivate('Report')} className={ activate === 'Report' ? 'activate': ''}>
                <FiMail style={{marginRight:'3px'}}/> Reports
                </Link>
                </Grid>
            <Grid item xs={1} >
                <Link to='/support' style={{display:'flex', alignItems:'center', color:'#333'}}
                onClick={()=>setActivate('Support')} className={ activate === 'Support' ? 'activate': ''}>
                <FiSettings style={{marginRight:'3px'}}/> Support </Link>
                </Grid>
        </Grid>
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-between', margin:'2rem 1rem '}}>
        <Typography sx={{marginLeft:'3rem'}} gutterBottom>Pipeline</Typography>
        </Box>
    </Box>
  )
}

export default Pipeline