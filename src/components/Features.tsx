import React from 'react';
import { Bot, Search, Mail, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    title: "AI-Powered CV Analysis",
    description: "Our advanced AI scans and understands your CV to match you with the perfect opportunities"
  },
  {
    icon: <Search className="w-6 h-6 text-cyan-400" />,
    title: "Smart Job Matching",
    description: "Automated search across top companies to find positions that match your skills and experience"
  },
  {
    icon: <Mail className="w-6 h-6 text-cyan-400" />,
    title: "Personalized Outreach",
    description: "Custom-tailored cold emails that make you stand out to potential employers"
  },
  {
    icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    title: "Automated Applications",
    description: "Streamlined application process that saves you hours of manual work"
  }
];

export function Features() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-cyan-400/50 transition-colors duration-200">
            <div className="bg-gray-900/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}