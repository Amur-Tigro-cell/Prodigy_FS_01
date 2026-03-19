# MERN Stack Authentication System

A full-stack web application implementing secure user authentication and authorization using React.js, Node.js, Express, and MongoDB.

## 🚀 Live Demo

**Frontend (GitHub Pages)**: https://Amur-Tigro-cell.github.io/Prodigy_FS_01

**Backend (Render)**: https://mern-auth-backend.onrender.com

## Features

### Authentication
- User registration with email validation
- Secure login with JWT tokens
- Password hashing using bcrypt
- Protected routes with middleware
- Role-based access control (user/admin)
- Logout functionality

### Security
- JWT token-based authentication
- Secure password storage (bcrypt)
- Input validation and sanitization
- CORS configuration
- Environment variables for sensitive data

### Frontend
- React.js with TypeScript
- React Router for navigation
- Context API for state management
- Responsive UI design
- Form validation
- Error handling

### Backend
- Node.js with Express
- MongoDB with Mongoose
- RESTful API endpoints
- JWT middleware
- Input validation with express-validator

## 🌐 Deployment

### Frontend (GitHub Pages)
- Built with React and deployed to GitHub Pages
- Static site hosting
- URL: https://Amur-Tigro-cell.github.io/Prodigy_FS_01

### Backend (Render)
- Node.js/Express API deployed to Render
- MongoDB Atlas integration
- URL: https://mern-auth-backend.onrender.com

## 📁 Project Structure

```
mern-auth/
├── backend/
│   ├── models/
│   │   └── User.js                 # User schema and model
│   ├── routes/
│   │   ├── auth.js                 # Authentication routes
│   │   ├── protected.js            # Protected routes
│   │   └── admin.js               # Admin routes
│   ├── middleware/
│   │   └── auth.js                 # JWT middleware
│   ├── .env                        # Environment variables
│   ├── package.json                # Backend dependencies
│   └── server.js                   # Express server
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LoginForm.tsx       # Login form component
│   │   │   ├── RegisterForm.tsx    # Registration form
│   │   │   └── ProtectedRoute.tsx  # Route protection
│   │   ├── context/
│   │   │   └── AuthContext.tsx     # Authentication context
│   │   ├── pages/
│   │   │   ├── LoginPage.tsx       # Login page
│   │   │   ├── RegisterPage.tsx    # Registration page
│   │   │   ├── DashboardPage.tsx   # Protected dashboard
│   │   │   ├── CreateAdminPage.tsx # Admin creation
│   │   │   └── AdminDashboardPage.tsx # Admin panel
│   │   ├── services/
│   │   │   └── api.ts              # API service
│   │   └── .env                    # Frontend environment variables
│   ├── package.json                # Frontend dependencies
│   └── build/                     # Production build
└── README.md                       # This file
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd mern-auth/backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

4. Start the backend server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd mern-auth/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend/src directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the frontend development server:
```bash
npm start
```

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user

### Protected Routes
- `GET /api/protected/dashboard` - User dashboard
- `GET /api/protected/profile` - User profile
- `GET /api/protected/admin` - Admin only route

## Usage

1. Make sure MongoDB is running on your system
2. Start the backend server (port 5000)
3. Start the frontend development server (port 3000)
4. Open your browser and navigate to `http://localhost:3000`
5. Register a new account or login with existing credentials
6. Access protected routes after successful authentication

## Security Features

- **Password Hashing**: All passwords are hashed using bcrypt before storage
- **JWT Tokens**: Secure token-based authentication with expiration
- **Input Validation**: Server-side validation for all inputs
- **CORS Protection**: Configured CORS for secure cross-origin requests
- **Role-Based Access**: Different access levels for users and admins
- **Environment Variables**: Sensitive data stored in environment files

## Development

### Running in Development Mode
- Backend: `npm run dev` (uses nodemon for auto-restart)
- Frontend: `npm start` (React development server)

### Production Build
- Frontend: `npm run build` (creates optimized build)

## Future Enhancements

- Password reset functionality
- Email verification
- OAuth integration (Google, GitHub)
- Two-factor authentication
- Rate limiting
- Account lockout after failed attempts
- Audit logging
- Profile picture upload
- Social login options

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
