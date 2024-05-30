import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from './header';

import './name.css'

function createData(name, roll, className, college, year) {
  return { name, roll, className, college, year };
}

const rows = [
  createData('SHARATH A', 159, "BCA", "SDM COLLEGE UJIRE", 1),
  createData('SHARAN', 237, "BCA", "SDM COLLEGE UJIRE", 3),
  createData('DHANUSH', 262, "BSC", "SDM COLLEGE UJIRE", 4),
  createData('SHREENIDHI', 654,"BE", "SDM COLLEGE UJIRE", 3),
  createData('THARUN', 356, "BA", "SDM COLLEGE UJIRE", 2)
];

export default function BasicTable() {
  return (
    <div>
      <Header/>
      <div className='table-container'>
        <TableContainer component={Paper} classNameName='mui-table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell>STUDENT</TableCell>
            <TableCell align="right">ROLL No</TableCell>
            <TableCell align="right">CLASS&nbsp;</TableCell>
            <TableCell align="right">college</TableCell>
            <TableCell align="right">year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.roll}</TableCell>
              <TableCell align="right">{row.className}</TableCell>
              <TableCell align="right">{row.college}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>

  );
}