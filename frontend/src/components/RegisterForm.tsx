import React, { useState, FormEvent } from 'react';
import { useAuth } from '../context/AuthContext';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { state, register, clearError } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      return;
    }
    
    await register(email, password);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (state.error) clearError();
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (state.error) clearError();
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (state.error) clearError();
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            disabled={state.isLoading}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            disabled={state.isLoading}
            minLength={6}
            placeholder="Min 6 chars, 1 uppercase, 1 lowercase, 1 number"
          />
          <small className="form-help">
            Password must contain at least 6 characters, one uppercase letter, one lowercase letter, and one number
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            disabled={state.isLoading}
            minLength={6}
          />
        </div>

        {password !== confirmPassword && confirmPassword && (
          <div className="error-message">
            Passwords do not match
          </div>
        )}

        {state.error && (
          <div className="error-message">
            {state.error}
          </div>
        )}

        <button 
          type="submit" 
          disabled={state.isLoading || password !== confirmPassword}
          className="auth-button"
        >
          {state.isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
