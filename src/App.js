import React, { Component } from 'react';
import Menu from './components/menu/menu-left';
import Header from './components/header/header';
// import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    
  }
  render(){
    return (
  
      <div className="App">
        <Header></Header>
        <Menu />
      </div>
    );

  }
}

export default App;
