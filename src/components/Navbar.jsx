import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const handleClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text z-50 transition-colors duration-300 border-b border-light-border dark:border-dark-border shadow-sm'>
      {/* Logo */}
      <Link to='home' smooth={true} duration={500} className='flex-shrink-0'>
        <img src={Logo} alt='Logo' className='w-32 sm:w-40 lg:w-48 h-auto cursor-pointer transition-transform duration-200 hover:scale-105' />
      </Link>
      
      {/* Desktop Navigation */}
      <div className='hidden lg:flex items-center space-x-8'>
        <ul className='flex items-center space-x-8'>
          <li><Link to='home' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 text-sm lg:text-base font-medium'>Home</Link></li>
          <li><Link to='skills' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 text-sm lg:text-base font-medium'>Skills</Link></li>
          <li><Link to='Projects' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 text-sm lg:text-base font-medium'>Projects</Link></li>
          <li><Link to='Experience' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 text-sm lg:text-base font-medium'>Experience</Link></li>
          <li><Link to='contact' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 text-sm lg:text-base font-medium'>Contact</Link></li>
        </ul>
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className='p-2 rounded-lg bg-light-card dark:bg-dark-card hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200 shadow-sm'
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <FaSun className="text-yellow-500 text-lg" /> : <FaMoon className="text-blue-600 text-lg" />}
        </button>
        
        {/* Social Icons */}
        <ul className='flex items-center space-x-6'>
          <li>
            <a href='https://www.linkedin.com/in/ram-cloud-devops/' target="_blank" rel="noopener noreferrer" className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform'>
              <FaLinkedin className="text-pink-500 text-xl" />
            </a>
          </li>
          <li>
            <a href='https://github.com/RamaRaju-vj' target="_blank" rel="noopener noreferrer" className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform'>
              <FaGithub className="text-pink-500 text-xl" />
            </a>
          </li>
          <li>
            <a href='mailto:vadapalli.j@northeastern.edu' className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform'>
              <HiOutlineMail className="text-pink-500 text-xl" />
            </a>
          </li>
        </ul>
      </div>

      {/* Tablet Navigation (simplified) */}
      <div className='hidden md:flex lg:hidden items-center space-x-4'>
        <button
          onClick={toggleTheme}
          className='p-2 rounded-lg bg-light-card dark:bg-dark-card hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200'
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDark ? <FaSun className="text-yellow-500 text-lg" /> : <FaMoon className="text-blue-600 text-lg" />}
        </button>
        <div onClick={handleClick} className='text-light-text dark:text-dark-text cursor-pointer'>
          <FaBars size={24} />
        </div>
      </div>
      
      {/* Mobile Hamburger Icon */}
      <div onClick={handleClick} className='lg:hidden z-10 text-light-text dark:text-dark-text cursor-pointer'>
        {!nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>

      {/* Mobile/Tablet Menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-light-bg dark:bg-dark-bg flex-col justify-center items-center transition-all duration-300 z-40`}>
        <li className='py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200'>Home</Link>
        </li>
        <li className='py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200'>Skills</Link>
        </li>
        <li className='py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl'>
          <Link onClick={handleClick} to='Projects' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200'>Projects</Link>
        </li>
        <li className='py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl'>
          <Link onClick={handleClick} to='Experience' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200'>Experience</Link>
        </li>
        <li className='py-4 md:py-6 text-2xl md:text-3xl lg:text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200'>Contact</Link>
        </li>
        
        {/* Theme Toggle in Mobile Menu */}
        <li className='py-4 md:py-6'>
          <button
            onClick={toggleTheme}
            className='p-3 rounded-lg bg-light-card dark:bg-dark-card hover:bg-light-border dark:hover:bg-dark-border transition-colors duration-200 shadow-sm'
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <FaSun className="text-yellow-500 text-2xl md:text-3xl" /> : <FaMoon className="text-blue-600 text-2xl md:text-3xl" />}
          </button>
        </li>
        
        {/* Social Icons */}
        <li className='pt-4 md:pt-6 text-2xl md:text-3xl'>
          <a href='https://www.linkedin.com/in/ram-cloud-devops/' target="_blank" rel="noopener noreferrer" className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform inline-block mx-2'>
            <FaLinkedin />
          </a>
        </li>
        <li className='pt-4 md:pt-6 text-2xl md:text-3xl'>
          <a href='https://github.com/RamaRaju-vj/RamaRaju-vj' target="_blank" rel="noopener noreferrer" className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform inline-block mx-2'>
            <FaGithub />
          </a>
        </li>
        <li className='pt-4 md:pt-6 text-2xl md:text-3xl'>
          <a href='mailto:vadapalli.j@northeastern.edu' className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform inline-block mx-2'>
            <HiOutlineMail />
          </a>
        </li>
        <li className='pt-4 md:pt-6 text-2xl md:text-3xl'>
          <a href='https://drive.google.com/file/d/1jgxuCH8S9Pv1FrEd0of8bWfE5ZlVereY/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='hover:text-light-accent dark:hover:text-dark-accent transition-colors duration-200 hover:scale-110 transform inline-block mx-2'>
            <BsFillPersonLinesFill />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
