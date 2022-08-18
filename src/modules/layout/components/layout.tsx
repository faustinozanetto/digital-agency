import Footer from 'modules/footer/components/footer';
import Navbar from 'modules/navbar/components/navbar';
import React from 'react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col overflow-hidden subpixel-antialiased transition-all">
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="flex flex-col">
        {/* Children */}
        {children}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
