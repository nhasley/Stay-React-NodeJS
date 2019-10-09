import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
  
    //if a user is logged in show logout, else show login/signup
    let nav = props.user ?
      <div className="right">
         <li>
               <Link to="/listings">
                 Listings
               </Link>
             </li>
             <li >
               <Link to="/create">
                 Add Listing
               </Link>
             </li>
         <li>
           <Link to="/profile">Profile</Link>
         </li>
        <li>
        <Link to='/login' onClick={props.handleLogout}>Log Out</Link>
        </li>
      </div>
      :
      <div className="right">
        <li>
        <Link to='/login'>Log In</Link>
        </li>
        <li>
        <Link to='/signup'>Sign Up</Link>
        </li>
      </div>
  
    return (
      <nav>
        <div>
          <ul>
            <li className="logo">
              <Link to="/">STAY</Link>
            </li>
            {nav}
          </ul>
        </div>
      </nav>
    );
  };

export default NavBar;

