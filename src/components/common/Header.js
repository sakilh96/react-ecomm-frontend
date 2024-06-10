import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
 

  return (
    <div className="header">
      <ul className="nav-list">
        <li className="nav-item" >
          Products
          
            <ul className="dropdown-content" >
              <li className="nav-item">
                <Link className="nav-link" to="/add-products">Add Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/update-products">Update Products</Link>
              </li>
            </ul>
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </li> */}
        {/* <li className="nav-item">
           <Link className="nav-link" to="/">Login</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
