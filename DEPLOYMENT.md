# Deployment Guide

## Frontend Deployment (GitHub Pages)

✅ **DEPLOYED**: https://Amur-Tigro-cell.github.io/Prodigy_FS_01/

The frontend is successfully deployed on GitHub Pages!

## Backend Deployment Options

Since this is a MERN application with a Node.js backend, you have several options for backend deployment:

### Option 1: Heroku (Recommended)
1. Create a Heroku account
2. Install Heroku CLI
3. Run these commands:
```bash
cd backend
heroku create your-app-name
heroku config:set NODE_ENV=production
heroku config:set MONGODB_URI=your-mongodb-connection-string
heroku config:set JWT_SECRET=your-secret-key
git subtree push --prefix backend heroku main
```

### Option 2: Vercel
1. Install Vercel CLI
2. Run:
```bash
cd backend
vercel --prod
```

### Option 3: AWS EC2
1. Launch EC2 instance
2. Install Node.js, MongoDB
3. Clone repository and run backend

### Option 4: Railway
1. Connect GitHub to Railway
2. Auto-deploy from main branch

## Environment Variables Required

For production, you'll need:
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secure JWT secret
- `NODE_ENV`: production

## Frontend Configuration

The frontend is configured to work with the deployed backend. Update the API URL in:
`frontend/src/.env`:
```
REACT_APP_API_URL=https://your-backend-url.com/api
```

## Current Status

- ✅ Frontend: Deployed on GitHub Pages
- ⏳ Backend: Ready for deployment (choose option above)
- 🗄️ Database: MongoDB (setup required)

## Next Steps

1. Choose backend deployment option
2. Set up MongoDB Atlas (recommended for production)
3. Update frontend API URL
4. Test deployed application

## GitHub Repository

https://github.com/Amur-Tigro-cell/Prodigy_FS_01
