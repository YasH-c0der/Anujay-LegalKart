import React from 'react';

const Property = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Property Legal Solutions</h1>
      <p className="text-gray-600 mb-4">
        Trusted Property Legal Solutions. We help you take care of Property investment decisions.
        Our expert lawyers provide guidance on all property-related legal matters.
      </p>
      <div className="bg-accent-lightgray p-8 rounded-lg">
        <h2 className="text-xl font-semibold text-primary mb-4">Our Property Legal Services</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Sale Agreement/ Agreement to Sale/ Builder</li>
          <li>Agreement to rent/ Lease</li>
          <li>Property Due Diligence</li>
          <li>Documentation Review</li>
          <li>Legal Opinion</li>
        </ul>
      </div>
    </div>
  );
};

export default Property;
