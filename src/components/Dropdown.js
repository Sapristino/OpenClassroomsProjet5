import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

import '../styles/css/main.css'


const Dropdown = ({ title, children, containerClassName, toggleCLassName, contentClassName }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${containerClassName}`}>
      <div className={`dropdown-toggle ${toggleCLassName}`}>
        {title}
        <span className={`arrow-icon ${isOpen ? '' : 'rotate'}`} onClick={toggleDropdown}> 
          <FaAngleDown />
        </span>
      </div>
      <div className={`dropdown-content ${isOpen? 'open' : 'close'}`}>{children}</div>
    </div>
  );
};

export default Dropdown;
