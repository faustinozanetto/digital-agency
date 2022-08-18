import React from 'react';

const ContactEmail: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-2">
      <div className="rounded-lg bg-black p-2 sm:p-4">
        <svg
          stroke="white"
          fill="white"
          className="h-4 w-4"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
        </svg>
      </div>
      <span className="text-lg font-bold text-gray-800">Email</span>
      <a
        href="mailto:digitalagency@email.com"
        className="text-base font-semibold text-gray-700 transition-colors hover:text-lime-400"
      >
        digitalagency@email.com
      </a>
    </div>
  );
};

export default ContactEmail;
