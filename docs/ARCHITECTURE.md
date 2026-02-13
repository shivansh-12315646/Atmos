# System Architecture
# Atmos - Carbon Footprint Tracker & Behavior Optimization Platform

**Version:** 1.0  
**Last Updated:** February 2026

---

## 1. Architecture Overview

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Web App    │  │  Mobile App  │  │   Admin      │      │
│  │  (Next.js)   │  │   (Future)   │  │  Dashboard   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                        API GATEWAY                           │
│                    (Express.js / REST)                       │
└─────────────────────────────────────────────────────────────┘
                             │
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
┌──────────────────┐ ┌──────────────┐ ┌──────────────────┐
│  Auth Service    │ │ Core Backend │ │  ML Service      │
│  (Node.js)       │ │  (Node.js)   │ │  (Python/Flask)  │
│                  │ │              │ │                  │
│  - JWT Auth      │ │ - Emissions  │ │ - Clustering     │
│  - User Mgmt     │ │ - Activities │ │ - Recommendations│
│  - Sessions      │ │ - Analytics  │ │ - Pattern Match  │
└──────────────────┘ └──────────────┘ └──────────────────┘
            │                │                │
            └────────────────┼────────────────┘
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATA LAYER                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  PostgreSQL  │  │   Redis      │  │  File Store  │      │
│  │  (Primary DB)│  │   (Cache)    │  │  (S3/Local)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXTERNAL SERVICES                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Mapbox     │  │  Email/SMS   │  │  Analytics   │      │
│  │   (Maps)     │  │ (Notifications)│ │  (Optional)  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Design Principles

1. **Separation of Concerns**
   - Frontend: Presentation layer only
   - Backend: Business logic and data management
   - ML Services: Isolated machine learning operations

2. **Scalability**
   - Stateless services for horizontal scaling
   - Caching layer for performance
   - Database indexing for query optimization

3. **Security**
   - JWT-based authentication
   - HTTPS-only communication
   - Input validation and sanitization
   - Rate limiting on APIs

4. **Transparency**
   - All calculations are traceable
   - Emission factors stored in database
   - Audit logs for data changes

---

## 2. Component Architecture

### 2.1 Frontend Architecture (Next.js)

```
frontend/
├── pages/                  # Next.js pages
│   ├── index.js           # Landing page
│   ├── auth/              # Login/Signup
│   ├── onboarding/        # User onboarding flow
│   ├── dashboard/         # Main dashboard
│   ├── tracking/          # Activity tracking (MCQs)
│   ├── insights/          # Recommendations & insights
│   └── settings/          # User settings
├── components/            # Reusable components
│   ├── charts/           # Chart components
│   ├── maps/             # Map visualizations
│   ├── forms/            # Form components
│   └── common/           # Buttons, cards, etc.
├── hooks/                # Custom React hooks
├── services/             # API service layer
├── utils/                # Utility functions
├── styles/               # Global styles
└── public/               # Static assets
```

**Key Technologies:**
- **Framework:** Next.js 14+ (App Router)
- **State Management:** React Context API / Zustand
- **Styling:** Tailwind CSS / CSS Modules
- **Charts:** Recharts
- **Maps:** React-Leaflet
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios

**Design Patterns:**
- Atomic Design for components
- Container/Presenter pattern
- Custom hooks for business logic
- Service layer for API calls

### 2.2 Backend Architecture (Node.js + Express)

```
backend/
├── src/
│   ├── config/            # Configuration files
│   │   ├── database.js
│   │   ├── auth.js
│   │   └── emission-factors.js
│   ├── models/            # Database models (Sequelize/TypeORM)
│   │   ├── User.js
│   │   ├── Activity.js
│   │   ├── Emission.js
│   │   └── Organization.js
│   ├── controllers/       # Route controllers
│   │   ├── authController.js
│   │   ├── activityController.js
│   │   ├── emissionController.js
│   │   └── analyticsController.js
│   ├── services/          # Business logic
│   │   ├── authService.js
│   │   ├── emissionService.js
│   │   ├── analyticsService.js
│   │   └── recommendationService.js
│   ├── middleware/        # Express middleware
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── routes/            # API routes
│   │   ├── auth.js
│   │   ├── activities.js
│   │   ├── emissions.js
│   │   └── analytics.js
│   ├── utils/             # Utility functions
│   │   ├── calculations.js
│   │   ├── validators.js
│   │   └── logger.js
│   └── app.js             # Express app setup
├── tests/                 # Test files
├── package.json
└── .env.example
```

**Key Technologies:**
- **Framework:** Express.js 4.x
- **Database ORM:** Sequelize / Prisma
- **Validation:** Joi / Zod
- **Authentication:** JWT + bcrypt
- **Logging:** Winston
- **Testing:** Jest + Supertest

**Design Patterns:**
- MVC architecture
- Service layer pattern
- Repository pattern for data access
- Dependency injection

### 2.3 ML Services Architecture (Python)

```
ml-services/
├── app/
│   ├── models/            # ML models
│   │   ├── clustering.py
│   │   ├── recommendation.py
│   │   └── pattern_detection.py
│   ├── services/          # ML service logic
│   │   ├── cluster_service.py
│   │   ├── recommendation_service.py
│   │   └── explainer_service.py
│   ├── utils/             # Utility functions
│   │   ├── preprocessing.py
│   │   └── feature_engineering.py
│   ├── api/               # Flask API endpoints
│   │   └── routes.py
│   └── main.py            # Flask app entry point
├── data/                  # Training data & models
├── tests/                 # Test files
├── requirements.txt
└── .env.example
```

**Key Technologies:**
- **Framework:** Flask / FastAPI
- **ML Library:** scikit-learn
- **Data Processing:** pandas, numpy
- **Model Persistence:** joblib / pickle
- **API Documentation:** Swagger/OpenAPI

**ML Pipeline:**
1. **Data Collection:** From PostgreSQL
2. **Feature Engineering:** User behavior vectors
3. **Clustering:** K-Means for user segmentation
4. **Recommendation:** Rule-based + ML hybrid
5. **Explainability:** Feature importance analysis

---

## 3. Database Schema

### 3.1 Core Tables

**users**
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    user_type VARCHAR(50) NOT NULL, -- 'individual', 'organization'
    region VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**organizations**
```sql
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    size VARCHAR(50), -- 'small', 'medium', 'large'
    industry VARCHAR(100),
    user_id UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**activities**
```sql
CREATE TABLE activities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    category VARCHAR(50) NOT NULL, -- 'transport', 'energy', 'food', 'consumption'
    activity_type VARCHAR(100) NOT NULL,
    quantity DECIMAL(10, 2),
    unit VARCHAR(50),
    emission_kg_co2 DECIMAL(10, 3),
    logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**emission_factors**
```sql
CREATE TABLE emission_factors (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category VARCHAR(50) NOT NULL,
    activity_name VARCHAR(100) NOT NULL,
    emission_per_unit DECIMAL(10, 5) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    region VARCHAR(100),
    source VARCHAR(255), -- 'IPCC', 'GHG_PROTOCOL', etc.
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**user_insights**
```sql
CREATE TABLE user_insights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    cluster_id INTEGER,
    top_emission_category VARCHAR(50),
    monthly_total_kg_co2 DECIMAL(10, 2),
    baseline_kg_co2 DECIMAL(10, 2),
    calculated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**recommendations**
```sql
CREATE TABLE recommendations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    activity_to_replace VARCHAR(255),
    suggested_alternative VARCHAR(255),
    impact_score DECIMAL(5, 2),
    effort_score DECIMAL(5, 2),
    feasibility_score DECIMAL(5, 2),
    explanation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 3.2 Indexes

```sql
CREATE INDEX idx_activities_user_id ON activities(user_id);
CREATE INDEX idx_activities_logged_at ON activities(logged_at);
CREATE INDEX idx_activities_category ON activities(category);
CREATE INDEX idx_emission_factors_category ON emission_factors(category);
CREATE INDEX idx_user_insights_user_id ON user_insights(user_id);
```

---

## 4. API Architecture

### 4.1 RESTful Endpoints

**Base URL:** `https://api.atmos.app/v1`

**Authentication Endpoints:**
```
POST   /auth/signup          # User registration
POST   /auth/login           # User login
POST   /auth/logout          # User logout
POST   /auth/refresh         # Refresh JWT token
GET    /auth/me              # Get current user
```

**Activity Tracking Endpoints:**
```
POST   /activities           # Log new activity
GET    /activities           # Get user activities (paginated)
GET    /activities/:id       # Get specific activity
PUT    /activities/:id       # Update activity
DELETE /activities/:id       # Delete activity
```

**Emission Calculation Endpoints:**
```
POST   /emissions/calculate  # Calculate emissions for activity
GET    /emissions/summary    # Get monthly/yearly summary
GET    /emissions/trends     # Get trend data
GET    /emissions/breakdown  # Category-wise breakdown
```

**Analytics Endpoints:**
```
GET    /analytics/dashboard  # Dashboard data
GET    /analytics/insights   # User insights
GET    /analytics/comparison # Comparison data
GET    /analytics/regional   # Regional averages
```

**Recommendation Endpoints:**
```
GET    /recommendations      # Get personalized recommendations
POST   /recommendations/:id/feedback  # User feedback on recommendation
```

**Map Data Endpoints:**
```
GET    /map/regional-data    # Regional emission data
GET    /map/benchmarks       # Benchmark overlays
```

### 4.2 ML Service Endpoints

**Base URL:** `http://ml-service:5000/api/v1`

```
POST   /cluster/assign       # Assign user to cluster
POST   /recommend            # Generate recommendations
POST   /analyze/patterns     # Analyze behavior patterns
GET    /explain/:model       # Get model explanation
```

### 4.3 Request/Response Format

**Standard Success Response:**
```json
{
  "success": true,
  "data": { /* payload */ },
  "message": "Operation successful"
}
```

**Standard Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": { /* optional details */ }
  }
}
```

---

## 5. Data Flow

### 5.1 Activity Logging Flow

```
User Input (MCQ) → Frontend Validation → API Request
    ↓
Backend Validation → Emission Calculation → Database Insert
    ↓
Response to Frontend → Update Dashboard → Cache Update
```

### 5.2 Recommendation Generation Flow

```
User Activities (Historical) → Backend Aggregation → ML Service Request
    ↓
Feature Engineering → Clustering → Recommendation Engine
    ↓
Rule-Based Scoring → Explainability Layer → API Response
    ↓
Frontend Display → User Feedback → Model Improvement
```

### 5.3 Dashboard Data Flow

```
User Request → Check Cache → Cache Hit? Return Cached Data
                          ↓ No
                    Query Database → Aggregate Data → Calculate Metrics
                          ↓
                    Cache Result → Return to Frontend → Render Charts
```

---

## 6. Security Architecture

### 6.1 Authentication Flow

```
User Login → Validate Credentials → Generate JWT Token
    ↓
Store Token (HTTPOnly Cookie + LocalStorage)
    ↓
Subsequent Requests → Include Token in Header → Verify Token
    ↓
Valid? → Process Request : Return 401 Unauthorized
```

### 6.2 Security Measures

1. **Authentication & Authorization**
   - JWT with short expiry (15 minutes)
   - Refresh tokens (7 days)
   - Role-based access control (RBAC)

2. **Data Protection**
   - HTTPS/TLS encryption
   - Password hashing (bcrypt, 10 rounds)
   - SQL injection prevention (parameterized queries)
   - XSS protection (input sanitization)

3. **API Security**
   - Rate limiting (100 requests/15 minutes)
   - CORS configuration
   - API key validation for ML services
   - Request validation (Joi/Zod schemas)

4. **Privacy**
   - Data anonymization for analytics
   - User consent tracking
   - GDPR compliance (data export/delete)

---

## 7. Scalability Strategy

### 7.1 Horizontal Scaling

- **Stateless Services:** All services designed to be stateless
- **Load Balancing:** NGINX/AWS ELB for traffic distribution
- **Auto-scaling:** Based on CPU/memory metrics

### 7.2 Database Scaling

- **Read Replicas:** For analytics and reporting
- **Connection Pooling:** Limit concurrent connections
- **Query Optimization:** Indexes on frequently queried columns
- **Partitioning:** Time-based partitioning for activities table

### 7.3 Caching Strategy

- **Redis Cache:** For frequently accessed data
- **CDN:** Static assets and frontend
- **Cache Invalidation:** Event-based invalidation
- **Cache Layers:**
  - Browser cache (static assets)
  - CDN cache (HTML, CSS, JS)
  - Application cache (API responses)
  - Database cache (query results)

---

## 8. Deployment Architecture

### 8.1 Development Environment

```
Local Development:
- Frontend: localhost:3000 (Next.js dev server)
- Backend: localhost:4000 (Express)
- ML Service: localhost:5000 (Flask)
- PostgreSQL: localhost:5432
- Redis: localhost:6379
```

### 8.2 Production Environment

```
Frontend (Vercel):
- Static site generation (SSG) where possible
- Server-side rendering (SSR) for dynamic content
- Edge caching via Vercel CDN

Backend (Render/AWS):
- Docker containerization
- Auto-scaling based on load
- Health checks and monitoring

Database (Managed PostgreSQL):
- AWS RDS / DigitalOcean Managed Database
- Automated backups
- Point-in-time recovery

ML Service (Render/AWS):
- Docker containerization
- GPU support for future models
- Model versioning
```

### 8.3 CI/CD Pipeline

```
Git Push → GitHub Actions
    ↓
Run Tests (Unit + Integration)
    ↓
Build Docker Images
    ↓
Push to Container Registry
    ↓
Deploy to Staging → Manual Approval → Deploy to Production
```

---

## 9. Monitoring & Observability

### 9.1 Logging

- **Application Logs:** Winston (Node.js), Python logging
- **Access Logs:** NGINX/Express access logs
- **Error Tracking:** Sentry / Rollbar

### 9.2 Metrics

- **Application Metrics:** Response times, error rates
- **System Metrics:** CPU, memory, disk usage
- **Business Metrics:** User signups, activities logged

### 9.3 Monitoring Tools

- **Infrastructure:** CloudWatch / Prometheus
- **APM:** New Relic / DataDog (optional)
- **Uptime:** UptimeRobot / Pingdom

---

## 10. Data Backup & Recovery

### 10.1 Backup Strategy

- **Database Backups:** Daily automated backups
- **Retention:** 30 days of backups
- **Testing:** Monthly restore tests

### 10.2 Disaster Recovery

- **RTO (Recovery Time Objective):** 4 hours
- **RPO (Recovery Point Objective):** 24 hours
- **Failover:** Automated failover for database

---

## 11. Technology Choices - Rationale

### Why Node.js for Backend?
- JavaScript ecosystem consistency
- Strong async I/O for API handling
- Large package ecosystem (npm)
- Easy for students to learn

### Why PostgreSQL?
- ACID compliance for data integrity
- JSON support for flexible schemas
- Strong geospatial support (PostGIS)
- Open-source and well-documented

### Why Next.js for Frontend?
- React-based (familiar for students)
- Built-in SSR/SSG for performance
- File-based routing (simple)
- Strong TypeScript support
- Excellent developer experience

### Why Python for ML?
- Industry standard for ML
- Scikit-learn for clustering
- Easy integration with pandas
- Extensive ML library ecosystem

---

## 12. Future Architecture Enhancements

### Phase 2+ Improvements
- GraphQL API for flexible queries
- Real-time updates via WebSockets
- Microservices architecture
- Event-driven architecture (Kafka/RabbitMQ)
- Advanced ML models (deep learning)
- Mobile app architecture (React Native)

---

**Document Status:** Living document, updated with system evolution.
