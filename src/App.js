import React from 'react';
import './App.css';
import {Route, Switch} from'react-router-dom';
import Home from './component/Home';
import Rooms from './component/Rooms';
import SingleRoom from './component/SingleRoom';
import ErrorPage from './component/ErrorPage';
import Navbar from './component/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/rooms' exact component={Rooms}/>
        <Route path='/rooms/:roomType' exact component={SingleRoom}/>
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
}

export default App;
