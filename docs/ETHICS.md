# Ethics & Limitations
# Atmos - Carbon Footprint Tracker & Behavior Optimization Platform

**Version:** 1.0  
**Last Updated:** February 2026

---

## 1. Core Ethical Principles

### 1.1 Honesty First
We are transparent about what our system can and cannot do. We do not make exaggerated claims about accuracy, predictive power, or impact.

### 1.2 User Empowerment, Not Shame
Our goal is to empower users with actionable insights, not to induce guilt or anxiety about their carbon footprint.

### 1.3 Privacy by Design
User data is protected, anonymized for analytics, and never shared without explicit consent.

### 1.4 Accessibility & Inclusivity
Climate action should be accessible to all, regardless of technical expertise, income level, or geographic location.

---

## 2. What This System DOES

### ✅ Real-Time Activity Tracking
- **What it means:** When you log an activity (e.g., "drove 50km in a petrol car"), the system immediately records it.
- **How it works:** User-reported data via multiple-choice questions (MCQs).
- **Limitation:** Accuracy depends on honest user input; we do not verify activities.

### ✅ Emission Calculation Using Standardized Factors
- **What it means:** We apply industry-standard emission factors (from IPCC, GHG Protocol) to your reported activities.
- **How it works:** 
  ```
  Emission (kg CO₂) = Activity Quantity × Emission Factor
  ```
  Example: 50 km driven in petrol car × 0.231 kg CO₂/km = 11.55 kg CO₂
- **Limitation:** These are **estimates**, not exact measurements. Actual emissions vary by vehicle efficiency, driving style, fuel quality, etc.

### ✅ Machine Learning for Behavior Patterns
- **What it means:** We use clustering algorithms (e.g., K-Means) to group users with similar behavior patterns.
- **How it works:** Features like category distribution, frequency, and volume are used to create clusters.
- **Use case:** "People like you" insights to provide context.
- **Limitation:** Clusters are descriptive, not prescriptive. They don't predict future behavior.

### ✅ Identifying High-Impact Habits
- **What it means:** We analyze your activity history to identify which categories/habits contribute most to your emissions.
- **How it works:** Statistical analysis of logged activities.
- **Use case:** Prioritize where behavior change would have the biggest impact.
- **Limitation:** Impact is personal and context-dependent; what works for one person may not work for another.

### ✅ Focus on Improvement Over Baseline
- **What it means:** We compare your current emissions to your own past performance, not to an absolute "good" or "bad" standard.
- **How it works:** Your first month of data becomes your baseline; subsequent months are compared to it.
- **Limitation:** Seasonal variations (e.g., heating in winter) may affect comparisons.

---

## 3. What This System Does NOT Do

### ❌ Predict Climate Change
**Why not:** Climate prediction requires complex Earth system models, decades of atmospheric data, and supercomputers. Our system tracks individual behavior, not planetary systems.

**What we say instead:** "We help you understand your personal emissions, not predict climate outcomes."

### ❌ Claim Exact Carbon Accuracy
**Why not:** Emission factors are averages; individual circumstances vary widely.

**What we say instead:** "All calculations are estimates based on standardized emission factors. Actual emissions may differ based on specific conditions."

**Example:** Two people drive 50km in petrol cars, but one drives aggressively (higher emissions) and one drives efficiently (lower emissions). Our system uses an average factor.

### ❌ Perform Surveillance or Passive Tracking
**Why not:** We respect user privacy and autonomy. We do not:
- Track your location
- Monitor your devices
- Access your purchase history without permission
- Use sensors or IoT devices to automatically log activities

**What we say instead:** "All activity logging is **user-initiated and voluntary**. You control what you share."

### ❌ Judge or Shame Users
**Why not:** Guilt-based approaches lead to disengagement and mental health issues.

**What we say instead:** "We focus on progress, not perfection. Small steps matter."

**Our tone:** 
- ✅ "Great progress! You reduced transport emissions by 12% this month."
- ❌ "You emitted 200kg more than others. Do better."

### ❌ Make Absolute Moral Claims
**Why not:** Carbon footprints are influenced by systemic factors (infrastructure, income, geography) beyond individual control.

**What we say instead:** "Your emissions are 15% below the regional average" (factual comparison, not moral judgment).

---

## 4. Data Sources & Transparency

### 4.1 Emission Factors
**Sources:**
- IPCC Emission Factor Database
- GHG Protocol Corporate Standard
- National energy grid carbon intensity reports (e.g., EPA, EIA)
- Peer-reviewed research on food/consumption emissions

**Update Frequency:** Quarterly (or when major updates are released)

**Transparency:** 
- Every emission calculation shows the source of the emission factor
- Users can view the methodology behind each calculation

### 4.2 Regional Benchmarks
**Sources:**
- National statistical agencies (e.g., US Census, Eurostat)
- Government energy departments
- Public climate databases

**Update Frequency:** Monthly or quarterly (depending on data availability)

**Limitation:** Regional data is aggregated and may not reflect hyper-local variations.

### 4.3 "Real-Time" Clarification
**User activities:** Logged in real time (instant)

**Emission calculations:** Computed in real time (< 500ms)

**Regional benchmarks:** Updated periodically (monthly/quarterly), not in real time

**Explicit statement to users:**
> "Your activities are tracked in real time. Regional and global benchmarks are sourced from periodically updated public datasets (IPCC, national energy databases) and used as reference baselines."

---

## 5. Machine Learning: Capabilities & Limits

### 5.1 What Our ML Does
1. **User Clustering (K-Means)**
   - Groups users with similar behavior patterns
   - Provides "people like you" context
   - **Not used for:** Prediction, profiling, or discrimination

2. **Dominant Emission Driver Identification**
   - Analyzes which category contributes most to your footprint
   - Uses simple statistical analysis
   - **Not used for:** Judging or ranking users

3. **Habit Recommendation Ranking**
   - Scores alternative habits by:
     - **Impact:** Potential emission reduction
     - **Effort:** How difficult to implement
     - **Feasibility:** Context-dependent viability
   - Uses a hybrid rule-based + ML approach
   - **Not used for:** Guaranteeing outcomes

### 5.2 What Our ML Does NOT Do
❌ **Predict future emissions:** We analyze past behavior, not future trends.

❌ **Claim AI "knows the future":** All insights are based on historical data and averages.

❌ **Black-box recommendations:** Every recommendation is explainable. We show:
- Why it matters (emission impact)
- How we calculated scores
- What assumptions were made

❌ **Discriminate or profile:** Clustering is purely for contextual insights, not for categorizing users as "good" or "bad."

### 5.3 Explainability Requirement
**Every ML insight must include:**
1. **What:** The insight or recommendation
2. **Why:** The reasoning behind it (e.g., "based on your transport emissions")
3. **How:** The methodology (e.g., "K-Means clustering with 5 clusters")
4. **Source:** The data it's based on (e.g., "your last 3 months of activities")

**Example:**
> "You're in a cluster of urban commuters with moderate food emissions. Based on your transport category (60% of total emissions), switching to public transit could reduce your monthly footprint by ~40kg CO₂."

---

## 6. Privacy & Data Ethics

### 6.1 Data Collection
**What we collect:**
- Account information (email, password hash)
- User-reported activities
- Aggregated analytics (anonymized)

**What we do NOT collect:**
- Location data (GPS)
- Financial transactions
- Device identifiers
- Biometric data

### 6.2 Data Usage
**Primary use:** Emission calculation and personalized insights for the user.

**Secondary use (with consent):**
- Anonymized regional benchmarks
- Aggregated analytics for system improvement
- Research (de-identified data only)

**Not used for:**
- Selling to third parties
- Targeted advertising
- Individual surveillance

### 6.3 User Rights (GDPR/CCPA Compliant)
- ✅ **Right to access:** Export all your data
- ✅ **Right to deletion:** Permanently delete your account and data
- ✅ **Right to correction:** Update or correct logged activities
- ✅ **Right to opt-out:** Decline participation in aggregated analytics

### 6.4 Data Retention
- **Active accounts:** Data retained as long as account is active
- **Deleted accounts:** Data permanently deleted within 30 days
- **Aggregated analytics:** Anonymized data may be retained for research

---

## 7. Ethical Comparisons

### 7.1 Allowed Comparisons
✅ **User vs own past performance**
- Example: "You reduced emissions by 12% compared to last month."
- Purpose: Track personal progress

✅ **User vs regional average**
- Example: "Your emissions are 15% below the California average."
- Purpose: Contextual understanding, not judgment

✅ **Organization vs similar-size organizations**
- Example: "Your company's per-capita emissions are 20% lower than similar mid-sized tech companies."
- Purpose: ESG benchmarking

### 7.2 Prohibited Comparisons
❌ **Public individual-to-individual comparisons**
- No leaderboards
- No "top performers" lists
- No shaming of "high emitters"

❌ **Moral scoring**
- We don't label users as "good" or "bad"
- No carbon "grades" (A, B, C, D, F)

**Rationale:** Carbon footprints are influenced by systemic factors. Shaming individuals ignores structural inequities (e.g., lack of public transit, low income, regional energy mix).

---

## 8. Limitations & Disclaimers

### 8.1 Calculation Accuracy
**Disclaimer:**
> "All emission calculations are **estimates** based on standardized emission factors from IPCC and GHG Protocol. Actual emissions may vary based on vehicle efficiency, energy sources, food production methods, and other factors."

**Why it matters:** Users should understand that 245kg CO₂ is not exact to the gram.

### 8.2 Regional Data
**Disclaimer:**
> "Regional averages are based on publicly available datasets updated monthly or quarterly. They represent aggregated trends, not real-time measurements."

**Why it matters:** Users in California see emissions based on California's grid mix, but individual utilities may vary.

### 8.3 Behavioral Recommendations
**Disclaimer:**
> "Recommendations are personalized based on your activity patterns and are meant to guide, not dictate. You know your circumstances best."

**Why it matters:** A recommendation to "use public transit" may not be feasible in rural areas.

### 8.4 Not a Substitute for Professional Advice
**Disclaimer:**
> "This system is for informational and educational purposes. For enterprise ESG reporting, consult certified carbon accounting professionals."

**Why it matters:** Regulatory ESG reports require audited data, not user-reported estimates.

---

## 9. What We Will Never Build

### ❌ Real-Time Global Carbon Sensing
**Why:** Requires satellite data, IoT sensors, and infrastructure we don't have access to.

**Alternative:** We focus on user-reported activities with clear disclaimers.

### ❌ Climate Prediction Models
**Why:** Climate modeling requires Earth system models and is beyond our scope.

**Alternative:** We help users understand their personal impact, not planetary outcomes.

### ❌ Surveillance Features
**Why:** Violates user privacy and autonomy.

**Alternative:** User-initiated logging only.

### ❌ Carbon Offsetting Marketplace (Initially)
**Why:** Offset quality is highly variable; we don't want to enable greenwashing.

**Future consideration:** If added, it will be curated, transparent, and optional.

---

## 10. Bias & Fairness

### 10.1 Potential Biases
1. **Geographic Bias:** 
   - Emission factors may be more accurate for well-studied regions (e.g., US, EU) than others.
   - **Mitigation:** Clearly label data confidence and expand regional datasets over time.

2. **Socioeconomic Bias:**
   - Lower-income users may have higher emissions due to older vehicles, less energy-efficient housing.
   - **Mitigation:** Avoid moral judgments; focus on feasible, contextual recommendations.

3. **Data Availability Bias:**
   - Some activities (e.g., air travel) have well-documented emission factors; others (e.g., niche consumer goods) may not.
   - **Mitigation:** Use best-available data and clearly state limitations.

### 10.2 Fairness Principles
- **No discrimination:** ML models do not use protected characteristics (race, gender, income) for recommendations.
- **Contextual recommendations:** Feasibility scores account for regional infrastructure (e.g., don't recommend public transit in areas without it).
- **Inclusive design:** UI is accessible (WCAG 2.1 AA), supports multiple languages (future), and works on low-bandwidth connections.

---

## 11. Interview-Ready Positioning

### When Asked: "How accurate is your carbon calculation?"
**Answer:**
> "We use industry-standard emission factors from IPCC and GHG Protocol, which are the same sources used by enterprises for ESG reporting. However, these are estimates, not exact measurements. We're transparent with users that actual emissions may vary by 10-20% based on individual circumstances. Our focus is on **relative trends** — helping users understand which habits have the highest impact."

### When Asked: "Does your AI predict climate change?"
**Answer:**
> "No. Our machine learning identifies behavior patterns and ranks recommendations, but it doesn't predict future emissions or climate outcomes. We're very clear with users about what our system does and doesn't do. Think of it as a behavior analytics tool, not a climate model."

### When Asked: "How do you handle privacy?"
**Answer:**
> "All activity logging is user-initiated — we don't track location or access devices. Users can export or delete their data anytime. For regional benchmarks, we use aggregated, anonymized data. We're GDPR/CCPA compliant and privacy-first by design."

---

## 12. Self-Check Before Launching Features

Before implementing any new feature, ask:

1. **Can two students realistically build this?**
   - If it requires satellite data, IoT sensors, or proprietary datasets → NO

2. **Is the data source real and publicly available?**
   - If it relies on "secret" algorithms or inaccessible data → NO

3. **Are we honest about limitations?**
   - If we're overselling accuracy or capabilities → NO

4. **Can we defend this in a technical interview?**
   - If we can't explain the methodology clearly → NO

**If any answer is NO → Redesign the feature.**

---

## 13. User-Facing Ethics Statement

**Displayed during onboarding:**

> ### What Atmos Does
> ✅ Tracks your self-reported activities in real time  
> ✅ Calculates emissions using standardized factors (IPCC, GHG Protocol)  
> ✅ Uses machine learning to identify behavior patterns  
> ✅ Provides explainable, personalized recommendations  
> 
> ### What Atmos Does NOT Do
> ❌ Predict climate change or future emissions  
> ❌ Claim exact carbon accuracy (estimates only)  
> ❌ Perform surveillance or passive tracking  
> ❌ Judge or shame you for your choices  
> 
> **Data Statement:**  
> Your activities are tracked in real time. Regional and global benchmarks are sourced from periodically updated public datasets (IPCC, national energy databases) and used as reference baselines.
> 
> By continuing, you acknowledge that you understand these capabilities and limitations.

---

## 14. Continuous Ethical Review

### 14.1 Regular Audits
- **Quarterly:** Review user feedback for ethical concerns
- **Annually:** External ethics audit (when resources allow)

### 14.2 User Feedback Loop
- Prominent "Report Concern" button in app
- Dedicated ethics email: ethics@atmos.app
- Transparent response to issues raised

### 14.3 Evolving Standards
- As climate science, ML ethics, and privacy regulations evolve, we commit to updating our practices.
- This document is a living document, updated quarterly.

---

## 15. Conclusion

**Atmos is built on a foundation of:**
- **Honesty** about capabilities and limitations
- **Transparency** in methodology and data sources
- **Respect** for user autonomy and privacy
- **Humility** about what technology can and cannot achieve

**We believe:**
- Climate action should empower, not guilt-trip
- Technology should augment human decision-making, not replace it
- Ethical design is non-negotiable, even under competitive pressure

**We commit to:**
- Never overstating our impact or accuracy
- Always prioritizing user well-being over engagement metrics
- Continuously learning and improving our ethical practices

---

**Document Status:** Living document, reviewed quarterly.  
**Ethics Contact:** ethics@atmos.app  
**Last Reviewed:** February 2026
