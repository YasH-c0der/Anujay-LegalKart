import React from 'react';

const Documentation = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Documentation by Expert Professionals</h1>
      <p className="text-gray-600 mb-4">
        Companies, HNI professionals or paralegal can rely on our document services and customized to specific requirements only.
        Our expert professionals provide high-quality documentation services for all your legal needs.
      </p>
      <div className="bg-accent-lightgray p-8 rounded-lg">
        <h2 className="text-xl font-semibold text-primary mb-4">Our Documentation Services</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Document Review and Analysis</li>
          <li>Contract Drafting</li>
          <li>Legal Agreement Preparation</li>
          <li>Document Verification</li>
          <li>Custom Documentation Solutions</li>
        </ul>
      </div>
    </div>
  );
};

export default Documentation;
