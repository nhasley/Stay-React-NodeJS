import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './components/nav'
import HouseList from './components/house-list'
import EditHouse from './components/edit-house'
import CreateHouse from './components/create-house'
import CreateUser from './components/create-user'


function App() {
  return (
    <Router>
    <Nav />
    <br />
    <Route path='/' exact component={HouseList}/>
    <Route path='/edit/:id' exact component={EditHouse}/>
    <Route path='/create' exact component={CreateHouse}/>
    <Route path='/user' exact component={CreateUser}/>
    </Router>
  );
}

export default App;
