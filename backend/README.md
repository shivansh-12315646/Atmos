# Atmos Backend API

Backend service for the Atmos Carbon Footprint Tracker platform.

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **ORM:** Sequelize
- **Authentication:** JWT
- **Validation:** Joi
- **Logging:** Winston
- **Testing:** Jest + Supertest

## Getting Started

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 14.x
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Update .env with your database credentials and secrets
```

### Database Setup

```bash
# Create PostgreSQL database
createdb atmos_db

# Run migrations (when implemented)
npm run migrate

# Seed data (optional)
npm run seed
```

### Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

## Project Structure

```
backend/
├── src/
│   ├── config/         # Configuration files
│   ├── models/         # Database models
│   ├── controllers/    # Route controllers
│   ├── services/       # Business logic
│   ├── middleware/     # Express middleware
│   ├── routes/         # API routes
│   ├── utils/          # Utility functions
│   └── app.js          # Express app setup
├── tests/              # Test files
├── logs/               # Log files
├── package.json
└── .env.example        # Environment variables template
```

## API Documentation

See [docs/API.md](../docs/API.md) for comprehensive API documentation.

### Base URL

```
http://localhost:4000/api/v1
```

### Health Check

```bash
curl http://localhost:4000/health
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production) | development |
| `PORT` | Server port | 4000 |
| `DB_HOST` | PostgreSQL host | localhost |
| `DB_PORT` | PostgreSQL port | 5432 |
| `DB_NAME` | Database name | atmos_db |
| `DB_USER` | Database user | postgres |
| `DB_PASSWORD` | Database password | - |
| `JWT_SECRET` | JWT signing secret | - |
| `JWT_EXPIRES_IN` | JWT expiration | 15m |
| `CORS_ORIGIN` | Allowed CORS origin | http://localhost:3000 |

## Features

### Authentication
- [x] User registration
- [x] User login
- [x] JWT token generation
- [x] Token refresh
- [x] Password hashing (bcrypt)

### Activity Tracking
- [x] Log activities (MCQ-based)
- [x] View activity history
- [x] Update activities
- [x] Delete activities

### Emission Calculation
- [x] Real-time emission calculation
- [x] IPCC/GHG Protocol emission factors
- [x] Region-specific calculations
- [x] Category-wise breakdown

### Analytics
- [x] Dashboard data
- [x] Trend analysis
- [x] Comparison with baselines
- [x] Regional averages

### Recommendations
- [x] ML-powered recommendations
- [x] Impact/effort/feasibility scoring
- [x] Explainable insights

## Testing

```bash
# Run all tests
npm test

# Run specific test file
npm test -- auth.test.js

# Run with coverage
npm run test:coverage

# Watch mode
npm run test:watch
```

## Deployment

### Docker (Optional)

```bash
# Build image
docker build -t atmos-backend .

# Run container
docker run -p 4000:4000 --env-file .env atmos-backend
```

### Render/Railway

1. Connect GitHub repository
2. Set environment variables
3. Deploy

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Security

- All passwords are hashed with bcrypt
- JWT tokens for authentication
- Rate limiting enabled
- Helmet.js for security headers
- Input validation with Joi
- SQL injection prevention (Sequelize ORM)

## Ethical Considerations

This backend strictly adheres to ethical guidelines outlined in [docs/ETHICS.md](../docs/ETHICS.md):

- **No surveillance:** All data is user-reported
- **Transparency:** All calculations are explainable
- **Privacy:** User data is protected
- **Honest:** Clear about limitations

## Support

For issues or questions:
- Open a GitHub issue
- Email: support@atmos.app
