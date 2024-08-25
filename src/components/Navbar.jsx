import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('bg-opacity-90');
      } else {
        nav.classList.remove('bg-opacity-90');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="bg-black  text-blue-900 shadow-lg fixed w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#Home" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">SOWMI</span>
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-pink-500 rounded-lg md:hidden hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
          aria-controls="navbar-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM3 9a1 1 0 011-1h12a1 1 0 010 2H4a1 1 0 01-1-1zM4 13a1 1 0 100 2h12a1 1 0 100-2H4z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          className={`${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out w-full md:flex md:w-auto md:order-1`}
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-pink-500 rounded-lg bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
            <li>
              <a
                href="#Home"
                className="block py-2 pl-3 pr-4  text-blue-900 rounded hover:bg-pink-700 md:hover:bg-transparent md:hover:text-pink-700 md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="block py-2 pl-3 pr-4  text-blue-900 rounded hover:bg-pink-700 md:hover:bg-transparent md:hover:text-pink-700 md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Service"
                className="block py-2 pl-3 pr-4  text-blue-900 rounded hover:bg-pink-700 md:hover:bg-transparent md:hover:text-pink-700 md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="block py-2 pl-3 pr-4 text-blue-900 rounded hover:bg-pink-700 md:hover:bg-transparent md:hover:text-pink-700 md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
