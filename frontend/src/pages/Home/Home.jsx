import React, { useEffect, useState } from 'react';
import { getHealth } from '../../services/api';

const Home = () => {
  const [health, setHealth] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const data = await getHealth();
        setHealth(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => setIsLoading(false), 800);
      }
    };
    fetchHealth();
  }, []);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="col-span-full md:col-span-2 mb-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-100">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">SpeckIt</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl">
          The next-generation application scaffold. Built for speed, designed for elegance, and ready for your ideas.
        </p>
      </div>
      
      {/* Primary Card */}
      <div className="relative group rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/60 hover:border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl duration-500 pointer-events-none" />
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-slate-200">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          Scaffold Status
        </h2>
        <p className="text-slate-400 leading-relaxed mb-6">
          Your frontend architecture is fully configured with React, React Router, and Tailwind CSS. The structure is modular and ready to scale.
        </p>
        <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full border border-cyan-400/20">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-[pulse_2s_ease-in-out_infinite]" />
          Frontend Active
        </div>
      </div>

      {/* Backend Connection Card */}
      <div className="relative group rounded-2xl bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-slate-900/60 hover:border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-200">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20 shadow-inner">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          </div>
          Backend Services
        </h2>
        
        <div className="flex flex-col justify-center h-[88px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center animate-in fade-in duration-500">
              <div className="w-6 h-6 border-2 border-indigo-500/30 border-t-indigo-400 rounded-full animate-spin mb-3"></div>
              <span className="text-sm text-slate-500 tracking-wide text-center">Establishing telemetrics...</span>
            </div>
          ) : error ? (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 animate-in slide-in-from-bottom-2 fade-in duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <strong className="block text-sm font-semibold mb-0.5">Connection Failed</strong>
                <span className="text-xs opacity-80">{error}</span>
              </div>
            </div>
          ) : health ? (
            <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-in slide-in-from-bottom-2 fade-in duration-500">
              <div className="relative flex h-3 w-3 mt-1.5 shrink-0">
                <span className="animate-[ping_1.5s_ease-out_infinite] absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </div>
              <div className="flex-1">
                <strong className="block text-sm font-medium mb-1.5 text-emerald-300">API Gateway Online</strong>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex flex-col bg-emerald-950/30 p-2 rounded-lg border border-emerald-500/10">
                    <span className="opacity-70 text-emerald-500 mb-0.5">Status</span>
                    <span className="font-mono uppercase tracking-wider text-emerald-200">{health.status}</span>
                  </div>
                  <div className="flex flex-col bg-emerald-950/30 p-2 rounded-lg border border-emerald-500/10">
                    <span className="opacity-70 text-emerald-500 mb-0.5">Version</span>
                    <span className="font-mono text-emerald-200">{health.version}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
