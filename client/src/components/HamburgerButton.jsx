// src/components/HamburgerButton.jsx
import React from 'react';
export default function HamburgerButton ({ isOpen, toggleMenu }){
  return (
    <button
      className="flex flex-col justify-around items-center w-8 h-4"
      onClick={toggleMenu}
    >
      <span
        className={`block w-4 h-0.5 bg-black transform transition duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-4 h-0.5 bg-black my-1.5 transform transition duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`block w-4 h-0.5 bg-black transform transition duration-300 ease-in-out ${
          isOpen ? 'opacity-0 ' : ''
        }`}
      />
    </button>
  );
};
