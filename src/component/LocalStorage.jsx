import React from 'react'
import './name.css'
import Header from './header'
import { Button } from '@mui/material'
import TextField from '@mui/material'
// import { name } from './Exp'

export default function LocalStorage() {
    //Cookies
    // localStorage.setItem(key,value)
    // localStorage.removeItem(key) main key concept of the localstorage (should pass the key and value using the "")
    // localStorage.getItem(key)
    // localStorage.setItem("phone","9897826374")
    const AddSarath=()=>{
        localStorage.setItem("name","Sharan A")
    }
    const RemSharan=()=>localStorage.removeItem("name")
    const AddNo=()=>localStorage.setItem("phone","798798787")
    const GetNo=()=>{
        let no=localStorage.getItem("name");
        console.log(no);
        alert(no);
        <h2>{no}</h2>
    }
  return (
    <div>
    <Header />
    <div className='state-div' >
      <h1 className='heading'>localstorage page</h1>
      <div className='btn-div' style={{display:"flex",flexDirection:"column"}}>
      <Button variant="outlined" onClick={AddSarath}>ADD SHARAN</Button>
      <Button variant="outlined" onClick={RemSharan}>REMOVE SHARAN</Button>
      <Button variant="outlined" onClick={AddNo}>ADD NUMBER</Button>
      <Button variant="outlined" onClick={GetNo}>GET NAME</Button>
      </div>



    </div>
    </div>

  )
}
