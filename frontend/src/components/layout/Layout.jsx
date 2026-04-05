import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Meeting Rooms', path: '/meeting-rooms' },
  ];

  // Dynamically add admin route if user is admin
  if (user?.role === 'ADMIN') {
    navLinks.push({ name: 'Admin Dashboard', path: '/admin' });
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Background gradients for atmosphere */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-cyan-900/10 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-indigo-900/10 blur-[120px] mix-blend-screen" />
      </div>

      {/* Glassmorphic Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
              S
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight">
              SpeckIt
            </span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link 
                      to={link.path} 
                      className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                        isActive 
                          ? 'bg-white/10 text-cyan-300 shadow-[inset_0_1px_rgba(255,255,255,0.1)]' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
              {user ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
                    <span className="text-xs text-indigo-200 font-medium tracking-wide">{user.email}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-white hover:text-red-400 bg-white/5 hover:bg-red-500/10 rounded-md transition-colors border border-transparent hover:border-red-500/20"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign in</Link>
                  <Link to="/register" className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 rounded-md transition-all shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-both">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
