# 🔀 Merge & Run Guide for Atmos Platform

This guide explains **which merge to do** and **how to run** the Atmos project.

---

## 🎯 Quick Answer

### Which Merge?

**Merge the `copilot/prepare-for-upcoming-task` branch into `main`**

This branch contains:
- ✅ Complete revolutionary design implementation
- ✅ All project documentation
- ✅ Frontend, Backend, and ML services scaffolding
- ✅ Neomorphic Liquid Ecosystem UI/UX

### How to Run?

**Three services need to run simultaneously:**
1. **Frontend** (Port 3000) - The revolutionary UI
2. **Backend** (Port 4000) - API server  
3. **ML Services** (Port 5000) - Machine learning engine

---

## 📋 Step-by-Step Instructions

### Step 1: Merge the Branch ✅

```bash
# Make sure you're in the project directory
cd /home/runner/work/Atmos/Atmos

# Check current branch
git branch
# Should show: * copilot/prepare-for-upcoming-task

# Switch to main branch
git checkout main

# Merge the feature branch
git merge copilot/prepare-for-upcoming-task

# Push the merged changes to GitHub
git push origin main
```

**What this does:**
- Merges all revolutionary design work into main branch
- Makes the new features the default for the project
- Updates the main branch on GitHub

---

### Step 2: Run the Frontend 🎨

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

**Expected Output:**
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
event - compiled client and server successfully
```

**Verify:** Open http://localhost:3000 in your browser

**What you should see:**
- ✨ Particle constellation background (green particles)
- 💎 Neomorphic soft shadows on all cards
- 🌊 Liquid morphing buttons ("Start Your Journey")
- 💓 Breathing animations on cards
- 🌡️ Temperature-coded stats (blue, yellow, coral)

---

### Step 3: Run the Backend 🔧

**Open a NEW terminal window/tab**

```bash
# Navigate to backend directory
cd backend

# Install dependencies (first time only)
npm install

# Create environment file (first time only)
cp .env.example .env

# Edit .env and set your database credentials
# You can use nano, vim, or any text editor
nano .env

# Start the development server
npm run dev
```

**Expected Output:**
```
🚀 Atmos API server running on port 4000
📍 Environment: development
🔗 API endpoint: http://localhost:4000/api/v1
```

**Verify:** Open http://localhost:4000/health in your browser

**What you should see:**
```json
{
  "status": "ok",
  "message": "Atmos API is running",
  "timestamp": "2026-02-17T07:39:48.343Z"
}
```

---

### Step 4: Run the ML Services 🤖

**Open ANOTHER NEW terminal window/tab**

```bash
# Navigate to ML services directory
cd ml-services

# Create virtual environment (first time only)
python -m venv venv

# Activate virtual environment
# On Mac/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install dependencies (first time only)
pip install -r requirements.txt

# Create environment file (first time only)
cp .env.example .env

# Start the ML service
python app/main.py
```

**Expected Output:**
```
🚀 Starting Atmos ML Service on 0.0.0.0:5000
🤖 ML endpoints available at http://localhost:5000
```

**Verify:** Open http://localhost:5000/health in your browser

**What you should see:**
```json
{
  "status": "healthy",
  "service": "Atmos ML Service",
  "version": "1.0.0"
}
```

---

## 🖥️ All Services Running - Final Verification

You should now have **3 terminal windows** running:

| Service | Port | URL | Status |
|---------|------|-----|--------|
| **Frontend** | 3000 | http://localhost:3000 | Revolutionary UI with particles |
| **Backend** | 4000 | http://localhost:4000/health | API health check |
| **ML Services** | 5000 | http://localhost:5000/health | ML health check |

---

## 🎨 What You'll See on the Frontend

### Landing Page Features

1. **Particle Constellation Background** 🌌
   - 100 green particles floating across the screen
   - Particles connect when close together
   - Particles gravitate toward your cursor

2. **Neomorphic Navigation** 💎
   - Soft shadows that look like pressed clay
   - Logo breathes subtly
   - Smooth hover effects

3. **Hero Section** 🌟
   - "Living • Breathing • Ecosystem Platform" badge with pulse
   - Gradient-animated heading
   - Two liquid morphing buttons
   - Three temperature-coded stats cards

4. **Revolutionary Features** ✨
   - 6 feature cards with 3D tilt effect
   - Each card breathes independently
   - Shimmer effect on hover

5. **Organic Process** 🌱
   - Three circular badges (Breathe In, Process, Breathe Out)
   - Heartbeat pulse animations
   - Temperature-based colors

6. **Living Transparently** 🛡️
   - Large neomorphic card
   - Pulsing checkmarks and X marks
   - Ecosystem-themed content

---

## 🔧 Troubleshooting

### Frontend Issues

**Problem:** Port 3000 already in use
```bash
# Kill the process using port 3000
# On Mac/Linux:
lsof -ti:3000 | xargs kill -9
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Problem:** Dependencies won't install
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Problem:** Page is blank
```bash
# Check console for errors
# Make sure you're using Node.js 18+
node --version
```

---

### Backend Issues

**Problem:** Database connection error
```bash
# Make sure PostgreSQL is running
# Check credentials in .env file
# Create database if it doesn't exist:
createdb atmos_db
```

**Problem:** Port 4000 already in use
```bash
# Change port in .env file
PORT=4001
```

---

### ML Services Issues

**Problem:** Python module not found
```bash
# Make sure virtual environment is activated
# You should see (venv) in your terminal prompt
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

# Reinstall dependencies
pip install -r requirements.txt
```

**Problem:** Permission denied
```bash
# On Mac/Linux, try:
sudo pip install -r requirements.txt
```

---

## 🎯 Common Workflows

### Daily Development

```bash
# Terminal 1: Frontend
cd frontend
npm run dev

# Terminal 2: Backend
cd backend
npm run dev

# Terminal 3: ML Services
cd ml-services
source venv/bin/activate
python app/main.py
```

### Making Changes

1. **Edit files** in your code editor
2. **Save** - servers auto-reload
3. **Refresh browser** to see changes
4. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```

### Testing Your Code

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd backend
npm test

# ML tests
cd ml-services
pytest
```

---

## 📊 Project Status

### ✅ What's Complete

- ✅ Revolutionary Neomorphic Liquid Ecosystem design
- ✅ Particle constellation background
- ✅ Neomorphic soft UI components
- ✅ Liquid morphing buttons
- ✅ Biometric animations (heartbeat, breathing)
- ✅ Synesthetic temperature colors
- ✅ Complete project documentation
- ✅ Backend API structure
- ✅ ML services structure
- ✅ Frontend landing page

### ⏳ What's Next (Implementation Needed)

- ⏳ Database models (User, Activity, EmissionFactor)
- ⏳ Authentication system (signup, login)
- ⏳ Emission calculation engine
- ⏳ Activity tracking MCQ interface
- ⏳ Dashboard with charts
- ⏳ ML clustering algorithm
- ⏳ Recommendation engine
- ⏳ Map visualization

---

## 🎓 Learning Resources

### Documentation Files

- **[QUICKSTART.md](QUICKSTART.md)** - 10-minute setup guide
- **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Project overview
- **[DESIGN_PROMPT_SUMMARY.md](DESIGN_PROMPT_SUMMARY.md)** - Revolutionary design concept
- **[REVOLUTIONARY_IMPLEMENTATION_SUMMARY.md](REVOLUTIONARY_IMPLEMENTATION_SUMMARY.md)** - What was implemented
- **[SYSTEM_STATUS.md](SYSTEM_STATUS.md)** - System integration report
- **[docs/PRD.md](docs/PRD.md)** - Product requirements
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** - System architecture
- **[docs/API.md](docs/API.md)** - API documentation
- **[docs/ETHICS.md](docs/ETHICS.md)** - Ethical guidelines

---

## 🎬 Quick Commands Reference

### Git Commands
```bash
# Check current branch
git branch

# Switch to main branch
git checkout main

# Merge feature branch
git merge copilot/prepare-for-upcoming-task

# Push to GitHub
git push origin main

# Create new feature branch
git checkout -b feature/my-feature

# See changes
git status
git log --oneline -10
```

### Frontend Commands
```bash
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm test             # Run tests
npm run lint         # Check code style
```

### Backend Commands
```bash
cd backend
npm install          # Install dependencies
npm run dev          # Start dev server
npm start            # Start production server
npm test             # Run tests
npm run lint         # Check code style
```

### ML Services Commands
```bash
cd ml-services
python -m venv venv                    # Create virtual environment
source venv/bin/activate               # Activate (Mac/Linux)
venv\Scripts\activate                  # Activate (Windows)
pip install -r requirements.txt        # Install dependencies
python app/main.py                     # Start service
pytest                                 # Run tests
pytest --cov=app tests/                # Run tests with coverage
```

---

## ✅ Success Checklist

After following this guide, you should have:

- [x] Merged `copilot/prepare-for-upcoming-task` into `main`
- [x] Frontend running on http://localhost:3000
- [x] Revolutionary UI with particles visible
- [x] Backend running on http://localhost:4000
- [x] ML services running on http://localhost:5000
- [x] All health checks passing
- [x] No console errors

---

## 🚀 What's Next?

### Immediate Next Steps

1. **Explore the Revolutionary UI**
   - Move your cursor around to see magnetic button effects
   - Watch particles gravitate toward your cursor
   - See cards breathe and tilt with mouse movement
   - Notice different temperature colors on stats

2. **Read the Documentation**
   - Start with PROJECT_SUMMARY.md
   - Then read REVOLUTIONARY_IMPLEMENTATION_SUMMARY.md
   - Deep dive into docs/ARCHITECTURE.md

3. **Start Building Features**
   - Week 1-2: Database models and authentication
   - Week 3-4: Activity tracking and dashboard
   - Week 5+: ML recommendations and map visualization

### Development Priorities

**Backend:**
1. Create database schema (models/)
2. Implement authentication (controllers/auth.js)
3. Build emission calculation engine (services/emissions.js)
4. Create activity logging endpoints (controllers/activities.js)

**Frontend:**
1. Create auth pages (pages/auth/login.js, pages/auth/signup.js)
2. Build dashboard layout (pages/dashboard/index.js)
3. Implement activity tracking forms (components/ActivityForm.js)
4. Add charts for emissions visualization

**ML Services:**
1. Implement K-Means clustering (app/models/clustering.py)
2. Build recommendation engine (app/services/recommendations.py)
3. Add explainability layer (app/services/explainer.py)

---

## 💡 Pro Tips

### 1. Keep All Terminals Open
Don't close the terminal windows while developing. You need all three services running.

### 2. Watch for Auto-Reload
Both frontend and backend support hot module reloading. Just save your files and refresh the browser.

### 3. Check Console Often
Keep your browser's developer console open (F12) to catch any errors early.

### 4. Commit Frequently
Don't wait for perfect code. Commit working features as you complete them.

### 5. Test As You Build
Write tests alongside your code, not after everything is done.

---

## 🎯 Final Notes

**The revolutionary design is already implemented and running!** 🎉

You now have:
- ✨ World's first Neomorphic Liquid Ecosystem design
- 🌊 Living, breathing interface
- 💎 Premium neomorphic UI
- 🌟 Biometric animations
- 🎨 Synesthetic color coding

**Your task is to build the backend features (auth, emissions, ML) to make it fully functional.**

The hard part (design, architecture, documentation) is DONE. Now it's about implementing the logic step by step.

---

## 📞 Need Help?

- **Check documentation** in docs/ folder
- **Read error messages** carefully
- **Search existing code** for examples
- **Open GitHub issues** if stuck
- **Refer to QUICKSTART.md** for detailed setup

---

**You're ready to go! Start the servers and enjoy the revolutionary design!** 🚀✨

**Built with 💚 for a sustainable, living future** 🌍
