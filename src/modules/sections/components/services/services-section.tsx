import AnimatedCard from 'modules/animations/components/animated-card';
import React from 'react';
import ServiceCard, { Service } from './service-card';

const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description: "We build websites that don't just look good, but also perform well.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Mobile Development',
    description: 'We build mobile apps that are fast, responsive, and easy to use.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'We design beautiful, intuitive, and user-friendly interfaces.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: 'Digital Marketing',
    description: 'We help you reach your target audience and grow your business.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'E-Commerce',
    description: 'We build e-commerce websites that are fast, secure, and easy to use.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Web Hosting',
    description: 'We provide reliable, secure, and fast web hosting services.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-12">
        {/* Top Part */}
        <div className="flex w-full flex-col items-start space-y-10">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            We offer a
            <br />
            <span className="text-lime-400">broad variety</span>
            <br />
            of services.
          </h2>
        </div>
        {/* Bottom Part */}
        <div className="mt-4 sm:mt-8 md:mt-10">
          {/* Services */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {SERVICES.map((service, i) => (
              <AnimatedCard key={service.title} index={i}>
                <ServiceCard key={service.title} service={service} />
              </AnimatedCard>
            ))}
          </div>
        </div>
        {/* Custom Service */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl">
              Don&apos;t see what you need?
            </h3>
            <p className="text-center text-xl text-gray-600">
              We offer custom services to meet your needs. Contact us to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
