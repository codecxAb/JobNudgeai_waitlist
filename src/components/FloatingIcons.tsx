import React from 'react';
import { Cpu, Code, Network, Bot, Sparkles } from 'lucide-react';

const floatingIcons = [
  <Cpu key="cpu" className="text-cyan-400 opacity-20 w-12 h-12" />,
  <Code key="code" className="text-cyan-500 opacity-20 w-16 h-16" />,
  <Network key="network" className="text-cyan-300 opacity-20 w-14 h-14" />,
  <Bot key="bot" className="text-cyan-400 opacity-20 w-10 h-10" />,
  <Sparkles key="sparkles" className="text-cyan-300 opacity-20 w-8 h-8" />
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0">
      {floatingIcons.map((icon, index) => (
        <div
          key={index}
          className="floating-icon absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}