import React from 'react';
import { ChevronRight, Chrome, Siren as Firefox, Variable as Safari } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="max-w-2xl lg:max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-4">
              <span>New Release</span>
            </div>
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Brainbox</span>
              <span className="block text-indigo-600 mt-2">
                Where AI meets your toolbox
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-lg">
              Enhance your browsing experience with AI-powered tools that help you 
              research, summarize, create, and solve problems—all within your browser.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <a 
                href="#download"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                Add to Browser
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#how-it-works"
                className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-colors duration-200"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500">Available for</p>
              <div className="mt-2 flex space-x-6 items-center">
                <div className="flex items-center">
                  <Chrome className="h-6 w-6 text-gray-700" />
                  <span className="ml-2 text-sm text-gray-700">Chrome</span>
                </div>
                <div className="flex items-center">
                  <Firefox className="h-6 w-6 text-gray-700" />
                  <span className="ml-2 text-sm text-gray-700">Firefox</span>
                </div>
                <div className="flex items-center">
                  <Safari className="h-6 w-6 text-gray-700" />
                  <span className="ml-2 text-sm text-gray-700">Safari</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:col-start-2">
            <div className="relative mx-auto w-full max-w-lg transform rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full overflow-hidden rounded-lg bg-white shadow-xl">
                <img 
                  className="w-full" 
                  src="https://images.pexels.com/photos/5926398/pexels-photo-5926398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Brainbox in action"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-600 bg-opacity-75 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    <span className="sr-only">Watch demo</span>
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute top-0 right-0 hidden lg:block opacity-10">
        <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-indigo-500" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="784" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;