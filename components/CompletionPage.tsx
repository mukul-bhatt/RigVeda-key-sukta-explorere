import React from 'react';
import { Trail } from '../types';

interface CompletionPageProps {
  trail: Trail;
  onExploreAnother: () => void;
}

const CompletionPage: React.FC<CompletionPageProps> = ({ trail, onExploreAnother }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 animate-fadeIn">
      <div className="max-w-xl w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 text-center shadow-lg">
        <div className="text-6xl mb-4">{trail.emoji}</div>
        <h1 className="text-3xl font-bold text-amber-300 mb-2">Trail Completed!</h1>
        <h2 className="text-2xl text-gray-200 mb-4">{trail.title}</h2>
        <p className="text-gray-400 mb-8">
          {trail.summary}
        </p>
        <button
          onClick={onExploreAnother}
          className="px-8 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 transform hover:scale-105"
        >
          Explore Another Trail
        </button>
      </div>
    </div>
  );
};

export default CompletionPage;
