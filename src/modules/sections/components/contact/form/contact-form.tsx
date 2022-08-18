import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <form className="flex h-full w-full flex-col items-center justify-center space-y-4">
        {/* Name */}
        <div className="flex w-full flex-col">
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="name"
            id="name"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
            placeholder="John Doe"
            required
          />
        </div>
        {/* Email */}
        <div className="flex w-full flex-col">
          <label className="mb-2 block text-sm font-medium text-gray-900" htmlFor="email">
            Email
          </label>
          <input
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
            type="email"
            id="email"
            name="email"
            placeholder="johndoe@email.com"
          />
        </div>
        {/* Message */}
        <div className="flex w-full flex-col">
          <label className="mb-2 block text-sm font-medium text-gray-900" htmlFor="message">
            Message
          </label>
          <textarea
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
            id="message"
            name="message"
            placeholder="Hello, I would like to..."
          />
        </div>
        {/* Submit */}
        <button
          type="button"
          className="rounded-lg bg-lime-400 px-6 py-2.5 text-center text-lg font-semibold text-black transition-colors hover:bg-lime-500"
        >
          Send a Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
