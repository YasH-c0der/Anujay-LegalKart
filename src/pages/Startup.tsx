import React from 'react';

const Startup = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Start-up Legal Solutions</h1>
      <p className="text-gray-600 mb-4">
        Planning to start-up or are an on-going startup, we'll help you solve the legal worries like Counseling, Drafting Review and Filing as well as much.
        Our expert team provides comprehensive legal support for startups at every stage of their journey.
      </p>
      <div className="bg-accent-lightgray p-8 rounded-lg">
        <h2 className="text-xl font-semibold text-primary mb-4">Our Startup Legal Services</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Company Formation & Registration</li>
          <li>Intellectual Property Protection</li>
          <li>Compliance Management</li>
          <li>Investor Agreements</li>
          <li>Employment Contracts</li>
        </ul>
      </div>
    </div>
  );
};

export default Startup;
