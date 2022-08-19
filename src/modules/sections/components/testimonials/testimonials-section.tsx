import React from 'react';
import TestimonialCard, { Testimonial } from './testimonial-card';

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquam massa, eget aliquam nisl nunc vel lorem.',
    role: 'CEO',
    thumbnail:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
  },
  {
    name: 'Jane Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquam massa, eget aliquam nisl nunc vel lorem.',
    role: 'CEO',
    thumbnail:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
  },
  {
    name: 'John Doe',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt aliquam, nunc nisl aliquam massa, eget aliquam nisl nunc vel lorem.',
    role: 'CEO',
    thumbnail:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl space-y-10 py-8 px-4 text-center lg:py-16 lg:px-12">
        {/* Top Part */}
        <div className="flex w-full flex-col items-center ">
          {/* Main Heading */}
          <h2 className="w-full text-4xl font-extrabold leading-none tracking-tight text-black sm:text-5xl md:text-6xl">
            Hear what our
            <br />
            <span className="text-lime-400">clients</span> say About Us
          </h2>
        </div>
        {/* Bottom Part */}
        <div className="grid grid-cols-1 gap-4 place-self-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
