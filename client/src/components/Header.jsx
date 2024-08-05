import { Link } from 'react-router-dom';
import HamburgerButton from './HamburgerButton';
import Sidebar from './Sidebar';

export default function Header({ isOpen, toggleMenu }) {
  return (
    <header className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center max-w-full p-3'>
        <div>
          <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
        <ul className='flex gap-4'>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu}/>
    </header>
  );
}
