import React from 'react';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import {Link, NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";




const Sidebar = () => {
    return (
        <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img src={LogoSubtitle} alt="logosubtitle" />
        </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                        <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="">
                        <FontAwesomeIcon icon={faFacebook} color="#4d4d4d" />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;