import { click } from '@testing-library/user-event/dist/click';
import React from 'react'
import './name.css'

export default function TerinaryOperator() {
  const Click=(item) =>{
    // if(item=="Back"){
    //   alert("You have clicked on Back Button");
    // }
    // else{
    // item=="Left"?alert("You have turned LEFT"):alert("You have turned RIGHT");
    // }
    item=="Left"?alert("You have turned LEFT")
    :item=="Right"?alert("You have turned RIGHT")
    :alert("You have clicked on Back Button");
  }
  let dark=false;
  return (
    
    <div className='container'>
      <br />
      <div>
        <h1 className='heading'>Terinary Operator</h1>
      </div>
      <div className='sub-container'>
      <button className='btn_style' onClick={()=>Click("Left")}>Left</button>
      <button className='btn_style' onClick={()=>Click("Right")}>Right</button>
      <button className='btn_style' onClick={()=>Click("Back")}>Back</button>
      <h1 style={{backgroundColor:dark?"black":'white',color:dark?"white":"black"}}>Hello I'm Sarath</h1>
      </div>



    </div>
  )
}
