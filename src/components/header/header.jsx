import React, { Component } from 'react';
import './header.scss';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state ={
            menu: false
        };
    }
    openLeftMenu = ()=>{
        if(this.state.menu){
            this.setState({menu:false}, ()=>{document.querySelector('.menu-left ').classList.remove("display-left-menu");
            console.log('work true :', this.state.menu);
        });

        }else{
            this.setState({menu:true},()=>{document.querySelector('.menu-left ').classList.add("display-left-menu");});
            console.log('work false:', this.state.menu);

        }
    }

    render(){
        return(
            <nav className="navbar">
            <input onClick={this.openLeftMenu} id="toggle" type="checkbox">
            </input>
            <span></span>
            <span></span>
            <span></span>
            </nav>
        );
    }
}

export default Header;
