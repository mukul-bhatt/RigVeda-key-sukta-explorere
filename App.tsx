import React, { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import CuratedTrailsPage from './components/CuratedTrailsPage';
import TrailViewerPage from './components/TrailViewerPage';
import CompletionPage from './components/CompletionPage';
import { View, Trail } from './types';
import { TRAILS_DATA } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');
  const [selectedTrail, setSelectedTrail] = useState<Trail | null>(null);
  const [currentHymnIndex, setCurrentHymnIndex] = useState(0);

  const handleNavigate = useCallback((newView: View) => {
    setView(newView);
  }, []);
  
  const handleBackToHome = useCallback(() => {
    setSelectedTrail(null);
    setCurrentHymnIndex(0);
    setView('landing');
  }, []);

  const handleSelectTrail = useCallback((trail: Trail) => {
    setSelectedTrail(trail);
    setCurrentHymnIndex(0);
    setView('viewer');
  }, []);

  const handleBackToTrails = useCallback(() => {
    setSelectedTrail(null);
    setCurrentHymnIndex(0);
    setView('trails');
  }, []);

  const handleNextHymn = useCallback(() => {
    if (selectedTrail && currentHymnIndex < selectedTrail.hymns.length - 1) {
      setCurrentHymnIndex(prev => prev + 1);
    } else {
      setView('completion');
    }
  }, [selectedTrail, currentHymnIndex]);

  const handlePrevHymn = useCallback(() => {
    if (currentHymnIndex > 0) {
      setCurrentHymnIndex(prev => prev - 1);
    }
  }, [currentHymnIndex]);

  const renderContent = () => {
    switch (view) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'trails':
        return <CuratedTrailsPage trails={TRAILS_DATA} onSelectTrail={handleSelectTrail} onBack={handleBackToHome} />;
      case 'viewer':
        if (selectedTrail) {
          return (
            <TrailViewerPage
              trail={selectedTrail}
              hymnIndex={currentHymnIndex}
              onNext={handleNextHymn}
              onPrev={handlePrevHymn}
              onBackToTrails={handleBackToTrails}
            />
          );
        }
        return null;
      case 'completion':
        if (selectedTrail) {
          return (
            <CompletionPage
              trail={selectedTrail}
              onExploreAnother={handleBackToTrails}
            />
          );
        }
        return null;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 font-sans">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
      <div key={view}>
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
