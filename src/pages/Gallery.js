import React, { Fragment } from 'react';
import xyz from '../images/img3.jpg';
import xy1 from '../images/img4.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"

function Gallery1() {
   const a = 200;
   const b = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-aeAUb-RoZorCsp8LOxln1L63RLzh33nXJlNPwcVTDzezZprJrTxTgdpKEkUJRCxVad5UGK_gUM&usqp=CAU&ec=48600113";
    return (
    <Fragment>
        <h1>welcome to react gallery</h1>
        <img src={xyz} alt="logo"/>
        <img src={xy1} width={a} alt="abc" />
        <img src="photos/img6.jpg" alt='jsdhf'/>
        <img src="photos/img5.jpg" alt="gallery" />
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-aeAUb-RoZorCsp8LOxln1L63RLzh33nXJlNPwcVTDzezZprJrTxTgdpKEkUJRCxVad5UGK_gUM&usqp=CAU&ec=48600113' alt='onlineimage' />
        <img src={b} alt="my gallery " />
    
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p className='h1'>this is bootstrap </p>
                </div>
            </div>

            <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="h-100 p-5 text-bg-dark rounded-3">
          <h2>Change the background</h2>
          <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
          <button className="btn btn-outline-light" type="button">Example button</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Add borders</h2>
          <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
          <button className="btn btn-outline-secondary" type="button">Example button</button>
        </div>
      </div>
    </div>
        </div>

        <header className="p-3 mb-3 border-bottom">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
       

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><link className="nav-link px-2 link-secondary">Overview</link></li>
          <li><a className="nav-link px-2 link-dark">Inventory</a></li>
          <li><a className="nav-link px-2 link-dark">Customers</a></li>
          <li><a className="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="dropdown text-end">
          <a className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item">New project...</a></li>
            <li><a className="dropdown-item">Settings</a></li>
            <li><a className="dropdown-item">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>

    </Fragment>
  )
}

export default Gallery1