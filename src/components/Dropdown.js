import React, { useState } from 'react';
import '../styles/Dropdown.scss';


function Dropdown({ option, text, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown-container ${className}`}>
      <div className='dropdown' onClick={toggleDropdown}>
        {option}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <div className="option-text">{text}</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
