export let name="Sarath";
export let phone=92075656;
let state="Kerala";
let pin=674524;
export  {state,pin}

const PrintHello=() =>{
    alert("Guten Tag!");
}
const add=(a,b)=>{
    let result=a+b;
    alert("Result:"+result);
}
const sub=(a,b)=>{
    let result=a-b;
    alert("Result:"+result);
}
const mul=(a,b)=>{
    let result=a*b;
    alert("Result:"+result);
}
const div=(a,b)=>{
    let result=a/b;
    alert("Result:"+result);
}
export {add,sub,mul,div};

export default PrintHello;