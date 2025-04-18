import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 italic mb-6">"{content}"</p>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-800 font-medium">
              {author.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Brainbox has completely transformed how I research information. It's like having a personal AI research assistant.",
      author: "Sarah Johnson",
      role: "Content Creator",
      rating: 5
    },
    {
      content: "As a developer, the code explanation and generation features save me hours of debugging and documentation reading.",
      author: "Michael Chen",
      role: "Software Engineer",
      rating: 5
    },
    {
      content: "The summary feature is a game-changer. I can quickly understand long articles without reading every word.",
      author: "Emily Rodriguez",
      role: "Graduate Student",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-indigo-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Loved by users everywhere
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See what others are saying about how Brainbox has improved their productivity and browsing experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            <span>Join thousands of satisfied users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;