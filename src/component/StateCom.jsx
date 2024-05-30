import React, { useState } from 'react';
import './name.css'
import Button from '@mui/material/Button';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { TextField } from '@mui/material';
import Header from './header';

export default function StateCom() {
  const [count,setCount] = useState(1)
  const Counter=()=>{
    setCount(count+1)
  }
  const [name,setName]=useState("Sarath")
  const changename=()=>{
    setName("Sharan")
  }
  // const [email,setEmail]=useState("")
  // const changeemail=(e)=>{
  //   console.log(e.target.value)
  //   setEmail(e.target.value)
  // }
  const [color,setColor]=useState("RED")
  const Changecolor=(e)=>{
    setColor(e.target.value)
  }
  const [no,setNo]=useState("")
  const changeNo=(e)=>{
    setNo(e.target.value)
  }
  const [mail,setEmail]=useState("")
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }
  return (
    <div>
      <Header/>
      <div className='state-div'>
      <h1 className='heading'>State</h1>
      <h2 className='sub-heading'>Count:{count}</h2>
      <Button  className='' onClick={Counter}>+</Button >
      <h2 className='sub-heading'>My name is {name}</h2>
      <Button   className='' onClick={changename}>CHANGE NAME</Button >
      {/* <input type="text" onChange={changeemail} placeholder='Enter the Email' />
      <h2 className='sub-heading'>{email}</h2> */}
      <h2 className='sub-heading' style={{color:color}}>MY FAVORITE COLOR IS :{color}</h2>
      <div className='btn-div'>
      <Button sx={{backgroundColor:"green"}} variant="contained"  value='Green'  onClick={Changecolor}>GREEN</Button >
      <Button sx={{backgroundColor:"yellow",color:'black'}} variant="contained"  value='Yellow' onClick={Changecolor}>YELLOW</Button >
      <Button sx={{backgroundColor:"orange"}} variant="contained" value='Orange'  onClick={Changecolor}>ORANGE</Button >
      <Button sx={{backgroundColor:"blue"}} variant="contained"  value='Blue'  onClick={Changecolor}>BLUE</Button >
      </div>

      <br />
      <TextField label="Phone" variant="standard" onChange={changeNo} placeholder='Enter Phone' />
      <TextField label="Email" variant="standard" onChange={changeEmail} placeholder='Enter Email' />
      <br />
      <h2 className='sub-heading'>Phone:{no}</h2>
      <h2 className='sub-heading'>Email:{mail}</h2>


    </div>
    </div>

  )
}
