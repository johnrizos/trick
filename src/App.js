import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuLeft from './components/menu/menuLeft';
import Header from './components/header/Header';
import Home from './pages/home/Home';
// import logo from './logo.svg';


const App = props => {

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


export default App;
