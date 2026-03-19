import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { protectedAPI } from '../services/api';
import './DashboardPage.css';

interface User {
  _id: string;
  email: string;
  role: string;
  createdAt: string;
  lastLogin?: string;
}

const AdminDashboardPage: React.FC = () => {
  const { state, logout } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/users', {
        headers: {
          'Authorization': `Bearer ${state.token}`,
        },
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setUsers(data.users);
      } else {
        setError(data.message || 'Failed to fetch users');
      }
    } catch (err: any) {
      setError(err.message || 'Server error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${state.token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUsers(users.filter(user => user._id !== userId));
      } else {
        alert(data.message || 'Failed to delete user');
      }
    } catch (err: any) {
      alert(err.message || 'Server error');
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner">Loading admin dashboard...</div>
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
        <h1>🔧 Admin Dashboard</h1>
        <div className="user-info">
          <span>Admin: {state.user?.email}</span>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </header>

      <main className="dashboard-content">
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p className="stat-number">{users.length}</p>
          </div>
          <div className="stat-card">
            <h3>Admin Users</h3>
            <p className="stat-number">{users.filter(u => u.role === 'admin').length}</p>
          </div>
          <div className="stat-card">
            <h3>Regular Users</h3>
            <p className="stat-number">{users.filter(u => u.role === 'user').length}</p>
          </div>
        </div>

        <div className="users-table-container">
          <h2>User Management</h2>
          <div className="users-table">
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created</th>
                  <th>Last Login</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>{user.email}</td>
                    <td>
                      <span className={`role-badge ${user.role}`}>
                        {user.role.toUpperCase()}
                      </span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      {user.lastLogin 
                        ? new Date(user.lastLogin).toLocaleDateString()
                        : 'Never'
                      }
                    </td>
                    <td>
                      {user._id !== state.user?.id && (
                        <button
                          onClick={() => handleDeleteUser(user._id)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      )}
                      {user._id === state.user?.id && (
                        <span style={{ color: '#666', fontSize: '0.9rem' }}>
                          Current User
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="dashboard-actions">
          <div className="action-card">
            <h3>User Dashboard</h3>
            <p>Switch to user view</p>
            <button 
              className="action-button"
              onClick={() => window.location.href = '/dashboard'}
            >
              User Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;
