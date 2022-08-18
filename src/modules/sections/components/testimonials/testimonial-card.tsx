import React from 'react';

export type Testimonial = {
  name: string;
  comment: string;
  thumbnail: string;
  role: string;
};

interface ITestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<ITestimonialCardProps> = (props) => {
  const { testimonial } = props;

  return (
    <div className="mx-auto flex flex-col rounded-lg bg-white p-6 text-left text-gray-900 drop-shadow-2xl sm:p-8">
      {/* Comment */}
      <p className="text-xl font-normal">{testimonial.comment}</p>
      {/* Person */}
      <div className="mt-6 flex items-center">
        {/* Thumbnail */}
        <img src={testimonial.thumbnail} alt="image" className="h-12 w-12 rounded-full object-cover" />
        {/* Name & Role */}
        <div className="ml-4">
          <h3 className="text-lg font-bold">{testimonial.name}</h3>
          <p className="text-base font-semibold">{testimonial.role}</p>
        </div>
        {/* Quote Icon */}
        <svg
          className="ml-auto h-8 w-8 text-lime-500"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default TestimonialCard;
