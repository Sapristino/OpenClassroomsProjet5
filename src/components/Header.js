import React from'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='/assets/logo.png' alt='Logo Kasa'/>
            </div>
            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar__link'><Link to='/'>Accueil</Link></li>
                    <li className='navbar__link'><Link to='/about'>A propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;