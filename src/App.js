import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import userService from './utils/userService';
// import tokenService from './utils/tokenService';
import NavBar from './components/NavBar';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Profile from './components/profile'
import HomePage from './pages/HomePage'
import Listings from './components/listings'
import EditListing from './components/edit-listing'
import CreateListing from './components/create-listing'


import './App.css'

export default class App extends Component {
    constructor() {
      super();
      this.state = {
        ...this.getInitialState(),
        // Initialize user if there's a token, otherwise null
        user: userService.getUser()
      };
    }
  
    getInitialState() {
      return {
  
      };
    }
  
     /*--- Callback Methods ---*/
    handleLogout = () => {
      userService.logout();
      //will remove user object from state
      this.setState({ user: null });
    }
  
    handleSignupOrLogin = () => {
      this.setState({user: userService.getUser()});
    }
  
    /*--- Lifecycle Methods ---*/
  
  
    render() {
      return (
        <Router>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
         
          <br />
          <div className="main">
          <Route exact path="/" render={() => (<HomePage user={this.state.user}/>)} />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route exact path="/profile" render={() => (<Profile user={this.state.user}/>)} />
            <Route exact path="/listings" component={Listings} />
          </div>
          {/* <div className="listform"> */}
            <Route exact path="/edit/:id" component={EditListing} />
            <Route exact path="/create" component={CreateListing} />
          {/* </div> */}
        </Router>
      );
    }
}
