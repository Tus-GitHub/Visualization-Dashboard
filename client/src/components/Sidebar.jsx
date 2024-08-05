import React from 'react';
import {Link} from 'react-router-dom';

export default function Sidebar({isOpen, toggleMenu}){
    return (
        <div className={`fixed top-0 left-0 h-full bg-gray-800 shadow-xl transition-transform duration-300 ease-in-out transform  text-white ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } w-64`}>
        <button
          className="absolute top-4 right-4 text-white bg-inherit px-1"
          type='button'
          value=''
          onClick={toggleMenu}
        >
        X
      </button>
      <ul className="flex flex-col mt-8">
        <li>
          <Link to="/" onClick={toggleMenu} className="block p-4 pl-10">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={toggleMenu} className="block p-4 pl-10">
            About
          </Link>
        </li>
        <li>
          <Link to="/charts" onClick={toggleMenu} className="block p-4 pl-10">
            Charts
          </Link>
        </li>
      </ul>
    </div>
    )
}