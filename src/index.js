import React from 'react';
import ReactDOM from 'react-dom/client';
import Myhome, { Myhome2, Myhome1,Myhome3,Myhome4 } from './pages/Home';
import Mynavbar from './pages/Mynav';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Mynavbar></Mynavbar>
   <Myhome></Myhome>
   <Myhome1></Myhome1>
   <Myhome2/>
   <Myhome3/>
   <Myhome4 />
  </React.StrictMode>
);


