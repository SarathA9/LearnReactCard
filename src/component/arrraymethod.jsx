import React from 'react'
import './name.css'

export default function arrraymethod() {
    const cars = ["Ford","BMW","Benz","Mistubishi","Volvo"]
    let mapping = cars.map((item,index)=><h1 key={index}>{++index+": "}{item}</h1>)
    // let mapping = cars.map((item,index)=><h1 key={index}>{++index+": "}{item}</h1>)

    let StudentData=[
      {name:"Sarath",reg:"210956",phone:"9387687",email:"sar@gmail.com"},
      {name:"Sharan",reg:"210957",phone:"4587687",email:"sharan@gmail.com"},
      {name:"Karthik",reg:"210954",phone:"5387687",email:"karthik@gmail.com"},
      {name:"Dhanush",reg:"210955",phone:"3387687",email:"sooraj@gmail.com"},
      {name:"Sooraj",reg:"210952",phone:"5587687",email:"dhanush@gmail.com"}
    ]
  return (
    <div className='container'>
      <h1 className='heading'>Array Methods</h1>
      {/* <h2>{mapping}</h2> */}
      <div className='sub-container'>
      <table>
        <tr>
          <th>SI.No</th>
          <th>Cars</th>
        </tr>
        {cars.map((item,index)=>{
          return(
             <tr>
               <td>{++index} </td>
               <td>{item}</td>
             </tr>
          )
        })}
      </table>
      <table>
        <tr>
          <th>SI.No</th>
          <th>Name</th>
          <th>Reg.No</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {StudentData.map((value,index)=>{
          return(
            <tr>
              <td>{++index}</td>
              <td>{value.name}</td>
              <td>{value.reg}</td>
              <td>{value.phone}</td>
              <td>{value.email}</td>
            </tr>
          )
        })}
      </table>
      </div>

    </div>
  )
}
