import React, { Component } from 'react';
import './menu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';





class Menu extends Component {

    constructor(props) {
        super(props);
        
        this.state ={
            authentication:true

        }

        

    }
    

    
    render(){return(
                <nav className="menu-left ">
                    <ul className="menu">

                    <li>
                        <FontAwesomeIcon icon={faHome} /> 
                        <span>Αρχική</span>
                    </li>
                    <hr className="sidebar-divider"></hr>
                    {
                        this.state.authentication ?
                    <div><li>
                        <FontAwesomeIcon icon={faCog} /> 
                        <span>Ρυθμίσεις</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserGraduate} /> 
                        <span>Πόντοι</span>
                    </li>

                    <li>
                        <FontAwesomeIcon icon={faGift} /> 
                        <span>Κουπόνια</span>
                    </li>
                    <hr className="sidebar-divider"></hr></div>
                    :''
                    }

                    <li>
                    <FontAwesomeIcon icon={faStoreAlt} /> 
                        <span>Μαγαζιά</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faNewspaper} /> 
                        <span>Άρθρα</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faSitemap} /> 
                        <span>Κατηγορίες</span>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faAddressCard} /> 

                        <span>Επικοινωνία</span>
                    </li>

                    <hr className="sidebar-divider"></hr>
                    </ul>
                    </nav>

            );
        }
    }

export default Menu;