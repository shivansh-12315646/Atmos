# Atmos 🌍
**Behavior-first carbon footprint tracking platform with ML-driven habit prioritization**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

---

## 📌 Overview

**Atmos** is a real-time carbon footprint tracking platform that focuses on **behavior change** rather than just measuring emissions. Unlike traditional carbon calculators, Atmos helps users identify which habits have the highest climate impact and provides explainable, personalized recommendations for meaningful action.

### 🎯 Core Philosophy

- ✅ **Behavior-first design** — Focus on actionable habits, not guilt
- ✅ **Explainable insights** — Every recommendation is backed by data
- ✅ **User-reported data** — Low-friction MCQ-based tracking
- ✅ **ML-driven prioritization** — Identify high-impact leverage points
- ✅ **Ethical boundaries** — No surveillance, no shaming, no overclaiming

---

## 🚀 Key Features

### For Individual Users
- 📊 **Real-time activity logging** via MCQ-based habit tracking
- 🔍 **Impact ranking** — See which habits matter most
- 📈 **Personal dashboards** — Track emissions by category & trend over time
- 🤖 **ML-powered clustering** — "People like you" insights
- 💡 **Habit replacement suggestions** — Ranked by impact, effort, and feasibility

### For Organizations
- 🏢 **Enterprise ESG dashboards** — Track team/department carbon footprints
- 📉 **Reduction tracking** — Monitor progress vs baseline
- 🗺️ **Regional benchmarking** — Compare against similar organizations

### Technical Highlights
- ⚡ **Instant emission calculation** using IPCC/GHG Protocol standards
- 🗺️ **Map-based visualization** with regional averages
- 🧠 **Explainable AI** — Every insight is interpretable
- 🔒 **Privacy-first** — User consent & transparent data use

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React / Next.js |
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL |
| **ML Services** | Python (scikit-learn) |
| **Maps** | Mapbox / Leaflet |
| **Charts** | Recharts / Chart.js |
| **Deployment** | Vercel + Render |

---

## 📂 Project Structure

```
atmos/
├── frontend/          # React/Next.js application
├── backend/           # Node.js API server
├── ml-services/       # Python ML recommendation engine
├── docs/              # Documentation
│   ├── PRD.md         # Product Requirements Document
│   ├── ARCHITECTURE.md # System architecture
│   ├── API.md         # API documentation
│   └── ETHICS.md      # Ethical guidelines & limitations
├── README.md
└── .gitignore
```

---

## 🎓 Installation & Setup

### Prerequisites
- Node.js >= 18.x
- Python >= 3.9
- PostgreSQL >= 14

### Quick Start

```bash
# Clone the repository
git clone https://github.com/shivansh-12315646/Atmos.git
cd Atmos

# Setup backend
cd backend
npm install
cp .env.example .env
npm run dev

# Setup frontend (in new terminal)
cd frontend
npm install
npm run dev

# Setup ML services (in new terminal)
cd ml-services
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

---

## 📖 Documentation

- **[Product Requirements](./docs/PRD.md)** — Detailed feature specifications
- **[Architecture](./docs/ARCHITECTURE.md)** — System design & data flow
- **[API Reference](./docs/API.md)** — Endpoint documentation
- **[Ethics & Limitations](./docs/ETHICS.md)** — What this system does NOT do

---

## 🎯 What Makes Atmos Different?

### ❌ Traditional Carbon Trackers
- Focus on **total emissions**
- Generic, one-size-fits-all advice
- No explanation of **why** certain habits matter
- Lead to carbon fatigue

### ✅ Atmos
- Focus on **behavior patterns**
- Personalized, explainable recommendations
- ML-driven **impact ranking**
- Designed for **sustained engagement**

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 👥 Team

Built by two college students passionate about climate tech:
- **Shivansh** ([@shivansh-12315646](https://github.com/shivansh-12315646))
- **[Your Friend's Name]** — *Add collaborator after invitation*

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## ⚠️ Important Disclaimers

### What This System Does
✅ Tracks user-reported activities in real time  
✅ Calculates emissions using standardized factors  
✅ Uses ML to identify behavior patterns  
✅ Provides explainable, personalized recommendations  

### What This System Does NOT Do
❌ Predict climate change or future emissions  
❌ Claim exact carbon accuracy (estimates only)  
❌ Perform surveillance or passive tracking  
❌ Judge or shame users for their choices  

**Data Sources:** Regional benchmarks are sourced from periodically updated public datasets (IPCC, national energy databases) and used as reference baselines.

---

## 🌟 Roadmap

- [ ] Phase 1: Core tracking + emission engine
- [ ] Phase 2: ML recommendation system
- [ ] Phase 3: Map visualization + regional benchmarks
- [ ] Phase 4: Organization dashboards
- [ ] Phase 5: Mobile app

---

## 📞 Contact

For questions or feedback, open an issue or reach out via GitHub Discussions.

---

**Built with 💚 for a sustainable future**
