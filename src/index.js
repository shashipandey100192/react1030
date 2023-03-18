import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';
import Landingpage from './components/Landingpage';
import Form1 from './components/listofform/Form1';
import Form2 from './components/listofform/Form2';
import Form3 from './components/listofform/Form3';
import Mydata from './components/Mydata';
import Myform from './components/Myform';
import Myfunction from './components/Myfunction';
import Navbar from './components/Navbar';
import Abc from './components/Page1';
import Service from './components/Service';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='' element={<Landingpage/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='form' element={<Myform/>}/>
            <Route path='form/form1' element={<Form1/>}/>
            <Route path='form/form2' element={<Form2/>}/>
            <Route path='form/form3' element={<Form3/>}/>
          <Route path='*' element={<Errorpage/>}/>
          <Route path='page' element={<Abc/>}/>
          <Route path='mystate' element={<Myfunction/>}/>
          <Route path='mydata' element={<Mydata/>}/>
      </Routes>  
        
    </BrowserRouter>
  </React.StrictMode>
);


