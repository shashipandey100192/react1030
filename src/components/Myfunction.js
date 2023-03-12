import React, { useEffect, useState } from 'react';
import Mycondition from './Mycondition';

function Myfunction() {

// create state
const [a, b] =useState("this is default value");


//create function for update state
const abc = ()=>{
    b("this is updated value");
}

const [inputval,inputfunc]=useState(0);
const mynumber = (e)=>{
    // console.log(e.target.value);
     console.log(e);   // get current object 
    inputfunc(e.target.value); // get current object value
}


const xyz= ()=>{
  // alert("this is funcction");
  console.log("hiii");
}

useEffect(()=>{
  xyz();
  console.log("hiimkljkkon");
});


const [x,y] =useState("red");
const mycolor = (inputcolor)=>{
    console.log(inputcolor.target.value);
    y(inputcolor.target.value);
}



  return (
  
    // <div style={{color:'red','background-color':'green',fontSize:50}}>Myfunction
    <>
    <div style={{backgroundColor:`${x}`}}>Myfunction
        <h1>{a}</h1>
        <input type="button" onClick={abc} value="changestate" />
        <hr/>
        <input type="number" onChange={mynumber} />
        <p>{inputval}</p>
        <input type="text" value={inputval+10} />

    <input type="color" onChange={mycolor}></input>
    </div>
     <Mycondition  value={inputval} />
     </>
  )
}

export default Myfunction