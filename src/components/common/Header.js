import React from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = (props) => {

  const checkLogin = useSelector((state) => state.userReducers.userToken);

  const navigate = useNavigate();
  const logout = () => {
    navigate('/');
    props.logoutUser();
    toast(`You have logged out`);
  }

  return (
    <div className="header">
      <ul className="nav-list">
        <li className="nav-item" >
          Products
          
            <ul className="dropdown-content" >
            <li className="nav-item">
                <Link className="nav-link" to="/products">All Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/add-products">Add Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products/update-products">Update Products</Link>
              </li>
              
            </ul>
             
          
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Login</Link>
        </li> */}
        {
        checkLogin ?
         <li className="nav-item">
          <Link className="nav-link" onClick={logout} >Logout</Link>
          
        </li> : ''

        }
            
         
       
      </ul>
    </div>
  );
}

export default Header;
