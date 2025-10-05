import { useEffect, useState } from 'react';
import Logo3D from './Logo3D';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<'initial' | 'blast' | 'fadeOut'>('initial');

  useEffect(() => {
    const blastTimer = setTimeout(() => {
      setPhase('blast');
    }, 300);

    const fadeTimer = setTimeout(() => {
      setPhase('fadeOut');
    }, 1500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2300);

    return () => {
      clearTimeout(blastTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-slate-950 flex items-center justify-center transition-opacity duration-1000 ${
        phase === 'fadeOut' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            phase === 'blast'
              ? 'scale-[20] opacity-0'
              : 'scale-100 opacity-100'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        </div>

        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
            phase === 'blast' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
            <div className="absolute inset-0 animate-lightning-burst-1"></div>
            <div className="absolute inset-0 animate-lightning-burst-2"></div>
            <div className="absolute inset-0 animate-lightning-burst-3"></div>
            <div className="absolute inset-0 animate-lightning-burst-4"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-400/30 rounded-full blur-3xl animate-explosion"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/40 rounded-full blur-2xl animate-explosion" style={{ animationDelay: '0.1s' }}></div>
        </div>

        <div
          className={`relative z-10 transition-all duration-700 ${
            phase === 'initial'
              ? 'scale-50 opacity-0'
              : phase === 'blast'
              ? 'scale-110 opacity-100'
              : 'scale-100 opacity-100'
          }`}
        >
          <div className="relative">
            <div className={`absolute -inset-8 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full blur-2xl transition-opacity duration-500 ${
              phase === 'blast' ? 'opacity-100 animate-pulse-fast' : 'opacity-0'
            }`}></div>

            <div className="w-64 h-64 relative">
              <Logo3D className="w-full h-full" scale={0.8} />
            </div>

            {phase === 'blast' && (
              <>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full h-32 w-1 bg-gradient-to-t from-cyan-400 to-transparent animate-lightning-strike-1"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full h-32 w-1 bg-gradient-to-b from-cyan-400 to-transparent animate-lightning-strike-2"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full w-32 h-1 bg-gradient-to-l from-cyan-400 to-transparent animate-lightning-strike-3"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-32 h-1 bg-gradient-to-r from-cyan-400 to-transparent animate-lightning-strike-4"></div>

                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-cyan-400/50 rounded-full animate-ripple-1"></div>
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-400/50 rounded-full animate-ripple-2"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-24 h-24 border-2 border-cyan-400/50 rounded-full animate-ripple-1" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-24 h-24 border-2 border-blue-400/50 rounded-full animate-ripple-2" style={{ animationDelay: '0.3s' }}></div>
              </>
            )}
          </div>

          <div className={`text-center mt-8 transition-all duration-500 ${
            phase === 'blast' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              QuantumBAY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
