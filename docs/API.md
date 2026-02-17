# API Documentation
# Atmos - Carbon Footprint Tracker & Behavior Optimization Platform

**Version:** 1.0  
**Last Updated:** February 2026  
**Base URL:** `https://api.atmos.app/v1`

---

## Table of Contents

1. [Authentication](#1-authentication)
2. [Users](#2-users)
3. [Activities](#3-activities)
4. [Emissions](#4-emissions)
5. [Analytics](#5-analytics)
6. [Recommendations](#6-recommendations)
7. [Map Data](#7-map-data)
8. [Organizations](#8-organizations)
9. [Error Codes](#9-error-codes)

---

## General Information

### Authentication

All endpoints (except `/auth/*`) require authentication via JWT token.

**Header Format:**
```
Authorization: Bearer <jwt_token>
```

### Response Format

**Success Response:**
```json
{
  "success": true,
  "data": { /* response data */ },
  "message": "Operation successful",
  "timestamp": "2026-02-13T04:55:00.000Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {}
  },
  "timestamp": "2026-02-13T04:55:00.000Z"
}
```

### Pagination

List endpoints support pagination via query parameters:
```
?page=1&limit=20
```

**Paginated Response:**
```json
{
  "success": true,
  "data": [ /* items */ ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

---

## 1. Authentication

### POST /auth/signup

Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "userType": "individual",
  "region": "US-CA"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "userType": "individual",
      "region": "US-CA"
    },
    "token": "jwt_token",
    "refreshToken": "refresh_token"
  }
}
```

### POST /auth/login

Authenticate user and get JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "userType": "individual"
    },
    "token": "jwt_token",
    "refreshToken": "refresh_token"
  }
}
```

### POST /auth/refresh

Refresh JWT token using refresh token.

**Request Body:**
```json
{
  "refreshToken": "refresh_token"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "new_jwt_token"
  }
}
```

### POST /auth/logout

Logout user (invalidates refresh token).

**Request Body:**
```json
{
  "refreshToken": "refresh_token"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

### GET /auth/me

Get current user information.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "userType": "individual",
    "region": "US-CA",
    "createdAt": "2026-01-01T00:00:00.000Z"
  }
}
```

---

## 2. Users

### GET /users/:id

Get user profile (own profile only).

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "userType": "individual",
    "region": "US-CA",
    "preferences": {
      "units": "metric",
      "notifications": true
    }
  }
}
```

### PUT /users/:id

Update user profile.

**Request Body:**
```json
{
  "region": "US-NY",
  "preferences": {
    "units": "imperial",
    "notifications": false
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "region": "US-NY",
    "preferences": {
      "units": "imperial",
      "notifications": false
    }
  }
}
```

### DELETE /users/:id

Delete user account and all associated data.

**Response:**
```json
{
  "success": true,
  "message": "Account deleted successfully"
}
```

---

## 3. Activities

### POST /activities

Log a new activity.

**Request Body:**
```json
{
  "category": "transport",
  "activityType": "car_petrol",
  "quantity": 50,
  "unit": "km",
  "date": "2026-02-13"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "category": "transport",
    "activityType": "car_petrol",
    "quantity": 50,
    "unit": "km",
    "emissionKgCo2": 11.55,
    "loggedAt": "2026-02-13T10:30:00.000Z"
  }
}
```

### GET /activities

Get user's activities (paginated).

**Query Parameters:**
- `page` (default: 1)
- `limit` (default: 20, max: 100)
- `category` (optional filter)
- `startDate` (optional filter)
- `endDate` (optional filter)

**Example:** `/activities?category=transport&startDate=2026-02-01&limit=50`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "category": "transport",
      "activityType": "car_petrol",
      "quantity": 50,
      "unit": "km",
      "emissionKgCo2": 11.55,
      "loggedAt": "2026-02-13T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  }
}
```

### GET /activities/:id

Get specific activity details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "category": "transport",
    "activityType": "car_petrol",
    "quantity": 50,
    "unit": "km",
    "emissionKgCo2": 11.55,
    "emissionFactor": 0.231,
    "emissionSource": "IPCC",
    "loggedAt": "2026-02-13T10:30:00.000Z"
  }
}
```

### PUT /activities/:id

Update an activity.

**Request Body:**
```json
{
  "quantity": 60,
  "date": "2026-02-13"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "category": "transport",
    "activityType": "car_petrol",
    "quantity": 60,
    "unit": "km",
    "emissionKgCo2": 13.86,
    "loggedAt": "2026-02-13T10:30:00.000Z"
  }
}
```

### DELETE /activities/:id

Delete an activity.

**Response:**
```json
{
  "success": true,
  "message": "Activity deleted successfully"
}
```

---

## 4. Emissions

### POST /emissions/calculate

Calculate emissions for a hypothetical activity (without logging).

**Request Body:**
```json
{
  "category": "food",
  "activityType": "beef",
  "quantity": 2,
  "unit": "kg"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "emissionKgCo2": 54.0,
    "emissionFactor": 27.0,
    "unit": "kg CO₂ per kg",
    "source": "IPCC",
    "disclaimer": "This is an estimate based on standardized emission factors."
  }
}
```

### GET /emissions/summary

Get emissions summary for a period.

**Query Parameters:**
- `period` (required): `day`, `week`, `month`, `year`
- `startDate` (optional)
- `endDate` (optional)

**Example:** `/emissions/summary?period=month&startDate=2026-02-01`

**Response:**
```json
{
  "success": true,
  "data": {
    "totalEmissionKgCo2": 245.5,
    "period": "month",
    "startDate": "2026-02-01",
    "endDate": "2026-02-28",
    "categoryBreakdown": {
      "transport": 120.5,
      "energy": 80.2,
      "food": 35.8,
      "consumption": 9.0
    },
    "comparison": {
      "previousPeriod": 280.3,
      "percentageChange": -12.4
    }
  }
}
```

### GET /emissions/trends

Get emission trends over time.

**Query Parameters:**
- `granularity` (required): `daily`, `weekly`, `monthly`
- `startDate` (required)
- `endDate` (required)

**Example:** `/emissions/trends?granularity=weekly&startDate=2026-01-01&endDate=2026-02-28`

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "period": "2026-W05",
      "totalEmissionKgCo2": 55.2,
      "categoryBreakdown": {
        "transport": 25.5,
        "energy": 20.0,
        "food": 8.2,
        "consumption": 1.5
      }
    },
    {
      "period": "2026-W06",
      "totalEmissionKgCo2": 62.8,
      "categoryBreakdown": {
        "transport": 30.1,
        "energy": 22.5,
        "food": 9.2,
        "consumption": 1.0
      }
    }
  ]
}
```

### GET /emissions/breakdown

Get detailed category breakdown.

**Query Parameters:**
- `category` (optional): Filter by category
- `startDate` (optional)
- `endDate` (optional)

**Example:** `/emissions/breakdown?category=transport&startDate=2026-02-01`

**Response:**
```json
{
  "success": true,
  "data": {
    "category": "transport",
    "totalEmissionKgCo2": 120.5,
    "activities": [
      {
        "activityType": "car_petrol",
        "count": 15,
        "totalEmissionKgCo2": 92.5,
        "percentage": 76.8
      },
      {
        "activityType": "bus",
        "count": 10,
        "totalEmissionKgCo2": 18.0,
        "percentage": 14.9
      },
      {
        "activityType": "train",
        "count": 5,
        "totalEmissionKgCo2": 10.0,
        "percentage": 8.3
      }
    ]
  }
}
```

---

## 5. Analytics

### GET /analytics/dashboard

Get comprehensive dashboard data.

**Query Parameters:**
- `period` (default: `month`): `week`, `month`, `year`

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalEmissionKgCo2": 245.5,
      "period": "month",
      "activitiesLogged": 87
    },
    "categoryBreakdown": {
      "transport": 120.5,
      "energy": 80.2,
      "food": 35.8,
      "consumption": 9.0
    },
    "trends": [
      { "date": "2026-02-01", "emission": 8.2 },
      { "date": "2026-02-02", "emission": 9.5 }
    ],
    "topEmitters": [
      {
        "activity": "car_petrol",
        "emissionKgCo2": 92.5,
        "count": 15
      }
    ],
    "insights": {
      "dominantCategory": "transport",
      "percentageOfTotal": 49.1,
      "improvementSuggestion": "Consider public transportation for short trips"
    }
  }
}
```

### GET /analytics/insights

Get personalized insights based on ML analysis.

**Response:**
```json
{
  "success": true,
  "data": {
    "clusterId": 3,
    "clusterDescription": "Urban commuters with moderate food emissions",
    "dominantEmissionDriver": "transport",
    "monthlyAverageKgCo2": 245.5,
    "comparisonWithCluster": {
      "clusterAverage": 220.3,
      "percentageDifference": 11.4,
      "status": "above_average"
    },
    "leveragePoints": [
      {
        "category": "transport",
        "currentEmission": 120.5,
        "potentialReduction": 45.2,
        "impactRank": 1
      },
      {
        "category": "energy",
        "currentEmission": 80.2,
        "potentialReduction": 25.1,
        "impactRank": 2
      }
    ]
  }
}
```

### GET /analytics/comparison

Get comparison data.

**Query Parameters:**
- `compareWith`: `personal_baseline`, `regional_average`, `cluster_average`
- `period` (default: `month`)

**Example:** `/analytics/comparison?compareWith=regional_average&period=month`

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "totalEmissionKgCo2": 245.5,
      "period": "month"
    },
    "comparison": {
      "type": "regional_average",
      "region": "US-CA",
      "averageEmissionKgCo2": 320.5,
      "percentageDifference": -23.4,
      "status": "below_average",
      "message": "Your emissions are 23.4% below the regional average."
    },
    "categoryComparison": {
      "transport": {
        "user": 120.5,
        "average": 150.2,
        "difference": -19.8
      },
      "energy": {
        "user": 80.2,
        "average": 110.3,
        "difference": -27.3
      }
    }
  }
}
```

### GET /analytics/regional

Get regional emission averages.

**Query Parameters:**
- `region` (required): Region code (e.g., `US-CA`, `UK`, `IN-MH`)

**Response:**
```json
{
  "success": true,
  "data": {
    "region": "US-CA",
    "regionName": "California, USA",
    "monthlyAverageKgCo2": 320.5,
    "categoryBreakdown": {
      "transport": 150.2,
      "energy": 110.3,
      "food": 45.5,
      "consumption": 14.5
    },
    "electricityIntensity": 0.22,
    "electricityIntensityUnit": "kg CO₂/kWh",
    "dataSource": "California Air Resources Board",
    "lastUpdated": "2026-02-01"
  }
}
```

---

## 6. Recommendations

### GET /recommendations

Get personalized habit recommendations.

**Query Parameters:**
- `limit` (default: 10)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "activityToReplace": "Driving petrol car for short trips",
      "suggestedAlternative": "Use public transportation (bus/train)",
      "impactScore": 8.5,
      "effortScore": 6.0,
      "feasibilityScore": 7.5,
      "overallScore": 7.3,
      "potentialReductionKgCo2": 45.2,
      "explanation": "Switching to public transit for trips under 10km can reduce your monthly transport emissions by ~38%. Public transit is widely available in your area.",
      "category": "transport",
      "difficulty": "moderate"
    },
    {
      "id": "uuid",
      "activityToReplace": "High beef consumption",
      "suggestedAlternative": "Reduce beef, increase chicken/plant protein",
      "impactScore": 7.2,
      "effortScore": 5.5,
      "feasibilityScore": 8.0,
      "overallScore": 6.9,
      "potentialReductionKgCo2": 28.5,
      "explanation": "Beef has 4x the emissions of chicken. Reducing beef consumption by 50% can lower your food emissions by ~40%.",
      "category": "food",
      "difficulty": "easy"
    }
  ]
}
```

### POST /recommendations/:id/feedback

Provide feedback on a recommendation.

**Request Body:**
```json
{
  "implemented": true,
  "helpful": true,
  "comments": "Successfully switched to public transit"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Feedback recorded successfully"
}
```

---

## 7. Map Data

### GET /map/regional-data

Get regional emission data for map visualization.

**Query Parameters:**
- `zoom` (optional): Map zoom level
- `bounds` (optional): Map bounds for filtering

**Response:**
```json
{
  "success": true,
  "data": {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [[[-122.5, 37.5], [-122.0, 37.5], [-122.0, 38.0], [-122.5, 38.0], [-122.5, 37.5]]]
        },
        "properties": {
          "region": "US-CA",
          "regionName": "California",
          "averageEmissionKgCo2": 320.5,
          "population": 39500000,
          "electricityIntensity": 0.22
        }
      }
    ]
  }
}
```

### GET /map/benchmarks

Get benchmark data for map overlays.

**Query Parameters:**
- `benchmarkType`: `national`, `global`, `industry`

**Response:**
```json
{
  "success": true,
  "data": {
    "benchmarkType": "national",
    "regions": [
      {
        "region": "US-CA",
        "benchmark": "low",
        "averageEmissionKgCo2": 320.5,
        "rank": 5,
        "totalRegions": 50
      },
      {
        "region": "US-TX",
        "benchmark": "high",
        "averageEmissionKgCo2": 580.2,
        "rank": 45,
        "totalRegions": 50
      }
    ]
  }
}
```

---

## 8. Organizations

### POST /organizations

Create an organization.

**Request Body:**
```json
{
  "name": "Acme Corp",
  "size": "medium",
  "industry": "technology"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Acme Corp",
    "size": "medium",
    "industry": "technology",
    "adminUserId": "uuid",
    "createdAt": "2026-02-13T10:30:00.000Z"
  }
}
```

### GET /organizations/:id

Get organization details.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Acme Corp",
    "size": "medium",
    "industry": "technology",
    "memberCount": 45,
    "monthlyEmissionKgCo2": 11025.5,
    "perCapitaEmissionKgCo2": 245.0
  }
}
```

### GET /organizations/:id/dashboard

Get organization ESG dashboard data.

**Query Parameters:**
- `period` (default: `month`)

**Response:**
```json
{
  "success": true,
  "data": {
    "summary": {
      "totalEmissionKgCo2": 11025.5,
      "memberCount": 45,
      "perCapitaEmissionKgCo2": 245.0,
      "participationRate": 78.5
    },
    "departmentBreakdown": [
      {
        "department": "Engineering",
        "emissionKgCo2": 4500.2,
        "memberCount": 20
      },
      {
        "department": "Sales",
        "emissionKgCo2": 3200.5,
        "memberCount": 15
      }
    ],
    "trends": [
      { "period": "2026-01", "emission": 12500.3 },
      { "period": "2026-02", "emission": 11025.5 }
    ],
    "comparison": {
      "similarOrganizations": 8900.2,
      "percentageDifference": 23.8,
      "rank": 12,
      "totalOrganizations": 150
    }
  }
}
```

---

## 9. Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `AUTH_INVALID_CREDENTIALS` | 401 | Invalid email or password |
| `AUTH_TOKEN_EXPIRED` | 401 | JWT token has expired |
| `AUTH_TOKEN_INVALID` | 401 | Invalid JWT token |
| `AUTH_UNAUTHORIZED` | 403 | User not authorized for this action |
| `USER_NOT_FOUND` | 404 | User does not exist |
| `USER_ALREADY_EXISTS` | 409 | Email already registered |
| `ACTIVITY_NOT_FOUND` | 404 | Activity does not exist |
| `ACTIVITY_INVALID_DATA` | 400 | Invalid activity data |
| `VALIDATION_ERROR` | 400 | Request validation failed |
| `INTERNAL_ERROR` | 500 | Internal server error |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `REGION_NOT_FOUND` | 404 | Region not supported |
| `EMISSION_FACTOR_NOT_FOUND` | 404 | Emission factor not available |

---

## 10. Rate Limits

| Endpoint Category | Limit |
|-------------------|-------|
| Authentication | 5 requests/minute |
| Activity Logging | 100 requests/15 minutes |
| Analytics/Dashboard | 60 requests/minute |
| Map Data | 30 requests/minute |
| General API | 100 requests/15 minutes |

---

## 11. Data Disclaimers

**All emission calculations are estimates based on:**
- IPCC emission factor databases
- GHG Protocol guidelines
- Regional energy grid carbon intensity
- Publicly available datasets

**Limitations:**
- Actual emissions may vary based on specific conditions
- Regional factors are periodically updated (monthly/quarterly)
- Individual circumstances may not be fully captured

**Usage Statement:**
> "User activities are tracked in real time. Regional and global benchmarks are sourced from periodically updated public datasets and used as reference baselines."

---

**API Version:** 1.0  
**Last Updated:** February 2026  
**Support:** api-support@atmos.app
