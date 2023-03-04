import React from 'react';
import { Link, Outlet } from 'react-router-dom';




function Myform() {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-3'>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      
      <span className="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <Link to="form1" className="nav-link active" aria-current="page">
          
          form design1
        </Link>
      </li>
      <li>
        <Link to="form2" className="nav-link text-white">
        
         form design2
        </Link>
      </li>
      <li>
        <Link to="form3" className="nav-link text-white">
          
          form design 3
        </Link>
      </li>
      <li>
        <Link to="sdf" className="nav-link text-white">
          
          Products
        </Link>
      </li>
      <li>
        <Link to="sjkdhf" className="nav-link text-white">
          
          Customers
        </Link>
      </li>
    </ul>
    <hr />
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>

        </div>
        <div className='col-9'>
        <Outlet/>
      
        </div>
        </div>
    </div>
  )
}

export default Myform