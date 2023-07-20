import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome, faEnvelope, faUser} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
     const[showNav, setShowNav] =useState(false);
   
     return(
    <div className="nav-bar">
     <Link className="logo" to="/">
      <img src={LogoS} alt="logo"/>
    </Link>
    
    
    <nav>
        <NavLink exact="true" activeclassname="active" to="/">
             <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
             <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="contact">
             <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>


    </nav>
   
   <ul>
     <li>
               <a
                target="-blank"
                rel='noreferrer'
                href='https://www.linkedin.com/in/muhammad-saad-82b404242'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
     </li>
     <li>
               <a
                target="-blank"
                rel='noreferrer'
                href='https://instagram.com/saad_ch_17?igshid=OGQ5ZDc2ODk2ZA=='>
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
                </a>
     </li>
     <li>
               <a
                target="-blank"
                rel='noreferrer'
                href='https://www.facebook.com/chmuhammadsaad.ali?mibextid=LQQJ4d'>
                <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
     </li>
    </ul>
   
     </div>
)
}
export default Sidebar


