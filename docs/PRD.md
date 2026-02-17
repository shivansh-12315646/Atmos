# Product Requirements Document (PRD)
# Atmos - Carbon Footprint Tracker & Behavior Optimization Platform

**Version:** 1.0  
**Last Updated:** February 2026  
**Status:** Active Development

---

## 1. Executive Summary

### 1.1 Project Vision
Atmos is a behavior-first carbon footprint tracking platform that helps individuals and organizations identify high-impact habits and provides explainable, personalized recommendations for meaningful climate action.

### 1.2 Core Philosophy (Non-Negotiable)

**What This System DOES:**
- ✅ Track user-reported activities in real time
- ✅ Calculate emissions using standardized emission factors (IPCC/GHG Protocol)
- ✅ Use ML to identify behavior patterns & leverage points
- ✅ Focus on improvement over baseline, not perfection

**What This System Does NOT Do:**
- ❌ Predict climate change or future emissions
- ❌ Claim exact carbon accuracy (estimates only)
- ❌ Perform surveillance or passive tracking
- ❌ Judge or shame users for their choices

### 1.3 Problem Statement
Most existing carbon footprint platforms focus on carbon totals, not behavior change. They provide generic advice that is not personalized and do not explain which habits actually matter most, causing carbon fatigue and low long-term engagement.

**The real problem is not lack of data — it is lack of actionable, personalized, and explainable guidance.**

### 1.4 How This Differs from Existing Tools
- **Traditional Tools:** "How much carbon did you emit?"
- **Atmos:** "Where does your effort matter most, right now?"

**Key Differentiators:**
- Behavior-first design
- MCQ-based habit tracking (low friction)
- Impact ranking (high impact vs low impact habits)
- ML-based clustering ("people like you" insights)
- Explainable recommendations
- Explicit ethical & data-use boundaries

---

## 2. Target Users

### 2.1 User Types (Phased Approach)

**Phase 1: Individual Users**
- Climate-conscious individuals
- People wanting to reduce their carbon footprint
- Those seeking personalized guidance

**Phase 2: Organizations**
- Schools and universities
- Corporate offices
- Small to medium enterprises
- ESG-focused companies

**Phase 3: Regional Dashboards**
- City/state/country administrators
- Policy makers (aggregated public data only)

---

## 3. Functional Requirements

### 3.1 User Onboarding

**Requirements:**
- Authentication system (login/signup)
- User type selection (Individual/Organization)
- Region selection for localized emission factors
- Clear scope & ethics disclaimer display
- Privacy policy acceptance

**Success Criteria:**
- Users understand system capabilities and limitations
- Informed consent for data usage
- Region-specific emission factors loaded

### 3.2 MCQ-Based Habit Tracking (CRITICAL)

**Design Principle:** Use MCQs only, no heavy typing

**Categories:**
1. **Transport**
   - Car usage (frequency, fuel type, distance)
   - Public transit usage
   - Air travel
   - Two-wheeler usage
   
2. **Energy**
   - Electricity consumption
   - Heating/cooling habits
   - Appliance usage
   - Renewable energy usage

3. **Food**
   - Dietary preferences (meat, vegetarian, vegan)
   - Food waste habits
   - Local vs imported food
   - Meal frequency

4. **Consumption**
   - Shopping habits
   - Electronics purchases
   - Clothing purchases
   - Single-use plastics

5. **Housing** (Optional)
   - Home size
   - Insulation quality
   - Energy efficiency upgrades

**Implementation:**
- Each option maps to predefined emission factors
- Minimal user friction (quick surveys)
- Real-time emission calculation after input
- Historical tracking enabled

### 3.3 Carbon Calculation Engine

**Methodology:**
- Based on IPCC / GHG Protocol emission factors
- Region-specific electricity intensity
- Transparent calculation formula:
  ```
  CO₂ = activity_quantity × emission_factor
  ```

**Data Sources:**
- IPCC emission factor database
- National energy grid carbon intensity
- GHG Protocol guidelines
- Public transportation emission factors

**Output Requirements:**
- Always labeled as "estimates"
- Breakdown by category
- Comparison with baselines
- Trend analysis over time

### 3.4 Dashboards

**Individual Dashboard:**
- Monthly emissions summary
- Category contribution (pie/bar charts)
- Trend over time (line charts)
- Reduction vs personal baseline
- Top impact habits

**Organization Dashboard (Enterprise ESG Style):**
- Department-wise emissions
- Employee participation metrics
- Aggregate trends
- Comparison with similar-sized organizations
- ESG reporting metrics

**Design Principles:**
- No gamification
- Calm, professional UI
- Data-driven insights
- Accessible and clear

### 3.5 Map-Based Visualization

**Technology:** Mapbox / Leaflet

**Features:**
- Regional average emissions display
- Public benchmark overlays
- Comparison with user/org data
- Choropleth maps for regional data

**Limitations:**
- ❌ No street-level tracking
- ❌ No sensor-based claims
- ✅ Only aggregated regional data

### 3.6 ML/AI Module

**Use Cases (ONLY WHERE IT FITS):**

1. **User Behavior Clustering**
   - K-Means clustering
   - Group users by behavior patterns
   - "People like you" insights

2. **Dominant Emission Driver Identification**
   - Identify highest-impact categories
   - Personalized leverage points
   - Pattern recognition

3. **Habit Replacement Recommendations**
   - Rule + ML hybrid scoring
   - Rank alternatives by:
     - Impact (emission reduction)
     - Effort (user friction)
     - Feasibility (contextual viability)

**Prohibited:**
- ❌ Climate prediction
- ❌ "AI knows the future" claims
- ❌ Black-box recommendations

**Explainability Requirement:**
- Every ML insight must be explainable
- Show reasoning behind clusters
- Transparent scoring methodology

### 3.7 Habit Replacement & Recommendations

**For each high-impact habit:**
1. **Explain Why It Matters**
   - Emission impact quantified
   - Context provided (regional/global)
   
2. **Suggest Realistic Alternatives**
   - Multiple options presented
   - Pros/cons for each
   
3. **Ranking System**
   - Impact score (emission reduction potential)
   - Effort score (ease of implementation)
   - Feasibility score (contextual suitability)

**Tone Requirements:**
- Non-judgmental language
- Empowering, not guilt-inducing
- Focus on progress, not perfection
- Celebrate small wins

### 3.8 Ethical Comparisons

**Allowed Comparisons:**
- ✅ User vs own past performance
- ✅ User vs regional average
- ✅ Organization vs similar-size organizations

**Prohibited Comparisons:**
- ❌ Public individual-to-individual comparisons
- ❌ Leaderboards or rankings
- ❌ Shaming or moral scoring

---

## 4. Non-Functional Requirements

### 4.1 Explainability
- Every insight must be traceable to source
- Calculation methodology transparent
- ML decisions interpretable

### 4.2 User Consent & Transparency
- Clear data usage policies
- Opt-in for features
- Export/delete user data capabilities

### 4.3 Scalability
- Architecture supports growth to millions of users
- Efficient database queries
- Caching for repeated calculations

### 4.4 API Design
- Clean REST API separation
- Versioned endpoints
- Comprehensive documentation

### 4.5 Accessibility
- WCAG 2.1 Level AA compliance
- Screen reader support
- Keyboard navigation
- Color-blind friendly palettes

### 4.6 Performance
- Dashboard load time < 2 seconds
- Real-time calculation < 500ms
- Map rendering < 3 seconds

---

## 5. Data & "Real-Time" Definition

**Real-time means:**
- ✅ Instant logging of user and organization activities
- ✅ Immediate emission calculation after input

**Near-real-time means:**
- Regional/national benchmarks updated periodically (monthly/quarterly)
- Based on public datasets

**Explicit Disclaimer to Users:**
> "User activities are tracked in real time. Regional and global benchmarks are sourced from periodically updated public datasets (IPCC, national energy databases) and used as reference baselines."

---

## 6. Technical Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React / Next.js |
| **Backend** | Node.js + Express |
| **Database** | PostgreSQL |
| **ML Services** | Python (scikit-learn) |
| **Maps** | Mapbox / Leaflet |
| **Charts** | Recharts / Chart.js |
| **Deployment** | Vercel (Frontend) + Render (Backend) |
| **Testing** | Jest, Pytest, Cypress |

---

## 7. Development Roadmap

### Phase 1: Foundation (Weeks 1-2)
- [ ] Scope & ethics definition
- [ ] Competitive analysis
- [ ] UI/UX wireframes
- [ ] Database schema design

### Phase 2: Backend Core (Weeks 3-4)
- [ ] Authentication system
- [ ] Emission calculation engine
- [ ] Core API endpoints
- [ ] Database setup

### Phase 3: Frontend Core (Weeks 5-6)
- [ ] Authentication UI
- [ ] Onboarding flow
- [ ] Dashboard layouts
- [ ] MCQ tracking interface

### Phase 4: Features (Weeks 7-8)
- [ ] Map integration
- [ ] Benchmark layer
- [ ] Chart visualizations
- [ ] Category breakdowns

### Phase 5: ML Integration (Weeks 9-10)
- [ ] Clustering implementation
- [ ] Recommendation engine
- [ ] Explainability layer
- [ ] "People like you" insights

### Phase 6: Polish & Deploy (Weeks 11-12)
- [ ] Testing & QA
- [ ] Performance optimization
- [ ] Deployment setup
- [ ] Demo data generation
- [ ] Documentation finalization

---

## 8. Success Metrics

### 8.1 User Engagement
- Daily active users (DAU)
- Habit tracking completion rate
- Return user rate (7-day, 30-day)

### 8.2 Impact Metrics
- Average emission reduction per user
- Number of habit changes implemented
- User satisfaction scores

### 8.3 Technical Metrics
- System uptime (target: 99.5%)
- API response time (target: < 500ms)
- Error rate (target: < 0.1%)

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Data accuracy concerns | High | Clear "estimates only" labeling, transparent methodology |
| User privacy issues | High | Explicit consent, data export/delete features |
| Low user engagement | Medium | Low-friction MCQs, meaningful insights |
| ML bias | Medium | Diverse training data, explainable models |
| Scalability issues | Medium | Cloud infrastructure, efficient queries |

---

## 10. Interview-Safe Positioning

**Elevator Pitch:**
> "Most carbon trackers measure emissions. Our system focuses on real-time behavior awareness and explainable prioritization, helping users understand where their actions have the highest impact."

**Key Points to Emphasize:**
- Behavior-first approach
- Explainable ML
- Ethical data practices
- Enterprise ESG readiness
- Scalable architecture

---

## 11. Absolute Don'ts

**Reject These Features:**
- ❌ "Real-time global carbon sensing"
- ❌ "AI predicts climate change"
- ❌ "Exact carbon accuracy" claims
- ❌ Surveillance or passive tracking
- ❌ User shaming or judgment

**Self-Check Before Any Feature:**
1. Can two students build this?
2. Is the data source real and public?
3. Are we honest about limitations?
4. Can we defend this in an interview?

If any answer is NO → redesign.

---

## 12. Future Enhancements (Post-MVP)

- Mobile applications (iOS/Android)
- Integration with smart home devices (opt-in)
- Corporate API for ESG reporting
- Offset marketplace integration
- Community challenges (opt-in)
- Advanced ML models for better clustering

---

## Appendix A: Emission Factor Examples

**Transport:**
- Petrol car: 2.31 kg CO₂/liter
- Diesel car: 2.68 kg CO₂/liter
- Bus: 0.089 kg CO₂/km
- Train: 0.041 kg CO₂/km

**Energy:**
- Electricity (varies by region): 0.2 - 0.9 kg CO₂/kWh
- Natural gas: 2.04 kg CO₂/m³

**Food:**
- Beef: 27 kg CO₂/kg
- Chicken: 6.9 kg CO₂/kg
- Vegetables: 2 kg CO₂/kg

*Note: These are approximate values. Actual implementation will use comprehensive IPCC databases.*

---

**Document Status:** Living document, updated as requirements evolve.
