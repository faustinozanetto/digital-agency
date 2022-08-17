import React from 'react';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="https://flowbite.com/" className="flex items-center">
          <span className="my-3 text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">Delta</span>
        </a>

        {/* Links */}
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <div className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <NavbarLink>Home</NavbarLink>
            <NavbarLink>Features</NavbarLink>
            <NavbarLink>Pricing</NavbarLink>
            <NavbarLink>Contact</NavbarLink>
          </div>
        </div>

        {/* Get Started Button */}
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 "
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
