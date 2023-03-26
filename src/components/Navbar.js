import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
   
        <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="form">React form</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="service">service page</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="page">classComponent</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="mystate">usestate</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="mydata">json data</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="axiosapi">axios</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="storage">Storage</Link>
            </li>
           
        </ul>
        </div>
    </div>
    </nav>
    
  )
}

export default Navbar