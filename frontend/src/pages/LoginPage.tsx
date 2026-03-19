import React from 'react';
import LoginForm from '../components/LoginForm';
import './AuthPages.css';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <LoginForm />
        <div className="auth-links">
          <p>
            Don't have an account? <a href="/register">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
