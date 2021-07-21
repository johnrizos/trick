import React, { Component } from 'react';
import './header.scss';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            authetication: true
        };
    }
    openLeftMenu = () => {
        if (this.state.menu) {
            this.setState({ menu: false }, () => {
                document.querySelector('.menu-left ').classList.remove("display-left-menu");
                console.log('work true :', this.state.menu);
            });

        } else {
            this.setState({ menu: true }, () => { document.querySelector('.menu-left ').classList.add("display-left-menu"); });
            console.log('work false:', this.state.menu);

        }
    }

    render() {
        return (
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} style={{'height':'80px'}} alt='logo' />
                </div>
                <div id='div-span'>
                    <input onClick={this.openLeftMenu} id="toggle" type="checkbox">
                    </input>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='right-navbar'>
                    <ul>
                        <li>

                            <button type="button" className='btn-log-reg'><FontAwesomeIcon icon={faSignInAlt} />
                                {" "}Σύνδεση/Εγγραφή</button></li>

                        {this.state.authetication ? <li><div className='user-nav-header'>Douglas McGee{' '} <FontAwesomeIcon icon={faUserCircle} />  </div></li> : ''}


                    </ul>
                </div>
            </nav>

        );
    }
}

export default Header;
