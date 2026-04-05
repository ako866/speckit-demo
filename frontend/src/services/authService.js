// Replace API_URL with your actual backend URL when deploying or use env vars
const API_URL = 'http://localhost:3000/api';

// Helper to handle API responses globally
const handleResponse = async (response) => {
  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new Error(data?.error || 'API request failed');
  }
  return data;
};

export const authService = {
  async register({ email, password, role, adminSecret }) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role, adminSecret }),
      credentials: 'include'
    });
    return handleResponse(response);
  },

  async login({ email, password }) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    return handleResponse(response);
  },

  async logout() {
    const response = await fetch(`${API_URL}/auth/logout`, { 
      method: 'POST',
      credentials: 'include' 
    });
    return handleResponse(response);
  },

  async getMe() {
    const response = await fetch(`${API_URL}/auth/me`, { 
      method: 'GET',
      credentials: 'include'
    });
    return handleResponse(response);
  }
};
