import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownIcon = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement de clic de l'icône vers le conteneur

    toggleDropdown(); // Appelle la fonction de bascule du dropdown
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-toggle">
        {title}
        <span className="arrow-icon" onClick={toggleDropdownIcon}>
          {isOpen ? <FaAngleDown /> : <FaAngleUp />}
        </span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
