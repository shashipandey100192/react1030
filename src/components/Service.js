import React from 'react';
import Contactus from './Contactus';

function Service() {
  const ducat ="this is my props"
  return (
    <div>
      <h1>this is my service page</h1>
      <Contactus xyz={ducat} abc="this is computer" />


    </div>
  )
}

export default Service