import { useState } from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {Route, Routes} from 'react-router-dom'
import DashboardNavbar from './components/DashboardNavbar';
import Dashboard from './pages/Dashboard';
function App() {

  const theme = createTheme(
    {
      typography:{
        fontFamily:[
          'DM Sans',
          'sans-serif',
          'Work Sans'
        ].join(',')
      }
    }
  )
  return (
    <>
    {/* <DashboardNavbar/> */}
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
