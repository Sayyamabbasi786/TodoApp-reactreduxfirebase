import React from 'react';
import {Link} from 'react-router-dom';


function NavItems() {

  return (
    <React.Fragment>
        <Link to ="/signin" className="nav-link text-white">
            Sign Out
        </Link>
        <Link to ="/signin" className="nav-link text-white">
            Sign In
        </Link>
        <Link to ="/signup" className="nav-link text-white">
            Sign Up
        </Link>
    </React.Fragment>
   
  );
}

export default NavItems;
