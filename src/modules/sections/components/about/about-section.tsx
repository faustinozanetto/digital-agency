import useImagePresentation from 'hooks/use-image-presentation';
import React, { useRef } from 'react';
import AboutUsQualification from './about-us-qualification';

const PRESENTATION_IMAGES: string[] = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1571101628768-6bae026844b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483&q=80',
];

const AboutSection: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const { currentImage } = useImagePresentation({
    delay: 5000,
    images: PRESENTATION_IMAGES,
    loop: true,
    imageRef,
  });

  return (
    <section className="bg-[#FFFCF3] py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* First Part */}
        <div className="space-y-4 font-normal text-gray-700 sm:space-y-6 sm:text-lg">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            We focus on creating
            <br />
            <span className="text-lime-400"> stylish & functional</span>
            <br />
            products.
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and
            quick, but big enough to deliver the scope you want at the pace you need.
          </p>
          <div>
            {/* About us Qualifications */}
            <AboutUsQualification text="Quality products and maintainable code" />
            <AboutUsQualification text="We are a team of 10 people" />
            <AboutUsQualification text="Free lifetime support" />
          </div>
        </div>
        {/* Second Part */}
        <div className="grid gap-4 mt-8">
          {/* Image */}
          <img
            ref={imageRef}
            src={currentImage}
            alt="About Us"
            className="w-full object-cover rounded-lg shadow-lg transition-all sm:h-[250px] md:h-[300px] lg:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
