import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminSecret, setAdminSecret] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    if (password.length < 8) {
      return setError('Password must be at least 8 characters');
    }

    try {
      setLoading(true);
      await register({ email, password, role: isAdmin ? 'ADMIN' : 'USER', adminSecret });
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create an account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-md text-sm text-center">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="username"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="new-password"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                autoComplete="new-password"
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="is-admin"
              name="is-admin"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700"
              checked={isAdmin}
              onChange={(e) => setIsAdmin(e.target.checked)}
            />
            <label htmlFor="is-admin" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
              Register as Administrator
            </label>
          </div>

          {isAdmin && (
            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
              <label htmlFor="adminSecret" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Admin Secret Code</label>
              <input
                id="adminSecret"
                name="adminSecret"
                type="password"
                required={isAdmin}
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-indigo-300 dark:border-indigo-600 dark:bg-gray-700 dark:text-white placeholder-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={adminSecret}
                placeholder="Enter the secret code..."
                onChange={(e) => setAdminSecret(e.target.value)}
              />
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70"
            >
              {loading ? 'Creating account...' : 'Sign up'}
            </button>
          </div>
          
          <div className="text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
            <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
