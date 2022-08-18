import React from 'react';
import NavbarLink from './navbar-link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white px-2 py-2.5 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center text-2xl font-semibold text-gray-900">
          <span className="self-center whitespace-nowrap text-3xl font-extrabold">
            Creative{` `}
            <span className="text-lime-400">Agency</span>
          </span>
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
            className="flex items-center justify-center rounded-lg bg-lime-400 px-4 py-2.5 text-center text-lg font-semibold text-black transition-colors hover:bg-lime-500"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
