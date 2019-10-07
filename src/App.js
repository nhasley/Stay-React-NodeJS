import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/nav'
import Register from './components/register'
import Login from './components/login'
import Profile from './components/profile'
import Landing from './components/landing'
import Listings from './components/listings'
import EditListing from './components/edit-listing'
import CreateListing from './components/create-listing'
import './App.css'

function App() {
  return (
    <Router>
    <Nav />
    <Route exact path="/" component={Landing} />
    <br />
    <div className="main">
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/profile' component={Profile}/>
    <Route exact path='/listings' component={Listings}/>
    <Route exact path='/edit/:id' component={EditListing}/>
    <Route exact path='/create' component={CreateListing}/>
    </div>
    </Router>
  );
}

export default App;
