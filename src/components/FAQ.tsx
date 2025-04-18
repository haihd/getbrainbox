import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-indigo-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-base text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How does Brainbox work?",
      answer: "Brainbox works as a browser extension that integrates AI capabilities directly into your browsing experience. It uses advanced natural language processing to understand content on web pages and provide intelligent assistance based on your needs."
    },
    {
      question: "Is my data private and secure?",
      answer: "Yes, we take privacy very seriously. Brainbox only processes the data needed to provide you with the requested assistance. Your data is never stored or used to train our models without your explicit consent. You can review and adjust privacy settings at any time."
    },
    {
      question: "Which browsers are supported?",
      answer: "Brainbox is currently available for Google Chrome, Mozilla Firefox, and Safari. We're working on supporting additional browsers in the future."
    },
    {
      question: "Is Brainbox free to use?",
      answer: "Brainbox offers a free tier with limited usage and core features. For unlimited access and advanced features, we offer premium subscription plans starting at $4.99/month."
    },
    {
      question: "Can I use Brainbox offline?",
      answer: "Some basic features may work offline, but most of Brainbox's AI capabilities require an internet connection to communicate with our servers for processing."
    },
    {
      question: "How do I uninstall Brainbox?",
      answer: "You can uninstall Brainbox like any other browser extension through your browser's extension management page. All your data will be removed from our servers within 30 days of uninstallation."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">FAQ</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Have a different question and can't find the answer you're looking for? Reach out to our support team by{' '}
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
              sending us an email
            </a>
            .
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;