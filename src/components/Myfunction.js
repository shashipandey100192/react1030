import React, { useState } from 'react';

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



  return (
    <div>Myfunction
        <h1>{a}</h1>
        <input type="button" onClick={abc} value="changestate" />
        <hr/>
        <input type="number" onChange={mynumber}/>
        <p>{inputval}</p>
        <input type="text" value={inputval+10} />
    </div>
  )
}

export default Myfunction