import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes, FaAvianex} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import { Button } from './Button'
import './navbar.css'

export default function Navbar() {
    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton)


    return (
        <>
          <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <FaAvianex className="navbar-icon"/>
                        Yusdam-Fly
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/service' className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/package' className="nav-links" onClick={closeMobileMenu}>
                                Packages
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                Contacts
                            </Link>
                        </li>                        
                    </ul>
                </div>
            </div>
        </>
    )
}
