import React from 'react';
import { Trail } from '../types';

interface CuratedTrailsPageProps {
  trails: Trail[];
  onSelectTrail: (trail: Trail) => void;
  onBack: () => void;
}

const CuratedTrailsPage: React.FC<CuratedTrailsPageProps> = ({ trails, onSelectTrail, onBack }) => {
  return (
    <div className="min-h-screen p-4 sm:p-8 animate-fadeIn">
      <div className="max-w-6xl mx-auto">
        <button onClick={onBack} className="mb-8 text-amber-400 hover:text-amber-300 transition-colors">
          &larr; Back to Home
        </button>
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-100">Curated Trails</h1>
        <p className="text-center text-gray-400 mb-12">Select a trail to begin your journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trails.map((trail) => (
            <div
              key={trail.id}
              onClick={() => onSelectTrail(trail)}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 flex flex-col items-center text-center cursor-pointer hover:bg-gray-700/60 hover:border-amber-400 transition-all duration-300 transform hover:-translate-y-2"
            >
              <span className="text-6xl mb-4">{trail.emoji}</span>
              <h2 className="text-2xl font-semibold text-amber-300">{trail.title}</h2>
              <p className="text-gray-400 mt-2 flex-grow">{trail.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuratedTrailsPage;
