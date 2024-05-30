import React from 'react'
import './name.css'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './header'

import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import DescriptionIcon from '@mui/icons-material/Description';
// import CodeIcon from '@mui/icons-material/Code';
// import ImportExportIcon from '@mui/icons-material/ImportExport';
import CreditCardIcon from '@mui/icons-material/CreditCard';
// import TouchAppIcon from '@mui/icons-material/TouchApp';
import TableChartIcon from '@mui/icons-material/TableChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import ApiIcon from '@mui/icons-material/Api';
// import CardActions from '@mui/material/CardActions';




export default function home() {
  return (
    <div className='home'>
      <Header/>
      <div className=' home-div'>
        
      <div className='link-div'>
      <Link className='link-text' to="/"><Button className='' variant="contained" >list</Button></Link>   
      <Link className='link-text' to="/api"><Button variant="outlined" startIcon={<ApiIcon />}>API</Button></Link>
      <Link className='link-text' to="/card"><Button variant="outlined" startIcon={<CreditCardIcon />}>Card</Button></Link>
      <Link className='link-text' to="/recipe"><Button variant="outlined" startIcon={<ApiIcon />}>Recipe</Button></Link>
      <Link className='link-text' to="/state"><Button variant="outlined" startIcon={<FormatListNumberedIcon />}>State</Button></Link>
      <Link className='link-text' to="/effect"><Button variant="outlined" startIcon={<FormatListNumberedIcon />}>Effect</Button></Link>
      <Link className='link-text' to="/employee"><Button variant="outlined" startIcon={<FormatListNumberedIcon />}>Employee</Button></Link>
      <Link className='link-text' to="/resume"><Button variant="outlined" startIcon={<DescriptionIcon />}>Resume</Button></Link>
      <Link className='link-text' to="/shopping"><Button variant="outlined" startIcon={<ShoppingCartIcon />}>shopping</Button></Link>
      <Link className='link-text' to="/localstorage"><Button variant="outlined" startIcon={<ShoppingCartIcon />}>LocalStorage</Button></Link>
      <Link className='link-text' to="/card"><Button variant="outlined" startIcon={<CreditCardIcon />}>Card</Button></Link>
      <Link className='link-text' to="/table"><Button variant="outlined" startIcon={<TableChartIcon />}>Student</Button></Link>
      </div>
    </div>
    <Footer/>


    </div>
      )
}
