import React from 'react';
import FooterLink from './footer-link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white p-4 md:p-8 lg:p-10">
      {/* Logo */}
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="/" className="flex items-center justify-center text-2xl font-semibold text-gray-900">
          <span className="self-center whitespace-nowrap text-3xl font-extrabold">
            Creative <br />
            <span className="text-lime-400">Agency</span>
          </span>
        </a>
        {/* Links */}
        <ul className="my-6 flex flex-wrap items-center justify-center space-x-4 text-gray-900">
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#team">Team</FooterLink>
          <FooterLink href="#pricing">Pricing</FooterLink>
          <FooterLink href="#clients">Clients</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>

          <FooterLink href="#terms">Terms</FooterLink>
          <FooterLink href="#privacy">Privacy</FooterLink>
        </ul>
        {/* Copyright notice */}
        <span className="text-sm text-gray-800 font-semibold sm:text-center">
          © 2022 <a href="#">Conkis Studios</a>. All Rights Reserved.
        </span>{' '}
      </div>
    </footer>
  );
};

export default Footer;
