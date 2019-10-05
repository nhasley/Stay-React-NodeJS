import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/nav'
import HouseList from './components/house-list'
import EditHouse from './components/edit-house'
import CreateHouse from './components/create-house'
import Register from './components/register'
import Login from './components/login'
import Profile from './components/profile'
import Landing from './components/landing'
import './App.css'

function App() {
  return (
    <Router>
    <Nav />
    <Route exact path="/" component={Landing} />
    <br />
    <div className="main">
    <Route exact path='/listings'  component={HouseList}/>
    <Route exact path='/edit/:id' component={EditHouse}/>
    <Route exact path='/create' component={CreateHouse}/>
   
    <Route exact path='/login' component={Login}/>
    <Route exact path='/register' component={Register}/>
    <Route exact path='/profile' component={Profile}/>
    </div>
    </Router>
  );
}

export default App;
