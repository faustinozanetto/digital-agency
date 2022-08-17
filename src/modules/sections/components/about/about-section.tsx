import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-amber-50">
      <div className="flex max-w-screen-xl flex-col py-8 px-4 text-center md:flex-row lg:py-16 lg:px-12">
        {/* First Part */}
        <div className="w-full">
          {/* Main Heading */}
          <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl">
            We focus on creating
            <br />
            <span className="text-lime-400"> stylish & functional</span>
            <br />
            products.
          </h2>
        </div>
        {/* Second Part */}
        <div className="flex flex-col">
          <p className="max-w-2xl text-lg font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate mollitia praesentium architecto, eaque
            perferendis qui.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
