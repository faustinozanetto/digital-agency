import React from 'react';
import AirbnbLogo from './airbnb-logo';
import GoogleLogo from './google-logo';

const HeroTrustedBy: React.FC = () => {
  return (
    <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
      {/* Heading */}
      <span className="text-lg font-semibold text-gray-500">Over 65k users trust us from different companies</span>
      {/* Companies */}
      <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
        <AirbnbLogo />
        <GoogleLogo />
      </div>
    </div>
  );
};

export default HeroTrustedBy;
