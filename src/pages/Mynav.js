import React from "react";
import './style.css';

const Mynavbar =()=>{
    const a = "green";
    const b = 50;

const myfuntion = ()=>{
        alert("hi");
}



    return(
        <>
            <ul className="navbar">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                
            </ul>
            <h1 style={{color:'red'}}>this is inline{10+60} style</h1>
            <h1 style={{backgroundColor:a,color:'red',height:`${b}px`}}>this is inline{10+60} style</h1>
            <button type="button" onClick={myfuntion}>event binding</button>
        </>
    )

}

export default Mynavbar

