import React, { useState,useEffect } from 'react';
import Header from './header'
import { Button } from '@mui/material'
import './name.css'
export default function Effect() {
    const [count,setCount] = useState(1)
    const Counter=()=>{
        setCount(count+1)
    }
    const [square,setSquare]= useState(0)
    useEffect(()=>{
        setSquare(count*count)
    },[count])

  return (
    <div>
      <Header/>
      <div className='state-div'>
      <h1 className='heading'>This is the Effect Page</h1>
      <h2 className='sub-heading'>Count:{count}</h2>
      <h2 className='sub-heading'>SQUARE:{square}</h2>
      <Button  className='' variant="contained" onClick={Counter}>START</Button >


      </div>
    </div>
  )
}
