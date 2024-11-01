import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { FloatingIcons } from './components/FloatingIcons';
import { Navbar } from './components/Navbar';
import { WaitlistForm } from './components/WaitlistForm';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const icons = document.querySelectorAll('.animate-cursor');
      icons.forEach((icon) => {
        const rect = icon.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 25;
        const y = (e.clientY - rect.top - rect.height / 2) / 25;
        (icon as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="relative overflow-hidden">
        <FloatingIcons />
        <Navbar />

        <main className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Automate Your Job Hunt with
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"> AI-Powered Precision</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Upload your CV once, and let our AI handle everything - from finding the perfect job matches to sending personalized applications. Save hours of manual work and increase your chances of landing your dream job.
            </p>
            
            <WaitlistForm />
          </div>

          <Features />
          <HowItWorks />

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Job Search?</h2>
                <p className="text-xl text-gray-300 mb-8">Join our waitlist today and be the first to experience the future of job hunting</p>
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:from-cyan-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400 transition-colors duration-200"
                >
                  Join Waitlist <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;