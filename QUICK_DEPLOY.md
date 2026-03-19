# Quick Backend Deployment Guide

## 🚀 Deploy Backend to Heroku (5 Minutes)

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create free cluster
4. Get connection string like: `mongodb+srv://username:password@cluster.mongodb.net/mern-auth`

### Step 2: Deploy to Heroku
1. Go to https://www.heroku.com
2. Sign up for free account
3. Click "Create New App"
4. Choose GitHub deployment
5. Connect your repository: `https://github.com/Amur-Tigro-cell/Prodigy_FS_01`
6. Set these Config Vars in Heroku Settings:
   ```
   NODE_ENV=production
   MONGODB_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key-here
   PORT=5000
   ```

### Step 3: Deploy Backend Only
1. In Heroku, set build path to: `backend`
2. Click "Deploy Branch"

### Step 4: Update Frontend API URL
1. Edit `frontend/src/.env`:
   ```
   REACT_APP_API_URL=https://your-app-name.herokuapp.com/api
   ```
2. Re-deploy frontend:
   ```bash
   cd frontend
   npm run deploy
   ```

## 🎯 Expected Result
- Backend: `https://your-app-name.herokuapp.com`
- Frontend: `https://Amur-Tigro-cell.github.io/Prodigy_FS_01`
- Full working app!

## 🌐 Alternative: Use Vercel (Easier)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `cd backend && vercel --prod`
3. Update frontend API URL to Vercel URL

## 📱 Quick Test
After deployment, test:
- Registration: `https://your-app-name.herokuapp.com/api/auth/register`
- Login: `https://your-app-name.herokuapp.com/api/auth/login`

## 🔧 What's Already Prepared
- ✅ Procfile for Heroku
- ✅ Node.js engine specified
- ✅ Environment variables template
- ✅ Production-ready configuration

**Your backend is ready for deployment! Just follow the steps above.**
