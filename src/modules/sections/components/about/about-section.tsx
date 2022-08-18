import React from 'react';
import AboutUsQualification from './about-us-qualification';
import AboutUsStats from './about-us-stats';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#FFFCF3] py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
        {/* First Part */}
        <div className="flex w-full flex-col items-start space-y-10">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            We focus on creating
            <br />
            <span className="text-lime-400"> stylish & functional</span>
            <br />
            products.
          </h2>
          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        {/* Second Part */}
        <div className="relative mt-4 md:mt-0">
          {/* Text */}
          <p className="mb-4 text-xl font-medium text-gray-800 sm:mb-10 md:mb-16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis sint minima maxime repellat totam,
            asperiores, dicta placeat vero corporis soluta veniam veritatis, aut corrupti deserunt?
          </p>
          {/* About us Qualifications */}
          <AboutUsQualification text="Quality products and maintainable code" />
          <AboutUsQualification text="We are a team of 10 people" />
          <AboutUsQualification text="Free lifetime support" />
          {/* Stats */}
          {/* <AboutUsStats /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
