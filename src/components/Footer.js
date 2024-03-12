import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <img className="footer__logo" src="/assets/LOGO.png" alt="Logo Kasa"/>
            <div className="footer__content">
                <p className="footer__copyright">
                    <span>&copy; 2020 Kasa</span>
                    <span>All rights reserved</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
