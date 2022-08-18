import React from 'react';

const NewsletterForm: React.FC = () => {
  return (
    <form action="#" className="w-full">
      <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
        <div className="relative w-full">
          <label htmlFor="email" className="mb-2 hidden text-sm font-medium text-gray-900">
            Email address
          </label>
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 focus:border-lime-500 focus:ring-lime-500 sm:rounded-none sm:rounded-l-lg "
            placeholder="Enter your email"
            type="email"
            id="email"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-lg border border-lime-600 bg-lime-700 py-3 px-5 text-center text-sm font-medium text-white hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 sm:rounded-none sm:rounded-r-lg"
          >
            Subscribe
          </button>
        </div>
      </div>
    </form>
  );
};
export default NewsletterForm;
