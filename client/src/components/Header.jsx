import React from 'react';
import {Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-300 shadow-md'>
        <div className='items-center flex justify-between  max-w mr-4 p-3'>
            <Link to ='/'>
                <h1>
                    Hamburger dropdown
                </h1>
            </Link>
            <ul className='flex gap-4'>
                <Link to ='/'>
                    Home
                </Link>
                <Link to='/about'>
                    About
                </Link>
            </ul>
        </div>
    </header>
  )
}
