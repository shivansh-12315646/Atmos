# Atmos ML Services

Machine Learning services for the Atmos Carbon Footprint Tracker platform.

## Tech Stack

- **Framework:** Flask
- **ML Library:** scikit-learn
- **Data Processing:** pandas, numpy
- **Model Persistence:** joblib
- **API Documentation:** Swagger/OpenAPI (Flasgger)
- **Testing:** pytest

## Features

### User Behavior Clustering
- K-Means clustering for user segmentation
- "People like you" insights
- Cluster characteristics and descriptions

### Emission Driver Identification
- Identify dominant emission categories
- Pattern recognition in user behavior
- Leverage point analysis

### Habit Recommendations
- Rule-based + ML hybrid scoring
- Impact/effort/feasibility ranking
- Explainable recommendations

## Getting Started

### Prerequisites

- Python >= 3.9
- pip or poetry

### Installation

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Unix/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Update .env with your configuration
```

### Running the Service

```bash
# Development mode
python app/main.py

# Or using Flask CLI
export FLASK_APP=app/main.py
flask run --port 5000

# Run tests
pytest

# Run tests with coverage
pytest --cov=app tests/

# Generate coverage report
pytest --cov=app --cov-report=html tests/
```

The service will be available at `http://localhost:5000`

## Project Structure

```
ml-services/
├── app/
│   ├── models/           # ML model implementations
│   │   ├── clustering.py
│   │   ├── recommendation.py
│   │   └── pattern_detection.py
│   ├── services/         # Business logic
│   │   ├── cluster_service.py
│   │   ├── recommendation_service.py
│   │   └── explainer_service.py
│   ├── api/              # API routes
│   │   └── routes.py
│   ├── utils/            # Utility functions
│   │   ├── preprocessing.py
│   │   └── feature_engineering.py
│   └── main.py           # Flask app entry point
├── data/                 # Training data & saved models
├── tests/                # Test files
├── requirements.txt      # Python dependencies
└── .env.example          # Environment variables template
```

## API Endpoints

### Base URL
```
http://localhost:5000/api/v1
```

### Health Check
```bash
curl http://localhost:5000/health
```

### Endpoints

#### POST /api/v1/cluster/assign
Assign user to a behavior cluster

**Request:**
```json
{
  "userId": "uuid",
  "features": {
    "transportEmission": 120.5,
    "energyEmission": 80.2,
    "foodEmission": 35.8,
    "consumptionEmission": 9.0
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "clusterId": 3,
    "clusterDescription": "Urban commuters with moderate food emissions",
    "clusterCharacteristics": {
      "dominantCategory": "transport",
      "averageEmission": 245.5
    }
  }
}
```

#### POST /api/v1/recommend
Generate personalized recommendations

**Request:**
```json
{
  "userId": "uuid",
  "activityHistory": [...],
  "preferences": {
    "maxRecommendations": 10
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "recommendations": [
      {
        "id": "rec-1",
        "activityToReplace": "Driving petrol car",
        "suggestedAlternative": "Public transportation",
        "impactScore": 8.5,
        "effortScore": 6.0,
        "feasibilityScore": 7.5,
        "explanation": "..."
      }
    ]
  }
}
```

#### POST /api/v1/analyze/patterns
Analyze behavior patterns

**Request:**
```json
{
  "userId": "uuid",
  "timeRange": {
    "start": "2026-01-01",
    "end": "2026-02-28"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "dominantCategory": "transport",
    "patterns": [
      {
        "pattern": "High weekday commute emissions",
        "frequency": "daily",
        "impact": "high"
      }
    ]
  }
}
```

#### GET /api/v1/explain/{model_name}
Get model explanation

**Response:**
```json
{
  "success": true,
  "data": {
    "modelName": "clustering",
    "methodology": "K-Means clustering with 5 clusters",
    "featureImportance": [
      {"feature": "transport", "importance": 0.45},
      {"feature": "energy", "importance": 0.30}
    ]
  }
}
```

## ML Methodology

### Clustering (K-Means)
```python
from sklearn.cluster import KMeans

def cluster_users(features, n_clusters=5):
    """
    Cluster users based on emission patterns
    
    Features:
    - Category emissions (transport, energy, food, consumption)
    - Temporal patterns (weekday vs weekend)
    - Emission trends (increasing, stable, decreasing)
    """
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    return kmeans.fit_predict(features)
```

### Recommendation Scoring
```python
def score_recommendation(activity, alternative):
    """
    Score = w1*Impact + w2*Effort + w3*Feasibility
    
    Impact: Emission reduction potential
    Effort: User friction (1-10 scale)
    Feasibility: Context-dependent viability
    """
    impact = calculate_emission_reduction(activity, alternative)
    effort = assess_user_friction(alternative)
    feasibility = check_contextual_viability(alternative, user_context)
    
    return (0.5 * impact + 0.3 * effort + 0.2 * feasibility)
```

## Testing

```bash
# Run all tests
pytest

# Run specific test file
pytest tests/test_clustering.py

# Run with coverage
pytest --cov=app tests/

# Generate HTML coverage report
pytest --cov=app --cov-report=html tests/
open htmlcov/index.html
```

## Model Training

```bash
# Train clustering model
python scripts/train_clustering.py

# Train recommendation model
python scripts/train_recommendation.py

# Evaluate models
python scripts/evaluate_models.py
```

## Deployment

### Docker

```bash
# Build image
docker build -t atmos-ml-service .

# Run container
docker run -p 5000:5000 --env-file .env atmos-ml-service
```

### Production

```bash
# Using Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app.main:create_app()
```

## Model Persistence

Models are saved in the `data/` directory:

```
data/
├── models/
│   ├── clustering_model.joblib
│   ├── recommendation_model.joblib
│   └── scaler.joblib
└── training_data/
    └── user_features.csv
```

## Explainability

All ML models include explainability features:

- **Clustering:** Cluster centroids and characteristics
- **Recommendations:** Feature importance and reasoning
- **Patterns:** Rule-based explanations

Example explanation:
```json
{
  "recommendation": "Use public transit",
  "reasoning": {
    "currentEmission": "120 kg CO₂/month from car",
    "potentialReduction": "45 kg CO₂/month",
    "basis": "Your transport emissions are 60% of total. Public transit is available in your region.",
    "confidence": 0.85
  }
}
```

## Ethical Considerations

This ML service follows strict ethical guidelines:

- **No prediction:** We analyze patterns, not predict climate
- **Explainable:** All insights are interpretable
- **Privacy:** User data is anonymized for training
- **Bias mitigation:** Diverse training data, regular audits

See [docs/ETHICS.md](../docs/ETHICS.md) for full guidelines.

## Performance

Optimization strategies:
- Model caching with joblib
- Feature preprocessing pipeline
- Batch prediction support
- Asynchronous processing (future)

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Support

For issues or questions:
- Open a GitHub issue
- Email: ml-support@atmos.app
