# Quick Start Guide
# Atmos - Getting Started in 10 Minutes

This guide will help you get the Atmos platform running on your local machine.

---

## Prerequisites

Before you begin, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.9 or higher) - [Download](https://www.python.org/)
- **PostgreSQL** (v14 or higher) - [Download](https://www.postgresql.org/)
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended)

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/shivansh-12315646/Atmos.git
cd Atmos
```

---

## Step 2: Setup PostgreSQL Database

### Option A: Using PostgreSQL CLI
```bash
# Create database
createdb atmos_db

# Or using psql
psql -U postgres
CREATE DATABASE atmos_db;
\q
```

### Option B: Using GUI (pgAdmin)
1. Open pgAdmin
2. Right-click "Databases" → "Create" → "Database"
3. Name: `atmos_db`
4. Click "Save"

---

## Step 3: Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies (this may take 2-3 minutes)
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your database credentials
# Update these values:
# DB_USER=your_postgres_username
# DB_PASSWORD=your_postgres_password
# JWT_SECRET=any_random_string_here

# Start the backend server
npm run dev
```

You should see:
```
🚀 Atmos API server running on port 4000
📍 Environment: development
🔗 API endpoint: http://localhost:4000/api/v1
```

**Test it**: Open http://localhost:4000/health in your browser

---

## Step 4: Setup Frontend (New Terminal)

```bash
# Open a NEW terminal window
cd frontend

# Install dependencies (this may take 2-3 minutes)
npm install

# Create environment file
cp .env.example .env.local

# The default values should work, but verify:
# NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1

# Start the frontend development server
npm run dev
```

You should see:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

**View it**: Open http://localhost:3000 in your browser

---

## Step 5: Setup ML Service (New Terminal)

```bash
# Open a NEW terminal window
cd ml-services

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# Start the ML service
python app/main.py
```

You should see:
```
🚀 Starting Atmos ML Service on 0.0.0.0:5000
```

**Test it**: Open http://localhost:5000/health in your browser

---

## Step 6: Verify Everything Works

You should now have **3 servers running**:

1. **Backend**: http://localhost:4000
   - API health check: http://localhost:4000/health
   
2. **Frontend**: http://localhost:3000
   - Landing page with beautiful UI
   
3. **ML Service**: http://localhost:5000
   - ML health check: http://localhost:5000/health

---

## Troubleshooting

### Backend won't start

**Error**: "Unable to connect to database"
- **Solution**: Check PostgreSQL is running and credentials in `.env` are correct

**Error**: "Port 4000 already in use"
- **Solution**: Change `PORT=4000` to `PORT=4001` in `.env`

### Frontend won't start

**Error**: "Port 3000 already in use"
- **Solution**: Kill process on port 3000 or change port in `package.json`

### ML Service won't start

**Error**: "No module named flask"
- **Solution**: Ensure virtual environment is activated and run `pip install -r requirements.txt` again

**Error**: "Permission denied"
- **Solution**: On Mac/Linux, you may need `sudo` for some pip installs

---

## Next Steps

Now that everything is running:

### 1. Explore the Documentation
- Read [docs/PRD.md](docs/PRD.md) - Product requirements
- Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - System design
- Read [docs/API.md](docs/API.md) - API reference
- Read [docs/ETHICS.md](docs/ETHICS.md) - Ethical guidelines

### 2. Start Development

**Week 1-2**: Implement core backend
```bash
cd backend/src/models
# Create User.js, Activity.js, EmissionFactor.js
# Refer to docs/ARCHITECTURE.md for schema
```

**Week 3-4**: Build frontend pages
```bash
cd frontend/pages
# Create auth/login.js, auth/signup.js
# Create dashboard/index.js
```

**Week 5+**: Add ML and features
- Implement clustering in `ml-services/app/models/`
- Connect everything together

### 3. Test Your Code

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# ML tests
cd ml-services
pytest
```

---

## Development Workflow

### Making Changes

1. **Edit code** in your favorite editor
2. **Save** - servers will auto-reload (thanks to nodemon and Next.js)
3. **Refresh browser** to see changes
4. **Commit often**:
   ```bash
   git add .
   git commit -m "Add feature X"
   git push
   ```

### Git Best Practices

```bash
# Before starting work
git pull origin main

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes, then commit
git add .
git commit -m "Descriptive message about what you changed"

# Push to GitHub
git push origin feature/your-feature-name

# Create Pull Request on GitHub for code review
```

---

## Useful Commands

### Backend
```bash
npm run dev        # Start development server
npm start          # Start production server
npm test           # Run tests
npm run lint       # Check code style
npm run lint:fix   # Fix code style issues
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Check code style
npm test           # Run tests
```

### ML Service
```bash
python app/main.py           # Start service
pytest                       # Run tests
pytest --cov=app tests/      # Run tests with coverage
```

---

## File Structure (Where to Work)

```
Atmos/
├── backend/src/
│   ├── models/          👈 Create database models here
│   ├── controllers/     👈 Add API logic here
│   ├── services/        👈 Add business logic here
│   └── routes/          ✅ Already created
├── frontend/
│   ├── pages/           👈 Add new pages here
│   ├── components/      👈 Create React components here
│   └── styles/          👈 Add custom styles here
└── ml-services/app/
    ├── models/          👈 Implement ML models here
    └── services/        👈 Add ML logic here
```

---

## Getting Help

### Documentation
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Project overview
- [docs/INTERVIEW_PREP.md](docs/INTERVIEW_PREP.md) - Interview Q&A
- [CONTRIBUTING.md](CONTRIBUTING.md) - How to contribute

### Common Questions
- "How do I add a new API endpoint?" → See `backend/src/routes/`
- "How do I create a new page?" → See `frontend/pages/`
- "How do emission calculations work?" → See `docs/ARCHITECTURE.md`

### Need More Help?
- Check existing files for examples
- Read the comprehensive documentation in `docs/`
- Open a GitHub issue if you're stuck

---

## Success Checklist

After setup, you should be able to:
- [x] Access frontend at http://localhost:3000
- [x] See beautiful landing page with Atmos branding
- [x] Access backend API at http://localhost:4000
- [x] Get health check responses from all services
- [x] Navigate the project documentation

---

## What's Next?

### Immediate Tasks (This Week)
1. Read all documentation in `docs/` folder
2. Understand the architecture
3. Set up your development environment
4. Try making a small change (e.g., update landing page text)
5. Commit your first change to Git

### This Month
1. Implement user authentication
2. Build activity tracking
3. Create emission calculation engine
4. Build dashboard UI

---

## Tips for Success

### 1. Read Documentation First
Don't jump into coding. Spend 2-3 hours reading all the docs to understand the big picture.

### 2. Work in Modules
Focus on one feature at a time. Don't try to build everything at once.

### 3. Test As You Go
Write tests for your code. Don't wait until the end.

### 4. Commit Often
Commit working code frequently. Don't wait for "perfect" code.

### 5. Follow the Ethics
Always refer to `docs/ETHICS.md` before adding features. Stay honest about capabilities.

---

## Final Notes

**You have everything you need to build an impressive, interview-ready project.**

The hardest part (architecture, documentation, setup) is done. Now it's about implementing features one by one.

Remember:
- **Be honest** about limitations
- **Test** your code
- **Document** as you build
- **Practice explaining** your decisions

**Good luck! 🚀**

---

**Questions?** Open an issue on GitHub or refer to the documentation.
