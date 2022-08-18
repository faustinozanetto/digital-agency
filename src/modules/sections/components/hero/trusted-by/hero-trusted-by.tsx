import React from 'react';
import AirbnbLogo from './airbnb-logo';
import GoogleLogo from './google-logo';
import NikeLogo from './nike-logo';
import StripeLogo from './stripe-logo';

const HeroTrustedBy: React.FC = () => {
  return (
    <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      {/* Heading */}
      <span className="text-lg font-semibold text-gray-500">Over 65k users trust us from different companies</span>
      {/* Companies */}
      <div className="mt-8 grid grid-cols-2 items-center justify-center gap-4 text-gray-500 md:grid-cols-4">
        <AirbnbLogo />
        <GoogleLogo />
        <NikeLogo />
        <StripeLogo />
      </div>
    </div>
  );
};

export default HeroTrustedBy;
