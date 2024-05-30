import React from 'react'
import './name.css'

export default function Destructuring() {
  const cars = ["Ford","BMW","Benz","Mistubishi","Volvo"];
  const car1=cars[0];//old Method of Destructuring
  const car2=cars[1];//old Method of Destructuring

  const [a,b]=cars //New method of Destructuring
  const nbrs=[1+1,10+10,34+16];
  const [n1,n2,n3]= nbrs;

  //Object
  const myvehicle={
    brand:"Ford",
    model:"Mustang",
    year:2020,
    color:"Red"
  }
  // const {brand,model,year,color}=myvehicle;

  const mynewvehicle={
    brand:"Ford",
    model:"Mustang",
    year:2020,
    color:"Red",
    register:{
      city:"Kochi",
      state:"Kerala",
      country:"India"
    }
  }
  // const {city,state,country}=mynewvehicle.register;
  //OR
  const {brand,model,year,color,register:{city,state,country}}=mynewvehicle;

  return (
    <div>
      <hr />
      <h1 className='heading'>Array Methods</h1>
      <h2 className='sub-heading'>{car1}</h2>
      <h2 className='sub-heading'>{car2}</h2>
      <h2 className='sub-heading'>{a}</h2>
      <h2 className='sub-heading'>{b}</h2>
      <h2 className='sub-heading'>{n1}</h2>
      <h2 className='sub-heading'>{n2}</h2>
      <h2 className='sub-heading'>{n3}</h2>
      <h2 className='sub-heading'>{brand}</h2>
      <h2 className='sub-heading'>{model}</h2>
      <h2 className='sub-heading'>{year}</h2>
      <h2 className='sub-heading'>{color}</h2>
      <h2 className='sub-heading'>Registered at {city} {state} {country}</h2>


      <hr />


    </div>
  )
}
