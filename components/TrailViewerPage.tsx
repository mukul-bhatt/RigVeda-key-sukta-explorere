import React from 'react';
import { Trail } from '../types';

interface TrailViewerPageProps {
  trail: Trail;
  hymnIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onBackToTrails: () => void;
}

const TrailViewerPage: React.FC<TrailViewerPageProps> = ({ trail, hymnIndex, onNext, onPrev, onBackToTrails }) => {
  const currentHymn = trail.hymns[hymnIndex];
  const progress = ((hymnIndex + 1) / trail.hymns.length) * 100;

  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-8 animate-fadeIn">
      <div className="w-full max-w-3xl mx-auto flex-grow">
        {/* Header and Progress */}
        <header className="mb-8">
          <div className="flex justify-between items-center text-gray-400 mb-2">
            <h1 className="text-2xl font-bold text-amber-400">{trail.title}</h1>
            <span>Hymn {hymnIndex + 1} of {trail.hymns.length}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </header>

        {/* Main Content Panel */}
        <main className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 space-y-6">
          <p className="text-3xl sm:text-4xl font-serif text-center text-orange-200 leading-relaxed">
            {currentHymn.sanskrit}
          </p>
          <p className="text-gray-300 text-base sm:text-lg text-justify">
            {currentHymn.explainer}
          </p>
          <p className="text-gray-400 italic text-center">
            "{currentHymn.translation}"
          </p>
        </main>
      </div>

      {/* Navigation */}
      <footer className="w-full max-w-3xl mx-auto mt-8">
        <div className="flex justify-between items-center">
          <button 
            onClick={onPrev}
            disabled={hymnIndex === 0}
            className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button 
            onClick={onNext}
            className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-500 transition-colors"
          >
            {hymnIndex === trail.hymns.length - 1 ? 'Finish Trail' : 'Next Hymn'}
          </button>
        </div>
        <div className="text-center mt-8">
          <button onClick={onBackToTrails} className="text-gray-500 hover:text-amber-400 transition-colors">
            Back to Trails
          </button>
        </div>
      </footer>
    </div>
  );
};

export default TrailViewerPage;
