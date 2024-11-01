import React from 'react';
import { Briefcase, Search, Mail } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="bg-gray-800/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Upload Your CV</h3>
            <p className="text-gray-400">Simply upload your CV and let our AI analyze your experience and skills</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">AI Matches Jobs</h3>
            <p className="text-gray-400">Our system finds and ranks the best job opportunities for your profile</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Automated Applications</h3>
            <p className="text-gray-400">We send personalized applications to your chosen opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}