import React from 'react';

const MeetingRooms = () => {
  const dummyRooms = [
    { id: 'alpha', name: 'Alpha Room', capacity: 10, status: 'available' },
    { id: 'beta', name: 'Beta Sector', capacity: 4, status: 'occupied' },
    { id: 'gamma', name: 'Gamma Bay', capacity: 20, status: 'maintenance' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'available': return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20';
      case 'occupied': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'maintenance': return 'text-red-400 bg-red-400/10 border-red-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400">Meeting Environments</h2>
        <p className="text-slate-400">Virtual and physical collaboration spaces. (Conceptual Interface)</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 hover:transform-none">
        {dummyRooms.map((room, index) => (
          <div 
            key={room.id} 
            className="group relative overflow-hidden rounded-2xl bg-slate-900/40 backdrop-blur-sm border border-white/5 p-6 hover:bg-slate-900/60 transition-colors duration-300 animate-in slide-in-from-bottom-4 fade-in fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Highlight effect on hover */}
            <div className="absolute -inset-px bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl pointer-events-none" />
            
            <div className="relative flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center text-slate-300 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border uppercase tracking-widest ${getStatusColor(room.status)}`}>
                {room.status}
              </span>
            </div>

            <div className="relative">
              <h3 className="text-xl font-semibold mb-1 text-slate-200 group-hover:text-white transition-colors">{room.name}</h3>
              <p className="text-sm text-slate-500 mb-6 flex items-center gap-1.5 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                Capacity: {room.capacity}
              </p>

              <button 
                disabled={room.status !== 'available'}
                className="w-full py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed bg-slate-800 text-slate-300 border border-white/5 hover:bg-slate-700 hover:text-white hover:border-white/10 active:scale-[0.98]"
              >
                {room.status === 'available' ? 'Reserve Space' : 'Unavailable'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetingRooms;
