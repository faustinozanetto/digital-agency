import React from 'react';

interface IFooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<IFooterLinkProps> = (props) => {
  const { href, children } = props;

  return (
    <li>
      <a href={href} className="font-semibold text-gray-800 hover:text-lime-500 hover:underline">
        {children}
      </a>
    </li>
  );
};

export default FooterLink;
