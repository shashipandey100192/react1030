import React from 'react'
import Myform from './Myform';

function Mycondition(props) {
let a = props.value;
    if(a>=10)
    {
        return <h1>this is first condition{a} {props.value}</h1>
    }
    else if(a>=8)
    {
        return(
            <>
            <h2>this is second return</h2>
            <h4>this is heading four</h4>
            </>
        )
    }else if(a>=5)
    {
        return <Myform />
    }
    else{
        return alert("this is default");
    }


}

export default Mycondition