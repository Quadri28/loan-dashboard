import React, { useState } from "react";
import { Box, Card, Grid, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/DashboardNavbar";
import { FiSettings, FiPlus, FiMail, FiUsers } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";
import {TfiAngleDown} from 'react-icons/tfi'
import { Link } from "react-router-dom";
import "./Dashboard.css";
import TableBox from "../components/TableBox";
import TableRecent from "../components/TableRecent";

const Dashboard = () => {
  const [activate, setActivate] = useState("Dashboard");
  const [toggle, setToggle] = useState(true);
  const [state, setState] = useState(false)
  const [pipeline, setPipeline] = useState(false)
  const [loan, setLoan] = useState(false)
  const [lead, setLead] = useState(false)

  const cards = [
    { name: "Lead", amount: 98467, number: 42 },
    { name: "Application Started", amount: 98467, number: 42 },
    { name: "Completed Application", amount: 98467, number: 42 },
    { name: "Pre-Approved", amount: 98467, number: 42 },
    { name: "Processing", amount: 98467, number: 42 },
    { name: "Underwriting", amount: 98467, number: 42 },
    { name: "Clear to close", amount: 98467, number: 42 },
    { name: "Closed Loans", amount: 98467, number: 42 },
    { name: "Servicing", amount: 98467, number: 42 },
    { name: "Active Draws", amount: 98467, number: 42 },
  ];

  const bigCards = [
    { name: "Extension", amount: 98467, number: 42 },
    { name: "In Default", amount: 98467, number: 42 },
    { name: "Sold", amount: 98467, number: 42 },
    { name: "REO", amount: 98467, number: 42 },
  ];
  return (
    <Box className='dashboard'>
      <PrimarySearchAppBar />
      <Box
        sx={{
          backgroundColor: "#F3F4F6",
          marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          padding: "2rem 1rem",
        }}
      >
        <Grid
          container
          columns={{ xs: 3, sm: 8, md: 12 }}
          spacing={2}
          sx={{
            fontSize: "14px",
            justifyContent: "space-between",
            display:'flex',
            padding:{lg:'0 3.2rem', md:'0 3.2rem', sm:'0 3.2rem', xs:'0 3.2rem'}
          }}
        >
          <Grid item xs={2}>
            <Link
              to="/dashboard"
              style={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("Dashboard")}
              className={activate === "Dashboard" ? "activate" : ""}
            >
              <LuLayoutDashboard/> Dashboard
            </Link>
          </Grid>
          <Grid item xs={2} >
            <Link
              to="/create-loan"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("create")}
              className={activate === "create" ? "activate" : ""}
            >
              <FiPlus style={{ marginRight: "2px" }} /> Create Loan
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link
              to="/pipeline"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("Pipeline")}
              className={activate === "Pipeline" ? "activate" : ""}
            >
              <LuLayoutDashboard style={{ marginRight: "3px" }} /> Pipeline
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="/user-management"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("User")}
              className={activate === "User" ? "activate" : ""}
            >
              <FiUsers style={{ marginRight: "3px" }} /> User Management
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link
              to="/credit-scoring"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("Credit")}
              className={activate === "Credit" ? "activate" : ""}
            >
              <LuLayoutDashboard style={{ marginRight: "3px" }} /> Credit
              Scoring & Risk Management
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link
              to="/reports"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("Report")}
              className={activate === "Report" ? "activate" : ""}
            >
              <FiMail style={{ marginRight: "3px" }} /> Reports
            </Link>
          </Grid>
          <Grid item xs={1}>
            <Link
              to="/support"
              style={{
                display: "flex",
                alignItems: "center",
                color: "#6b7280",
              }}
              onClick={() => setActivate("Support")}
              className={activate === "Support" ? "activate" : ""}
            >
              <FiSettings style={{ marginRight: "3px" }} /> Support
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: "0 4.2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem 0",
          }}
        >
          <Typography  gutterBottom >
            Dashboard
          </Typography>
        </Box>
        <Box
          sx={{ justifyContent: "space-between", display: "grid"}}
          gap={2}
          className='card-container'
        >
          {cards.map((card, i) => {
            return (
              <Box className="cards" key={i} sx={{display:'flex', 
              flexDirection:'column', justifyContent:'space-between'}}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  <Typography variant="body2">{card.name}</Typography>
                  <Typography variant="body2">file(s)</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    mt: 2,
                    color: "#000",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    ${card.amount.toLocaleString("en-us")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {card.number}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            display: "grid",
            marginTop:'1rem',
            gap:2,
          }}
          className="cards-container"
        >
          {bigCards.map((bigCard, index) => {
            return (
              <Box key={index} className="big-card">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "14px",
                    color: "#6b7280",
                  }}
                >
                  <Typography variant="body2">{bigCard.name}</Typography>
                  <Typography variant="body2">file(s)</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    mt: 2,
                    color: "#000",
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    ${bigCard.amount.toLocaleString("en-us")}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {bigCard.number}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{display: "flex", gap: 3, margin: "2rem 0", }}
        >
          <Typography
            onClick={() => setToggle(true)}
            sx={{ cursor: "pointer", position: "relative", fontFamily:'Work Sans',
             fontSize:'14px', color:'#9ca3af' }}
            className={toggle ? "activated" : ""}
          >
            Upcoming-closing
          </Typography>
          <Typography
            onClick={() => setToggle(false)}
            sx={{ cursor: "pointer", position: "relative", fontFamily:'Work Sans',
            fontSize:'14px', color:'#9ca3af' }}
            className={!toggle ? "activated" : ""}
          >
            Most Recent
          </Typography>
        </Box>
        {toggle ? <TableBox /> : <TableRecent/>}
        <Grid container columns={{xs:3, sm:6, md:12, lg:12}} sx={{justifyContent:'center', mb:'2rem'}} 
        spacing={2}>
          <Grid item xs={3}>
            <Box sx={{display:'flex', justifyContent:'space-between', 
            backgroundColor:'#F3F4F6', padding:'1rem .5rem', borderRadius:'10px'}}>
            <Typography>Statewide Map </Typography> <TfiAngleDown style={{cursor:'pointer'}}
            onClick={()=>setState(!state)}/>
            </Box>
            <Card className={state ? 'drop' : 'nodrop'}>
              No mistake
            </Card>
            </Grid>
            <Grid item xs={3}>
            <Box sx={{display:'flex', justifyContent:'space-between', backgroundColor:'#F3F4F6', 
            padding:'1rem .5rem', borderRadius:'10px'}}>
            <Typography>Pipeline Stats for Deal Flow </Typography> <TfiAngleDown 
            onClick={()=>setPipeline(!pipeline)} style={{cursor:'pointer'}}/>
            </Box>
            <Card className={pipeline ? 'drop' : 'nodrop'}>
              No mistake
            </Card>
            </Grid>
            <Grid item xs={3}>
            <Box sx={{display:'flex', justifyContent:'space-between',
          backgroundColor:'#F3F4F6', padding:'1rem .5rem', borderRadius:'10px'}}>
            <Typography>Loan Programs/Service Stats </Typography> <TfiAngleDown
            onClick={()=>setLoan(!loan)} style={{cursor:'pointer'}}/>
            </Box>
            <Card className={loan ? 'drop' : 'nodrop'}>
              No mistake
            </Card>
            </Grid>
            <Grid item xs={3}>
            <Box sx={{display:'flex', justifyContent:'space-between', backgroundColor:'#F3F4F6', 
            padding:'1rem .5rem', borderRadius:'10px'}}>
            <Typography>Lead Sources </Typography> <TfiAngleDown 
            onClick={()=>setLead(!lead)} style={{cursor:'pointer'}}/>
            </Box>
            <Card className={lead ? 'drop' : 'nodrop'}>
              No mistake
            </Card>
            </Grid>
          
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
