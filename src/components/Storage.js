import React, { Fragment, useState } from 'react';

function Storage1() {

const [lv,lfun]=useState("defaultvalue");

const loca = (u)=>{
        console.log(u.target.value);
        lfun(u.target.value);
}
localStorage.setItem("mykey",lv);
sessionStorage.setItem("mykey",lv);

  return (
    <Fragment>
        <input type="number" value={lv} onInput={loca} />
    </Fragment>
  )
}

export default Storage1