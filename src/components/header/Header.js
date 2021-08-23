import React,{useState}  from 'react';
import './header.scss';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';



const Header = props => {

    const [menuLeft, setMenuLeft] = useState(false);
    const [authetication, setAuthetication] = useState(true);
    const openLeftMenu = () => {
        if (menuLeft) {
            setMenuLeft(false );
                document.querySelector('.menu-left ').classList.remove("display-left-menu");
                 console.log('menuLeft', menuLeft);

        } else {
            setMenuLeft( true ) 
            
             document.querySelector('.menu-left ').classList.add("display-left-menu"); 
                 console.log('menuLeft', menuLeft);

        }
    }

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} style={{ 'height': '80px' }} alt='logo' />
            </div>
            <div id='div-span'>
                <input onClick={openLeftMenu} id="toggle" type="checkbox">
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

                    {authetication ? <li><div className='user-nav-header'>Douglas McGee{' '} <FontAwesomeIcon icon={faUserCircle} />  </div></li> : ''}


                </ul>
            </div>
        </nav>

    );
}

export default Header;
