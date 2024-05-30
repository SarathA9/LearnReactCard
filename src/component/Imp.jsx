import React from 'react';
import {name} from './Exp';
import {phone} from './Exp';
import {add,sub,mul,div} from './Exp'
import PrintHello,{state,pin} from './Exp'
import { Link } from 'react-router-dom';

import './name.css'
export default function Imp() {
  // n1=document.getElementById('n1');
  // n2=document.getElementById('n2');

  return (
    <div>
        <h1 className='heading'>Import</h1>
        <h2 className='sub-heading'>Name: {name}</h2>
        <h2 className='sub-heading'>Phone: {phone}</h2>
        <h2 className='sub-heading'>State: {state}</h2>
        <h2 className='sub-heading'>PinCode: {pin}</h2>
        <button className='btn_style' onClick={PrintHello}>Toggle Me</button>
        {/* <input type="number" id='n1'/>
        <input type="number" id='n2'/> */}
        <button className='btn_style' onClick={()=>add(1,2)}>Add</button>
        <button className='btn_style' onClick={()=>sub(3,4)}>Sub</button>
        <button className='btn_style' onClick={()=>mul(7,3)}>mul</button>
        <button className='btn_style' onClick={()=>div(5,6)}>Add</button>
        {/* <button className='btn_style' onClick={sub(n1,n2)}>Add</button>
        <button className='btn_style' onClick={mul(n1,n2)}>mul</button>
        <button className='btn_style' onClick={div(n1,n2)}>Add</button> */}

    </div>
  )
}
