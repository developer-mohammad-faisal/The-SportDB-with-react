import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar align-items-center navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand " href="#"><img width={'245px'} src={'https://www.thesportsdb.com/images/logo32.png'} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-4 mb-lg-0">
        <li className="nav-item d-flex">
          <a className="nav-link active text-white" aria-current="page" href="#">Browse</a>
          <a className="nav-link active text-white" aria-current="page" href="#">Contribute</a>
          <a className="nav-link active text-white" aria-current="page" href="#">Devs</a>
          <a className="nav-link active text-white" aria-current="page" href="#">Forum</a>
          <a className="nav-link active text-white" aria-current="page" href="#">Login</a>
          <a className="nav-link active text-white" aria-current="page" href="#">Signup</a>
        </li>
      </ul>
      <div className="d-flex">
        <input className='form-control me-2' type="search" placeholder='Search' aria-label='Search' />
        <button className="btn btn-outline-success  text-white" type="submit">Search</button>
      </div>
    </div>
  </div>
</nav>

    </div>
  );
};

export default Navbar;