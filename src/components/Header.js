import React from'react';
import { NavLink } from 'react-router-dom';

import '../styles/css/main.css';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='/assets/LOGO.png' alt='Logo Kasa'/>
            </div>
            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar__link'>
                        <NavLink to='/'
                            className={({ isActive }) => (isActive ? 'navbar__link active-link' : 'navbar__link')}>
                            Accueil
                        </NavLink>
                    </li>
                    <li className='navbar__link'>
                        <NavLink to='/about' 
                            className={({ isActive }) => (isActive ? 'navbar__link active-link' : 'navbar__link')}>
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;