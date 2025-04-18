import React from 'react';
import { Download, ChevronRight, Settings, BrainCog } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Install the Extension',
      description: 'Add Brainbox to your browser with just a click. Available for Chrome, Firefox, and Safari.',
      icon: <Download className="h-6 w-6" />
    },
    {
      number: '02',
      title: 'Customize Your Settings',
      description: 'Configure Brainbox to match your preferences and workflow needs.',
      icon: <Settings className="h-6 w-6" />
    },
    {
      number: '03',
      title: 'Activate When Needed',
      description: 'Simply click the Brainbox icon or use keyboard shortcuts to access AI tools.',
      icon: <BrainCog className="h-6 w-6" />
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">How It Works</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, powerful, and intuitive
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Brainbox is designed to enhance your browsing experience without getting in the way. 
              It's always there when you need it, and out of sight when you don't.
            </p>
            
            <div className="mt-10 space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-indigo-600">{step.number}</p>
                    <h3 className="mt-2 text-xl font-medium text-gray-900">{step.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a 
                href="#download" 
                className="inline-flex items-center text-base font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
              >
                Get started now
                <ChevronRight className="ml-1 h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="relative">
                <img 
                  className="w-full object-cover" 
                  src="https://images.pexels.com/photos/8439091/pexels-photo-8439091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Brainbox interface screenshot" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xl font-semibold text-white">
                    Seamless integration with your browsing experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;