# Atmos Frontend

Frontend application for the Atmos Carbon Footprint Tracker platform.

## Tech Stack

- **Framework:** Next.js 14
- **UI Library:** React 18
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Maps:** React-Leaflet + Leaflet
- **Forms:** React Hook Form + Zod validation
- **HTTP Client:** Axios
- **Testing:** Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Update .env.local with your API URL and Mapbox token
```

### Running the Application

```bash
# Development mode
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run tests
npm test

# Lint code
npm run lint
```

The application will be available at `http://localhost:3000`

## Project Structure

```
frontend/
├── app/                # Next.js app directory (future migration)
├── pages/              # Next.js pages
│   ├── index.js       # Landing page
│   ├── auth/          # Authentication pages
│   ├── dashboard/     # Dashboard pages
│   ├── tracking/      # Activity tracking
│   ├── insights/      # Recommendations
│   └── settings/      # User settings
├── components/         # React components
│   ├── common/        # Reusable components
│   ├── charts/        # Chart components
│   ├── maps/          # Map components
│   └── forms/         # Form components
├── lib/               # Utility libraries
│   ├── api.js         # API client
│   └── constants.js   # Constants
├── hooks/             # Custom React hooks
├── styles/            # Global styles
│   └── globals.css    # Tailwind + global styles
└── public/            # Static assets
```

## Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Backend API URL | http://localhost:4000/api/v1 |
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox API token | - |
| `NEXT_PUBLIC_ENABLE_ML_RECOMMENDATIONS` | Enable ML features | true |
| `NEXT_PUBLIC_ENABLE_MAP_VISUALIZATION` | Enable maps | true |

## Features

### Landing Page
- [x] Hero section
- [x] Feature showcase
- [x] Ethics statement
- [x] CTA buttons

### Authentication
- [ ] Sign up flow
- [ ] Login flow
- [ ] Password reset
- [ ] Email verification

### Onboarding
- [ ] User type selection
- [ ] Region selection
- [ ] Ethics disclaimer
- [ ] Initial profile setup

### Dashboard
- [ ] Emissions summary
- [ ] Category breakdown
- [ ] Trend charts
- [ ] Quick actions

### Activity Tracking
- [ ] MCQ-based forms
- [ ] Transport tracking
- [ ] Energy tracking
- [ ] Food tracking
- [ ] Consumption tracking
- [ ] Real-time emission calculation

### Insights & Recommendations
- [ ] Personalized recommendations
- [ ] Impact ranking
- [ ] "People like you" insights
- [ ] Explainable AI

### Map Visualization
- [ ] Regional emission data
- [ ] Benchmark overlays
- [ ] User comparison
- [ ] Interactive tooltips

### Organization Features
- [ ] Organization dashboard
- [ ] Department breakdown
- [ ] ESG metrics
- [ ] Team comparison

## Styling

This project uses Tailwind CSS for styling:

```jsx
// Example component
export default function Card({ children }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
      {children}
    </div>
  )
}
```

Custom color palette:
- **atmos-green**: Primary brand color (green shades)
- Use semantic colors for different emission categories

## API Integration

```javascript
// lib/api.js example
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
```

## Testing

```bash
# Run all tests
npm test

# Run specific test
npm test -- Card.test.js

# Watch mode
npm run test:watch

# Coverage
npm run test:coverage
```

## Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Accessibility

This project follows WCAG 2.1 Level AA guidelines:

- Semantic HTML
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus indicators

## Performance

Optimization strategies:
- Next.js automatic code splitting
- Image optimization with next/image
- Static generation where possible
- Client-side caching
- Lazy loading for maps and charts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](../LICENSE) for details.

## Ethics

This frontend strictly adheres to ethical guidelines:

- **Transparency:** All calculations are explainable
- **Privacy:** No tracking without consent
- **Honesty:** Clear about system limitations
- **Accessibility:** Designed for all users

See [docs/ETHICS.md](../docs/ETHICS.md) for full guidelines.

## Support

For issues or questions:
- Open a GitHub issue
- Email: support@atmos.app
