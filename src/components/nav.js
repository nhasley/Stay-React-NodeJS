import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render(){
        return (
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">
              STAY
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link ">
                    Houses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link ">
                    Add Listing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/user" className="nav-link ">
                    Sign Up
                  </Link>
                </li>
              </ul>
              {/* <form class="form-inline">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn" type="submit">
                  Search
                </button>
              </form> */}
            </div>
          </nav>
        );
    }
}