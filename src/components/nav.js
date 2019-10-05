import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <div className="right">
        
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </div>
    );

    const userLink = (
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
          <a href="/" onClick={this.logOut.bind(this)}>
            Logout
          </a>
        </li>
      </div>
    );

    return (
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">STAY</Link>
            </li>
            {localStorage.usertoken ? userLink : loginRegLink}
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav)