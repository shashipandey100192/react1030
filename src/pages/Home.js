import React, { Fragment } from "react";
import './style.css';

const Myhome = ()=>{
    return "h1";
}


export const Myhome1 = ()=>{
    return <h1>welcome to react js</h1>;
}

export const Myhome2 = ()=>{
    return(
        <div>
            <h2>this is heading</h2>
            <h3>this is heading three</h3>
        </div>
    )
}


export const Myhome3 = ()=>{
    return(
        <>
            <h2>this is fragment element</h2>
            <h3>this is heading three </h3>
        </>
    )
}


export const Myhome4 = ()=>{
    return(
        <Fragment>
            <h2 className="first">this is fragment element7777777777777777 </h2>
            <h3>this is heading three99999999999999999 </h3>
            <p>The World Wide Web, commonly known as the Web, is an information system enabling documents 
                and other web resources to be accessed over the Internet. Documents and downloadable media 
                are made available to the network through web servers and can be accessed by programs such as 
                web browsers.The World Wide Web, commonly known as the Web, is an information system enabling 
                documents and other web resources to be accessed over the Internet. Documents and downloadable 
                media are made available to the network through web servers and can be accessed by programs such as web browsers.The World Wide Web, commonly known as the Web, is an information system enabling documents and other web resources to be accessed over the Internet. Documents and downloadable media are made available to the network through web 
                servers and can be accessed by programs such as web browsers.</p>
        </Fragment>
    )
}

export default Myhome