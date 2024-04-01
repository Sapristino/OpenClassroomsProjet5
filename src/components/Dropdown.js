import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import '../styles/css/main.css'


const Dropdown = ({ title, children, containerClassName, toggleCLassName, contentClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownIcon = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement de clic de l'icône vers le conteneur

    toggleDropdown(); // Appelle la fonction de bascule du dropdown
  };

  return (
    <div className={`dropdown-container ${containerClassName}`}>
      <div className={`dropdown-toggle ${toggleCLassName}`}>
        {title}
        <span className={`arrow-icon ${isOpen ? '' : 'rotate'}`} onClick={toggleDropdownIcon}> 
          <FaAngleDown />
        </span>
      </div>
      <div className={`dropdown-content ${isOpen? 'open' : 'close'}`}>{children}</div>
    </div>
  );
};

export default Dropdown;
