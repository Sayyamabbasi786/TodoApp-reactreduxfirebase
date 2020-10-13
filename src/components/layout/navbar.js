import React from 'react';
import {Link} from 'react-router-dom';
import NavItems from './NavItems'


function Navbar() {
  return (
    
    <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
    <Link to ="/" className="navbar-brand">
        <h3>TODO APP</h3>
    </Link>
    
    <NavItems />
    </nav>
  );
}

export default Navbar;
