import React from 'react';
import { Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative animate-cursor">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            <div className="absolute top-0 left-0 h-8 w-8 bg-cyan-400 blur-lg opacity-20"></div>
          </div>
          <span className="ml-2 text-2xl font-bold text-white">JobNudgeAI</span>
        </div>
      </div>
    </nav>
  );
}