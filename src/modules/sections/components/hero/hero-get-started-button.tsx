import React from 'react';

const HeroGetStartedButton: React.FC = () => {
  return (
    <button
      type="button"
      className="rounded-lg bg-black px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-gray-800"
    >
      Get Started
    </button>
  );
};

export default HeroGetStartedButton;
