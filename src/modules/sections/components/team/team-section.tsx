import React from 'react';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-amber-50 py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-12">
        {/* Top Part */}
        <div className="flex w-full flex-col items-center space-y-10">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            Meet our
            <br />
            <span className="text-lime-400">talented </span>
            team
          </h2>
        </div>
        {/* Bottom Part */}
      </div>
    </section>
  );
};

export default TeamSection;
