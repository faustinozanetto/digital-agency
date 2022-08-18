import React from 'react';
import NewsletterForm from './newsletter-form';

const NewsLetterSection: React.FC = () => {
  return (
    <section className="bg-[#FFFCF3] py-8 sm:py-10 md:py-16">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl ">
            Signup for ur newsltter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 sm:text-xl md:mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio enim architecto quisquam error quas accusamus.
          </p>
          {/* Form */}
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
