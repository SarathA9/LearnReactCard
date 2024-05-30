import React from 'react';
import './name.css'
let btn_style={color:'red',position:'relative',left:'50%',top:'0px',backgroundColor:'trasparent'};
export default function name() {
  function Toggle(){
    alert('User has toggled the button!')
  }
  const arrow = (a,b)=> alert ("Hey there!"+a+"  I'm "+b+"years old")
//   arrow("Sarath Here!",20)
  const Printer =(name,phone) => {
    alert("My Name is"+name+" and my phone number is "+phone)
  }
  return (
    <div>
      <h2 style={{color:'green',textAlign:'center',fontFamily:'sans-serif',textTransform:'uppercase'}}>--Sarath here--</h2>
      <button onClick={()=>arrow("Sarath Here!",20)} style={btn_style} className='btn_style'>Know Me!</button>
      <br />
      <button onClick={Toggle} style={btn_style} className='btn_style'>Toggle More!</button>
      <br />
      <button onClick={()=>Printer("Sarath","9207X1X115")} style={btn_style} className='btn_style'>Phone Number!</button>
    </div>
  );
}
