import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../services/api';
import './AuthPages.css';

const CreateAdminPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/admin/create-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(data.message || 'Failed to create admin');
      }
    } catch (err: any) {
      setError(err.message || 'Server error');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-container">
          <div className="success-message">
            <h2>✅ Admin Created Successfully!</h2>
            <p>Redirecting to login page...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Create Admin User</h2>
        <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#666' }}>
          This page is for initial admin setup only
        </p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Admin Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              placeholder="admin@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
              placeholder="Min 6 chars, 1 uppercase, 1 lowercase, 1 number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>

          {password !== confirmPassword && confirmPassword && (
            <div className="error-message">
              Passwords do not match
            </div>
          )}

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading || password !== confirmPassword}
            className="auth-button"
            style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}
          >
            {loading ? 'Creating Admin...' : 'Create Admin'}
          </button>
        </form>

        <div className="auth-links">
          <p>
            Already have an admin? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminPage;
