import React from 'react';
import RegisterForm from '../components/RegisterForm';
import './AuthPages.css';

const RegisterPage: React.FC = () => {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <RegisterForm />
        <div className="auth-links">
          <p>
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
