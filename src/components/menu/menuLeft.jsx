import React, { useState } from 'react';
import './menuLeft.scss';
import logo from '../../img/logo.png';
import bgLeftMenu from '../../img/menu-bg/coffee.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';






const MenuLeft = props => {

    const [authentication, setAuthentication] = useState(true);

    const onClickDroplist = (event) => {
        console.log(event.currentTarget);
        event.currentTarget.classList.toggle("rotate");
    }


    return (
        <nav className="menu-left ">
            <div class="menu-left__background" style={{ 'backgroundImage': `url(${bgLeftMenu})` }}></div>
            <div className="logo">
                <img src={logo} alt='logo' />
            </div>
            <ul className="menu">

                <li>
                    <FontAwesomeIcon icon={faHome} />
                    <span>Αρχική</span>
                </li>
                <hr className="sidebar-divider"></hr>
                {
                    authentication &&
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

                }

                <li>
                    <FontAwesomeIcon icon={faStoreAlt} />
                    <span>Μαγαζιά</span>
                </li>
                <li >
                    <div className="menu-left__list " onClick={onClickDroplist}>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span >Άρθρα </span><FontAwesomeIcon className="dropIcon"
                            icon={faAngleRight} />
                    </div>

                    <div className="menu-left__dropdown">
                        <ul className="menu-left__ul">
                            <li>
                                <div className="menu-left__list " onClick={onClickDroplist}>
                                    <span >Άρθρo 1 </span><FontAwesomeIcon className="dropIcon"
                                        icon={faAngleRight} />
                                </div>

                                <div className="menu-left__dropdown">
                                    <ul className="menu-left__ul">
                                        <li><span>Οι πιο ωραίες καφετέριες στην Αθήνα μπου μπορείς να δεις από κοντά</span></li>
                                        <li><span>Αρθρο 2</span></li>
                                        <li><span>Αρθρο 3</span></li>
                                    </ul>
                                </div>

                            </li>
                            <li><span>Αρθρο 2</span></li>
                            <li><span>Αρθρο 3</span></li>
                        </ul>
                    </div>
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

export default MenuLeft;