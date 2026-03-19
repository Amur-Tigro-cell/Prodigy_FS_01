import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { protectedAPI } from '../services/api';
import './DashboardPage.css';

interface DashboardData {
  message: string;
  user: {
    id: string;
    email: string;
    role: string;
  };
}

const DashboardPage: React.FC = () => {
  const { state, logout } = useAuth();
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await protectedAPI.getDashboard();
        setDashboardData(response.data);
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {state.user?.email}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        {dashboardData && (
          <div className="dashboard-welcome">
            <h2>{dashboardData.message}</h2>
            <div className="user-details">
              <p><strong>Email:</strong> {dashboardData.user.email}</p>
              <p><strong>Role:</strong> {dashboardData.user.role}</p>
              <p><strong>User ID:</strong> {dashboardData.user.id}</p>
            </div>
          </div>
        )}

        <div className="dashboard-actions">
          <div className="action-card">
            <h3>Profile</h3>
            <p>View and update your profile information</p>
            <button className="action-button">View Profile</button>
          </div>

          {state.user?.role === 'admin' && (
            <div className="action-card admin-card">
              <h3>Admin Panel</h3>
              <p>Access administrative features</p>
              <button 
                className="action-button admin-button"
                onClick={() => window.location.href = '/admin-dashboard'}
              >
                Go to Admin Dashboard
              </button>
            </div>
          )}

          <div className="action-card">
            <h3>Settings</h3>
            <p>Manage your account settings</p>
            <button className="action-button">Settings</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
