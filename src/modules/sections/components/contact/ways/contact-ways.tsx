import React from 'react';
import ContactEmail from './contact-email';
import ContactPhone from './contact-phone';

const ContactWays: React.FC = () => {
  return (
    <div className="flex flex-row items-start space-x-6">
      {/* Phone */}
      <ContactPhone />
      {/* Email */}
      <ContactEmail />
    </div>
  );
};

export default ContactWays;
