import React from 'react';
import { 
  BrainCircuit, 
  Sparkles, 
  Search, 
  FileText, 
  MessageCircle, 
  Code, 
  Lightbulb,
  Share2
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg group">
      <div className="rounded-full bg-indigo-100 w-12 h-12 flex items-center justify-center mb-4 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search",
      description: "Find what you're looking for faster with AI-powered search that understands context and intent."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Instant Summaries",
      description: "Get concise summaries of articles, research papers, and long content with a single click."
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "AI Assistant",
      description: "Ask questions and get intelligent answers without leaving your current tab."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Helpful Translate",
      description: "Generate code snippets, explain functions, and debug issues with our AI coding assistant."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Creative Ideas",
      description: "Generate ideas, outlines, and creative content for your projects, posts, and more."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Writing Assistant",
      description: "Share content with AI-generated highlights, annotations, and custom summaries."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Your AI-powered toolbox
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Brainbox integrates seamlessly with your browser to provide powerful AI tools at your fingertips.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200">
            <BrainCircuit className="mr-2 h-5 w-5" />
            <span>Powered by state-of-the-art AI models</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;