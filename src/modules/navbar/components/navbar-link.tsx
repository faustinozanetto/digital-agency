import React from 'react';

interface INavbarLinkProps {
  children: React.ReactNode;
}

const NavbarLink: React.FC<INavbarLinkProps> = (props) => {
  const { children } = props;
  return (
    <a href="#" className="text-base font-semibold tracking-wide text-black" aria-current="page">
      {children}
    </a>
  );
};

export default NavbarLink;
