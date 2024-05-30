import React from 'react';
import './name.css'

export default function Props() {
  const Print=(props)=><h2>Name: {props.name} <br />Phone: {props.phone}</h2>
  const Print1=({name,phone})=><h2>Name: {name}-{phone}</h2>
  const Fruits=["Apple","banana","Graps","Pappaya"];
  const FruitsDisplay=({fruit})=><li className='list-upper'>{fruit}</li>
  let PrintTotal=Fruits.length;
  const FruitsTotal=()=><h2>I have {PrintTotal} Fruits</h2>;

  console.log(PrintTotal);

  return (
    <div>
      <h1 className='heading'>This is the props page</h1>
      {/* {print("Sarath")} */}
      <h2  className='sub-heading'><Print name="SARATH A" phone="9207518115"/></h2>
      <h2  className='sub-heading'><Print1 name="SARATH A" phone="9207518115"/></h2>
      <h2  className='sub-heading'><FruitsTotal /></h2>      
      <ol className='list-upper'>
        {Fruits.map((item)=><FruitsDisplay fruit={item}/>)}
      </ol>
    </div>
  )
}
