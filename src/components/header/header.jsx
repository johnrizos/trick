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

            <div id='div-span'>
            <input onClick={this.openLeftMenu} id="toggle" type="checkbox">
            </input>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='right-navbar'>
                <ul>
                    <li><button type="button" className='btn-log-reg'>Login/Register</button></li>
                    <li><button type="button" className='btn-log-reg'>Login/Register</button></li>
                    <li><button type="button" className='btn-log-reg'>Login/Register</button></li>

                </ul>
            </div>
            </nav>

        );
    }
}

export default Header;
