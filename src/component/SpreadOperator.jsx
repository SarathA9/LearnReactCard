import React from 'react'
import './name.css'
export default function SpreadOperator() {
    const num1=[1,2,3,4,5];
    const num2=[6,7,8,9];
    const num3=[...num1,...num2];
    const myvehicle={
        brand:"Ford",
        model:"Mustang",
        year:2020,
        color:"Red"
      }
      const updatevehicle={
        version:1.2,
        engine:"Turbo V8",
        top_speed:260,
        color:"Yellow"
      }
      const myupdatedvehicle={...myvehicle,...updatevehicle}
      const {brand,model,engine}=myupdatedvehicle;
    console.log(num3);
    console.log(myupdatedvehicle);

    const fruits=["apple","banana","mango","kiwi","orange"];
    const [a,b,...c]=fruits

  return (
    <div>
        <hr />
      <h1 className='heading'>Spread Operator</h1>
      <h2 className='sub-heading'>{num3}</h2>
      {/* <h2 className='sub-heading'>{myvehicle}</h2> */}
      <h2 className='sub-heading'>{myupdatedvehicle.brand}</h2>
      <h2 className='sub-heading'>{brand}</h2>
      <h2 className='sub-heading'>{model}</h2>
      <h2 className='sub-heading'>{engine}</h2>
      <h2 className='sub-heading'>{a}</h2>
      <h2 className='sub-heading'>{b}</h2>
      <h2 className='sub-heading'>{c}</h2>
    </div>
  )
}
