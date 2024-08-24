import React from 'react'

const Navbar = () => {
  return (
    <div>
       <header className="lg:px-16 px-4 bg-black flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl text-pink-500 font-bold transition-transform transform hover:scale-105">
        𝒮𝑜𝓌𝓂𝒾
        </a>
      </div>
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
        <svg className="fill-current text-pink-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>

      <input className="hidden" type="checkbox" id="menu-toggle" />

      
      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-base text-blue-700 pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-pink-500 transition-colors duration-300" href="#Home">
                HOME
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-pink-500 transition-colors duration-300" href="#About">
                ABOUT
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block hover:text-pink-500 transition-colors duration-300" href="#Service">
                SERVICE
              </a>
            </li>
            <li>
              <a className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:text-pink-500 transition-colors duration-300" href="#Contact">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Navbar
