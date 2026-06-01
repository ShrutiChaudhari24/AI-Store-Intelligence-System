# Frontend - Store Intelligence Dashboard

A modern, scalable React-based real-time analytics dashboard for the Store Intelligence System.

## Features

- **Real-time Analytics**: Live dashboard with people counting, peak hours analysis, and crowd detection
- **Event Management**: Track and manage store events with detailed logging and resolution workflows
- **Multi-Camera Support**: Monitor multiple camera streams with live status indicators
- **Heatmap Visualization**: Visual representation of customer traffic patterns across the store
- **Alert System**: Configurable alerts for crowd events, loitering, queue formation, and zone violations
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Type-Safe**: Full TypeScript support with comprehensive type definitions

## Tech Stack

- **Framework**: React 18 with React Router for navigation
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS + PostCSS
- **State Management**: Zustand for lightweight state management
- **HTTP Client**: Axios with interceptors for API communication
- **Real-time**: Socket.IO for WebSocket communication
- **Charts**: Recharts for data visualization
- **Build Tool**: Vite for fast development and optimized production builds
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + Prettier

## Project Structure

```
frontend/
├── src/
│   ├── features/                 # Feature-based modules
│   │   ├── auth/                 # Authentication
│   │   ├── dashboard/            # Main dashboard
│   │   ├── events/               # Event management
│   │   ├── analytics/            # Analytics & reports
│   │   ├── cameras/              # Camera management
│   │   ├── stores/               # Store management
│   │   └── config/               # System configuration
│   │
│   ├── components/               # Shared components
│   │   ├── common/               # Reusable UI components
│   │   ├── layout/               # Layout components
│   │   └── charts/               # Chart visualizations
│   │
│   ├── hooks/                    # Custom React hooks
│   ├── services/                 # API and WebSocket clients
│   ├── context/                  # Global context providers
│   ├── types/                    # TypeScript definitions
│   ├── utils/                    # Utility functions
│   ├── styles/                   # Global styles
│   ├── assets/                   # Images, icons, fonts
│   ├── App.tsx                   # Main app component
│   └── main.tsx                  # Entry point
│
├── tests/                        # Test suites
│   ├── unit/                     # Unit tests
│   ├── integration/              # Integration tests
│   └── e2e/                      # End-to-end tests
│
├── public/                       # Static assets
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config
├── vite.config.ts                # Vite config
├── vitest.config.ts              # Vitest config
└── tailwind.config.ts            # Tailwind config
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your API and WebSocket URLs
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run unit tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code
npm run format

# Type check
npm run type-check
```

## Feature Modules

### Auth (`src/features/auth/`)
- User login and authentication
- Token management and refresh
- Protected route component
- Auth state management with Zustand

### Dashboard (`src/features/dashboard/`)
- Real-time analytics overview
- Key metrics display (people count, events, avg dwell time)
- Interactive charts and visualizations
- Period selection (today, week, month)

### Events (`src/features/events/`)
- Event list with filtering and pagination
- Event details view
- Acknowledge and resolve workflows
- Event summary and statistics

### Analytics (`src/features/analytics/`)
- People count trends over time
- Peak hours analysis
- Dwell time statistics
- Traffic heatmap
- Report generation

### Cameras (`src/features/cameras/`)
- Camera management and status
- Live stream preview
- Camera configuration
- Health monitoring

### Stores (`src/features/stores/`)
- Store management
- Store-level analytics
- Configuration per store

### Config (`src/features/config/`)
- Detection settings
- Alert rule configuration
- System preferences

## Shared Components

### Common Components
- `Header`: Main application header with user menu
- `Sidebar`: Navigation sidebar with feature links
- `Footer`: Application footer
- `Loader`: Loading spinner
- `Modal`: Generic modal/dialog
- `ErrorBoundary`: Error boundary for error handling
- `StatsCard`: Reusable stat card component

### Chart Components
- `PeopleCountChart`: Line chart for people count trends
- `PeakHoursChart`: Bar chart for hourly analysis
- `HeatmapChart`: Heatmap visualization for traffic patterns

## Custom Hooks

- `useAuth()`: Authentication state and methods
- `useFetch()`: Data fetching with loading/error states
- `useWebSocket()`: WebSocket connection management
- `useLocalStorage()`: Local storage with sync
- `useDebounce()`: Value debouncing

## API Integration

The frontend communicates with the backend through:

1. **REST API** (`apiClient` in `src/services/api.ts`)
   - Base URL: `http://localhost:8000/api/v1`
   - Handles authentication via JWT tokens
   - Automatic error handling and token refresh

2. **WebSocket** (`wsClient` in `src/services/websocket.ts`)
   - Real-time event updates
   - Live analytics data
   - Camera status changes
   - Auto-reconnection with exponential backoff

## Environment Variables

Create a `.env.local` file with the following variables:

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_WS_URL=ws://localhost:8000/ws
VITE_APP_NAME=Store Intelligence
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_WEBSOCKET=true
VITE_LOG_LEVEL=info
```

## Development Workflow

1. **Feature Development**: Work within feature modules under `src/features/`
2. **Shared Code**: Place reusable code in appropriate `src/` subdirectories
3. **Type Safety**: Always define types and interfaces
4. **Testing**: Write tests alongside features
5. **Code Style**: Use ESLint and Prettier for consistency

## TODO: Implementation Tasks

- [ ] Implement all API service calls with actual endpoints
- [ ] Add authentication flow and token handling
- [ ] Setup WebSocket real-time connections
- [ ] Complete all page components
- [ ] Add form validation and error handling
- [ ] Implement data caching strategies
- [ ] Add unit and integration tests
- [ ] Setup end-to-end tests with Cypress
- [ ] Add i18n for internationalization
- [ ] Setup analytics and error tracking
- [ ] Add PWA capabilities
- [ ] Performance optimization and code splitting

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is part of the Store Intelligence System.
