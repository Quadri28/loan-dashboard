import React,{useState} from 'react'
import { Table, TableBody, TableCell, TableHead, TableContainer,
TableRow, TablePagination, Paper, TextField, Typography, Box } from '@mui/material';
import {CiSearch} from 'react-icons/ci'
import {FiSettings, FiUsers, } from 'react-icons/fi'
import {AiOutlineMessage} from 'react-icons/ai'

const columns = [
 {name: 'Borrower'},
 {name: 'Loan amount'},
 {name: 'File status'},
 {name: 'Closing'},
 {name: 'Transaction type'},
 {name: 'Loan Program'},
 {name: 'Actions'},
  ];
  
  const rows = [
    {
    name: 'Fawaz Alli-Balogun', 
    amount: 453356,
    status: 'Application started',
    closing: '31/09/2012',
    transaction: 'purchase',
    program:'Commercial Bridge',
    },
    {
      name: 'Fawaz Alli-Balogun', 
      amount: 453356,
      status: 'Application started',
      closing: '31/09/2012',
      transaction: 'purchase',
      program:'Commercial Bridge',
    },
      {
       name: 'Fawaz Alli-Balogun', 
       amount: 453356,
       status: 'Application started',
       closing: '31/09/2012',
       transaction: 'purchase',
       program:'Commercial Bridge',
      },
      {
      name: 'Fawaz Alli-Balogun', 
      amount: 453356,
      status: 'Application started',
      closing: '31/09/2012',
      transaction: 'purchase',
      program:'Commercial Bridge',
      },
      {
      name: 'Fawaz Alli-Balogun', 
      amount: 453356,
     status: 'Application started',
      closing: '31/09/2012',
      transaction: 'purchase',
      program:'Commercial Bridge',
      },
  ];

const TableBox = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [search, setSearch] = useState('');

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };
   
    return (
      <Paper sx={{ width: '100%' , margin:'0 auto 3rem'}}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left" colSpan={10}>
                  <Box sx={{position:'relative',}}>
                  <Typography sx={{position:'absolute', left:'5px', top:'50%'}}><CiSearch/></Typography>
                <TextField name="search" sx={{marginLeft:'1.3rem'}} value={search} variant='standard' label="Search" 
                onChange={(e)=>setSearch(e.target.value)}/>
                </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column, i) => (
                  <TableCell
                    key={i}
                    align='left'
                    sx={{color:'#374151', fontSize:'14px'}}>
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, i) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} sx={{fontSize:'12px'}} key={i}>
                     <TableCell>
                      <b>{row.name} </b>
                      <Typography variant='body2' sx={{color:'#333', fontSize:'12px'}}>
                        Road 1 county homes, ebute meta, Lagos state, Nigeria</Typography>
                        </TableCell> 
                      <TableCell> {row.amount.toLocaleString('en-us')}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell>{row.closing}</TableCell>
                      <TableCell> {row.transaction}</TableCell>
                      <TableCell>{row.program}</TableCell>
                      <TableCell> <AiOutlineMessage/> <FiUsers/> <FiSettings/> </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }


export default TableBox