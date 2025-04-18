import React from 'react';
import { ArrowRight, Chrome, Siren as Firefox, Variable as Safari } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section id="download" className="bg-gradient-to-br from-indigo-600 to-purple-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your browsing experience?
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Add Brainbox to your browser today and unlock the power of AI at your fingertips.
          </p>
          
          <div className="mt-8 flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Add to Chrome
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              <Firefox className="mr-2 h-5 w-5" />
              Add to Firefox
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              <Safari className="mr-2 h-5 w-5" />
              Add to Safari
            </a>
          </div>
          
          <p className="mt-6 text-sm text-indigo-100">
            Available for all major browsers. Free to try, upgrade anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;