import React from 'react';
import { View } from '../types';

interface LandingPageProps {
  onNavigate: (view: View) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 animate-fadeIn">
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-500">
          Key Suktas Explorer
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Uncover the wisdom of ancient hymns.
        </p>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center cursor-not-allowed opacity-50">
          <h2 className="text-3xl font-semibold text-gray-300">Free Explore</h2>
          <p className="text-gray-400 mt-2">Chart your own path through the Vedas.</p>
          <span className="inline-block mt-4 text-sm bg-yellow-800 text-yellow-200 px-3 py-1 rounded-full">Coming Soon</span>
        </div>
        <div 
          onClick={() => onNavigate('trails')}
          className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-700/60 hover:border-amber-400 transition-all duration-300 transform hover:scale-105"
        >
          <h2 className="text-3xl font-semibold text-amber-300">Curated Trails</h2>
          <p className="text-gray-400 mt-2">Follow guided journeys through key themes.</p>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
