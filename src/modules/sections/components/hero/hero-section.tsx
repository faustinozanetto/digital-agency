import React from 'react';
import HeroGetStartedButton from './hero-get-started-button';
import HeroTrustedBy from './trusted-by/hero-trusted-by';
import HeroHowItWorksButton from './hero-works-button';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
        {/* Main Heading */}
        <h1 className="mb-4 text-5xl font-extrabold leading-none tracking-tight text-black md:text-6xl lg:text-7xl">
          Digital Agency <br /> for the
          <span className="text-lime-400"> Modern Era</span>
        </h1>

        {/* Text */}
        <p className="mb-8 text-lg font-semibold text-gray-700 sm:px-16 lg:text-xl xl:px-48">
          We are a digital agency that believes in building things that are meaningful!
        </p>
        {/* CTA Buttons */}
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
          {/* Get Started */}
          <HeroGetStartedButton />
          {/* How It Works */}
          <HeroHowItWorksButton />
        </div>
        {/* Trusted By */}
        <HeroTrustedBy />
      </div>
    </section>
  );
};

export default HeroSection;
