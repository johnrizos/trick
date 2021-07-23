import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuLeft from './components/menu/menuLeft';
import Header from './components/header/header';
import Home from './pages/Home/Home';
// import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (

      <div className="App">
        <Header></Header>
        <MenuLeft />
        <Router>
          <Route path="/">
            <Home />
          </Route>
        </Router>

      </div>
    );

  }
}

export default App;
