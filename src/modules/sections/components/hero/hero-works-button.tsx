import React from 'react';

const HeroHowItWorksButton: React.FC = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-center rounded-lg bg-lime-400 px-8 py-4 text-center text-lg font-semibold text-black"
    >
      <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
      </svg>
      Hot it works
    </button>
  );
};

export default HeroHowItWorksButton;
