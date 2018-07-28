import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import Dough from './Components/RouteComponents/DoughComponent/Dough';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Pizza Picker</h1>
        <Route exact path='/' render={() => <h2><Link to='/dough'>Get Started</Link></h2> }/>
        <Route path='/dough' render={() => <Dough />}/>
      </div>
    );
  }
}

export default App;
