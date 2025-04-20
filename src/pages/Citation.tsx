import React from 'react';

const Citation = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-primary mb-8">Check Your Citation Status</h1>
      <p className="text-gray-600 mb-4">
        Easily check the status of your legal citations and stay updated on your case progress.
        Our citation tracking system provides real-time updates via WhatsApp and email.
      </p>

      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-primary mb-4">Enter Your Details</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
            <input
              type="tel"
              id="phone"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label htmlFor="citation" className="block text-sm font-medium text-gray-700 mb-1">Citation Number (Optional)</label>
            <input
              type="text"
              id="citation"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Enter citation number if available"
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              id="consent"
              className="mt-1 mr-2"
            />
            <label htmlFor="consent" className="text-xs text-gray-600">
              I agree to receive information, WhatsApp messages, and emails related to my citation status
            </label>
          </div>

          <button className="w-full bg-secondary text-white py-2 rounded-md hover:bg-secondary-dark transition duration-300">
            Check Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default Citation;
