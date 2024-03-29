import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';

import Axiosapidata from './components/Axiosapidata';
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
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton1 from './components/Auth0login';
import Storage1 from './components/Storage';
import Detailspage from './components/Detailspage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myfatchpage from './components/Myfatchpage';
import Myfetchdataview from './components/Myfetchdataview';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Myredux } from './components/Myreduxpage';

const  Myloadingpage = lazy(()=> import('./components/Mylazyloadingpage'));
const Myloader = lazy(()=> import('./components/Myloaderdesign'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
  <Provider store={store}>
   <Auth0Provider
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="WDIMkCDYVGIgf5x0ek4qjmmVDzFiQaNZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
    
    <Navbar/>
      <Routes>
          {/* <Route path='' element={<Landingpage/>}/> */}
          <Route path='' element={<LoginButton1/>}/>
          <Route path='service' element={<Service/>}/>
          <Route path='form' element={<Myform/>}/>
            <Route path='form/form1' element={<Form1/>}/>
            <Route path='form/form2' element={<Form2/>}/>
            <Route path='form/form3' element={<Form3/>}/>
          <Route path='page' element={<Abc/>}/>
          <Route path='mystate' element={<Myfunction/>}/>
          <Route path='mydata' element={<Mydata/>}/>
          <Route path="axiosapi" element={<Axiosapidata/>}/>
          <Route path="storage" element={<Storage1/>}/>
          <Route path="axiosapi/:id" element={<Detailspage/>}/>
          <Route path="fetchdata" element={<Myfatchpage/>}/>
          <Route path="fetchdata/:id" element={<Myfetchdataview/>}/>
          <Route path="myredux" element={<Myredux/>}/>
          <Route path='mylazy' element={<Suspense fallback={<Myloader/>}>
              <Myloadingpage></Myloadingpage>
          </Suspense>}>
          </Route>
          <Route path='*' element={<Errorpage/>}/>
      </Routes>   
    </BrowserRouter>
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);


