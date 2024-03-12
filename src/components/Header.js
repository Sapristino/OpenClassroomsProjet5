import React from'react';

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='/assets/logo.png' alt='Logo Kasa'/>
            </div>
            <nav className='navbar'>
                <ul className='navbar-ul'>
                    <li className='navbar__link'><a href='#'>Accueil</a></li>
                    <li className='navbar__link'><a href='#'>A propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;