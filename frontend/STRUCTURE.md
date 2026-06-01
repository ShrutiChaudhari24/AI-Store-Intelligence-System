# Frontend Structure Documentation

Complete reference for the Store Intelligence Frontend project structure, technologies, and implementation roadmap.

## 📁 Project Structure

```
frontend/
├── public/                           # Static files (favicon, logo, index.html)
├── src/
│   ├── features/                    # Feature-based modules (7 features)
│   │   ├── auth/
│   │   │   ├── types.ts            # Auth types (AuthState, LoginCredentials, etc.)
│   │   │   ├── services/
│   │   │   │   └── authService.ts  # Auth API calls (login, logout, refresh, etc.)
│   │   │   ├── store/
│   │   │   │   └── authStore.ts    # Zustand auth state management
│   │   │   ├── pages/
│   │   │   │   └── LoginPage.tsx   # Login page component
│   │   │   ├── components/
│   │   │   │   └── ProtectedRoute.tsx # Route protection wrapper
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts      # Custom auth hook
│   │   │   └── index.ts             # Feature exports
│   │   │
│   │   ├── dashboard/
│   │   │   ├── services/
│   │   │   │   └── dashboardService.ts # Dashboard API calls
│   │   │   ├── store/
│   │   │   │   └── dashboardStore.ts  # Dashboard state
│   │   │   ├── pages/
│   │   │   │   └── DashboardPage.tsx  # Main dashboard page
│   │   │   ├── components/
│   │   │   │   └── StatCard.tsx      # Stat card component
│   │   │   └── index.ts
│   │   │
│   │   ├── events/
│   │   │   ├── types.ts
│   │   │   ├── services/
│   │   │   │   └── eventsService.ts
│   │   │   ├── store/
│   │   │   │   └── eventsStore.ts
│   │   │   ├── pages/
│   │   │   │   └── EventsPage.tsx
│   │   │   ├── components/
│   │   │   │   └── EventDetailsModal.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── analytics/
│   │   │   ├── services/
│   │   │   │   └── analyticsService.ts
│   │   │   ├── pages/
│   │   │   │   └── AnalyticsPage.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── cameras/
│   │   │   ├── services/
│   │   │   │   └── camerasService.ts
│   │   │   ├── pages/
│   │   │   │   └── CamerasPage.tsx
│   │   │   ├── components/
│   │   │   │   └── CameraCard.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── stores/
│   │   │   ├── services/
│   │   │   │   └── storesService.ts
│   │   │   ├── pages/
│   │   │   │   └── StoresPage.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── config/
│   │       ├── services/
│   │       │   └── configService.ts
│   │       ├── pages/
│   │       │   └── ConfigPage.tsx
│   │       └── index.ts
│   │
│   ├── components/                  # Shared components (layout-agnostic)
│   │   ├── common/                  # Reusable UI components
│   │   │   ├── Header.tsx           # Main app header
│   │   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   │   ├── Footer.tsx           # App footer
│   │   │   ├── Loader.tsx           # Loading spinner
│   │   │   ├── Modal.tsx            # Generic modal/dialog
│   │   │   ├── ErrorBoundary.tsx    # Error boundary component
│   │   │   ├── StatsCard.tsx        # Reusable stat card
│   │   │   └── index.ts             # Exports
│   │   │
│   │   ├── layout/                  # Layout components
│   │   │   ├── MainLayout.tsx       # Main layout with header/sidebar/footer
│   │   │   └── index.ts
│   │   │
│   │   └── charts/                  # Chart visualizations (Recharts)
│   │       ├── PeopleCountChart.tsx # Line chart - people count trends
│   │       ├── PeakHoursChart.tsx   # Bar chart - hourly analysis
│   │       ├── HeatmapChart.tsx     # Heatmap - traffic visualization
│   │       └── index.ts
│   │
│   ├── hooks/                       # Global custom hooks
│   │   ├── useAuth.ts               # Re-export from auth feature
│   │   ├── useFetch.ts              # Data fetching with loading/error
│   │   ├── useWebSocket.ts          # WebSocket connection management
│   │   ├── useLocalStorage.ts       # Local storage persistence
│   │   ├── useDebounce.ts           # Value debouncing
│   │   └── index.ts
│   │
│   ├── services/                    # Global API & communication services
│   │   ├── api.ts                   # Axios client with interceptors
│   │   ├── websocket.ts             # WebSocket client (Socket.IO)
│   │   └── index.ts
│   │
│   ├── context/                     # Global context providers
│   │   ├── AuthContext.tsx          # Auth context provider
│   │   ├── EventContext.tsx         # Event context provider
│   │   ├── SettingsContext.tsx      # Settings context provider
│   │   └── index.ts
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── index.ts                 # Main types (User, Store, Event, Camera, etc.)
│   │   ├── api.ts                   # API response types and constants
│   │   └── (extend as needed)
│   │
│   ├── utils/                       # Utility functions
│   │   ├── formatting.ts            # Number, string, time formatting
│   │   ├── validation.ts            # Email, URL, phone validation
│   │   ├── date-utils.ts            # Date formatting and calculations
│   │   ├── constants.ts             # App constants and enums
│   │   └── index.ts
│   │
│   ├── styles/                      # Global styles
│   │   └── README.md                # Styles documentation
│   │
│   ├── assets/                      # Static assets
│   │   └── README.md                # Assets documentation
│   │
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # React 18 entry point
│   └── index.css                    # Global Tailwind styles
│
├── tests/                           # Test suites
│   ├── unit/                        # Unit tests
│   │   ├── setup.test.ts
│   │   ├── utilities.test.ts
│   │   └── auth.test.ts
│   │
│   ├── integration/                 # Integration tests
│   │   ├── api.test.ts
│   │   └── dashboard.test.ts
│   │
│   └── e2e/                         # End-to-end tests
│       └── app.test.ts
│
├── public/
│   ├── vite.svg
│   ├── favicon.ico
│   └── index.html
│
├── Configuration Files
│   ├── package.json                 # Dependencies & scripts (40+ packages)
│   ├── tsconfig.json                # TypeScript strict mode config
│   ├── tsconfig.node.json           # TypeScript config for tooling
│   ├── vite.config.ts               # Vite build tool config with aliases
│   ├── vitest.config.ts             # Vitest testing framework config
│   ├── tailwind.config.ts           # Tailwind CSS theme config
│   ├── postcss.config.js            # PostCSS with Tailwind plugin
│   ├── .eslintrc.json               # ESLint rules (TypeScript + React)
│   ├── .prettierrc.json             # Code formatter config
│   ├── .gitignore                   # Git ignore patterns
│   ├── .env.example                 # Environment variables template
│   ├── index.html                   # HTML entry point
│   ├── README.md                    # Frontend documentation
│   └── STRUCTURE.md                 # This file
```

## 🔧 Technology Stack

### Core Framework
- **React 18.2.0** - UI library with hooks
- **TypeScript 5.3** - Type safety and developer experience
- **React Router 6** - Client-side routing and navigation
- **Vite 5.0** - Lightning-fast build tool and dev server

### State Management
- **Zustand 4.4** - Lightweight state management library
- **React Context API** - Global context providers for Auth, Events, Settings

### UI & Styling
- **Tailwind CSS 3.3** - Utility-first CSS framework
- **PostCSS 8.4** - CSS processing with autoprefixer
- **React Icons 4.12** - SVG icon library
- **Radix UI (optional)** - Headless UI components

### Data Visualization
- **Recharts 2.10** - Composable charting library

### HTTP & Communication
- **Axios 1.6** - HTTP client with interceptors
- **Socket.IO Client 4.7** - WebSocket client for real-time updates
- **React Query 3.39** - Server state management (optional)

### Utilities
- **Date-fns 2.30** - Date manipulation library
- **JS Cookie 3.0** - Cookie handling
- **Class Variance Authority 0.7** - CSS class composition
- **Clsx 2.0** - Conditional className utility
- **Tailwind Merge 2.2** - Merge Tailwind classes

### Development Tools
- **Vitest 0.34** - Unit testing framework
- **React Testing Library 14.1** - React component testing
- **ESLint 8.54** - Code linting
- **Prettier 3.11** - Code formatting
- **Cypress 13.6** - E2E testing

### Build & Development
- **@vitejs/plugin-react** - Vite React plugin with Fast Refresh
- **TypeScript compiler** - Type checking

## 📦 Dependencies (40+ Total)

### Direct Dependencies (17)
```
react, react-dom, react-router-dom, axios, zustand
socket.io-client, recharts, react-icons
@radix-ui/*, class-variance-authority, clsx
tailwind-merge, date-fns, js-cookie, react-query
```

### Dev Dependencies (23)
```
@types/react, @types/react-dom, @types/node
typescript, vite, tailwindcss, postcss, autoprefixer
eslint, @typescript-eslint/*, prettier
vitest, @testing-library/react, @testing-library/jest-dom
cypress
```

## 🎨 Feature Modules Architecture

### Auth Feature
- **Purpose**: User authentication and authorization
- **Key Files**:
  - `authService.ts`: Login, logout, refresh token, get current user
  - `authStore.ts`: State for user, authentication status, tokens
  - `LoginPage.tsx`: Login UI component
  - `ProtectedRoute.tsx`: Route protection wrapper
  - `useAuth.ts`: Custom hook for auth functionality

### Dashboard Feature
- **Purpose**: Real-time analytics overview
- **Key Files**:
  - `dashboardService.ts`: Fetch dashboard data, real-time stats
  - `dashboardStore.ts`: Dashboard state (period, store selection)
  - `DashboardPage.tsx`: Main dashboard view
  - `StatCard.tsx`: Reusable stat card component

### Events Feature
- **Purpose**: Event management and monitoring
- **Key Files**:
  - `eventsService.ts`: List, get, acknowledge, resolve events
  - `eventsStore.ts`: Events state (list, filters, pagination)
  - `EventsPage.tsx`: Events list view
  - `EventDetailsModal.tsx`: Event details modal

### Analytics Feature
- **Purpose**: Data analysis and reporting
- **Key Files**:
  - `analyticsService.ts`: People count, peak hours, heatmap, dwell time
  - `AnalyticsPage.tsx`: Analytics dashboard with charts

### Cameras Feature
- **Purpose**: Camera management and monitoring
- **Key Files**:
  - `camerasService.ts`: Camera CRUD, stream access
  - `CamerasPage.tsx`: Camera list view
  - `CameraCard.tsx`: Individual camera card component

### Stores Feature
- **Purpose**: Multi-store management
- **Key Files**:
  - `storesService.ts`: Store CRUD operations
  - `StoresPage.tsx`: Stores management view

### Config Feature
- **Purpose**: System configuration and settings
- **Key Files**:
  - `configService.ts`: Detection settings, alert rules, system settings
  - `ConfigPage.tsx`: Configuration management view

## 🎯 Shared Components

### Common Components (`components/common/`)
- **Header.tsx**: Top navigation with user menu and logout
- **Sidebar.tsx**: Left navigation with feature links
- **Footer.tsx**: Application footer
- **Loader.tsx**: Loading spinner with optional message
- **Modal.tsx**: Generic modal/dialog component
- **ErrorBoundary.tsx**: React error boundary
- **StatsCard.tsx**: Reusable statistic card

### Layout Components (`components/layout/`)
- **MainLayout.tsx**: Primary layout wrapper (Header + Sidebar + Content + Footer)

### Chart Components (`components/charts/`)
- **PeopleCountChart.tsx**: Line chart for time-series data
- **PeakHoursChart.tsx**: Bar chart for hourly statistics
- **HeatmapChart.tsx**: Heatmap visualization for traffic patterns

## 🪝 Custom Hooks

### Global Hooks (`hooks/`)
- **useAuth()**: Authentication state and methods from auth feature
- **useFetch()**: Generic data fetching with loading/error states
- **useWebSocket()**: WebSocket connection with auto-reconnect
- **useLocalStorage()**: Persistent client-side storage
- **useDebounce()**: Debounce hook for search/filter input

## 🌐 Global Services

### API Client (`services/api.ts`)
- Axios instance with base URL configuration
- Request interceptor for auth tokens
- Response interceptor for error handling
- Methods: `get()`, `post()`, `put()`, `delete()`

### WebSocket Client (`services/websocket.ts`)
- Socket.IO-based real-time communication
- Auto-reconnection with exponential backoff
- Message handlers for events, analytics, camera status
- Methods: `connect()`, `disconnect()`, `send()`, `on()`, `off()`

## 🎭 Global Context Providers

### AuthContext (`context/AuthContext.tsx`)
- Wraps app with authentication state
- Restore session on app load

### EventContext (`context/EventContext.tsx`)
- Global event list and management
- Methods: `addEvent()`, `removeEvent()`, `clearEvents()`

### SettingsContext (`context/SettingsContext.tsx`)
- Application preferences (theme, language, notifications)
- Methods: `setTheme()`, `setLanguage()`, `setShowNotifications()`

## 📝 Type Definitions

### Main Types (`types/index.ts`)
- **User**: User profile with role (admin, manager, analyst, viewer)
- **Store**: Store with location and timezone
- **Camera**: Camera with RTSP URL and status
- **Event**: Event with type, severity, and timestamps
- **Detection**: Object detection with bounding boxes
- **Track**: Multi-object track with trajectory
- **Zone**: Detection zone in camera view
- **AnalyticsDashboard**: Real-time metrics and trends
- **WebSocketMessage**: Message types for real-time updates

### API Types (`types/api.ts`)
- **ApiResponse**: Generic API response wrapper
- **PaginatedResponse**: Paginated results
- **Alert**: Alert notifications
- **HTTP_STATUS_CODES**: Status code constants
- **EVENT_TYPES_DISPLAY**: Event type labels
- **SEVERITY_COLORS**: Severity color map

## 🛠️ Utility Functions

### Formatting (`utils/formatting.ts`)
- `formatNumber()`: Number with decimals
- `formatPercentage()`: Percentage formatting
- `formatBytes()`: Byte size formatting
- `formatTime()`: Duration formatting
- `truncateString()`: Truncate with ellipsis
- `capitalizeString()`: Capitalize first letter
- `camelCaseToTitle()`: Convert camelCase to Title Case

### Validation (`utils/validation.ts`)
- `isValidEmail()`: Email validation
- `isValidUrl()`: URL validation
- `isValidRtspUrl()`: RTSP URL validation
- `isValidPhoneNumber()`: Phone number validation
- `isValidUUID()`: UUID validation
- `isEmpty()`: Check if value is empty

### Date Utilities (`utils/date-utils.ts`)
- `formatDate()`: Date formatting
- `formatDateTime()`: Date and time formatting
- `formatTime()`: Time formatting
- `getRelativeTime()`: Relative time ("2 hours ago")
- `isSameDay()`: Date comparison
- `getDayOfWeek()`: Get day name
- `getWeekNumber()`: ISO week number

### Constants (`utils/constants.ts`)
- **API_ENDPOINTS**: API route constants
- **EVENT_SEVERITY_COLORS**: Color mapping for severity levels
- **EVENT_TYPE_LABELS**: Display labels for event types
- **CAMERA_STATUS_COLORS**: Color coding for camera status
- **PAGINATION_DEFAULTS**: Default page size
- **CACHE_KEYS**: Cache key constants
- **TOAST_DURATION**: Toast notification timeout
- **DEBOUNCE_DELAY**: Default debounce interval

## 📋 NPM Scripts

```bash
npm run dev              # Start development server (port 3000)
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint
npm run format          # Format code with Prettier
npm test               # Run Vitest
npm run test:ui        # Run tests with UI
npm run test:coverage  # Run tests with coverage report
npm run type-check     # TypeScript type checking
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local with your settings
# VITE_API_BASE_URL=http://localhost:8000/api/v1
# VITE_WS_URL=ws://localhost:8000/ws
```

### Development
```bash
npm run dev
# Open http://localhost:3000
```

### Build
```bash
npm run build
npm run preview
```

## 📚 Configuration Details

### TypeScript (`tsconfig.json`)
- Target: ES2020
- Module: ESNext (with Vite)
- Strict mode enabled
- Path aliases for imports (@/, @features/, etc.)
- React JSX support

### Vite (`vite.config.ts`)
- React plugin with Fast Refresh
- Path aliases matching tsconfig
- API proxy to backend (localhost:8000)
- Port: 3000

### Tailwind (`tailwind.config.ts`)
- Custom primary color palette
- Default theme extensions
- Responsive design support

### ESLint (`.eslintrc.json`)
- TypeScript parser
- React Hooks plugin
- Recommended rules
- Unused variable warnings (except underscore-prefixed)

### Prettier (`.prettierrc.json`)
- 100 character line width
- 2-space indentation
- Single quotes
- Trailing commas

## 📦 Build Output

- **Development**: Served by Vite dev server with Hot Module Replacement
- **Production**: Optimized build in `dist/` directory
  - JavaScript code splitting
  - Asset optimization
  - Tree-shaking for unused code
  - Minification and compression

## 🔐 Environment Variables

```env
# Required
VITE_API_BASE_URL=http://localhost:8000/api/v1
VITE_WS_URL=ws://localhost:8000/ws

# Optional
VITE_APP_NAME=Store Intelligence
VITE_APP_VERSION=0.1.0
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_WEBSOCKET=true
VITE_ENABLE_REAL_TIME_UPDATES=true
VITE_API_TIMEOUT=30000
VITE_API_RETRY_ATTEMPTS=3
VITE_LOG_LEVEL=info
```

## 🧪 Testing Structure

### Unit Tests (`tests/unit/`)
- Component logic testing
- Utility function testing
- Store/hook testing

### Integration Tests (`tests/integration/`)
- API client testing
- Feature interaction testing
- Context provider testing

### E2E Tests (`tests/e2e/`)
- Full user workflows
- Cross-feature interactions
- Real-time update flows

## 📋 TODO: Implementation Roadmap

### Phase 1: Core Implementation (High Priority)
- [ ] Implement all API service calls
- [ ] Setup authentication flow (login, token refresh, logout)
- [ ] Configure WebSocket connections for real-time updates
- [ ] Implement dashboard with live metrics
- [ ] Build event management interface
- [ ] Create camera management system

### Phase 2: Data Visualization (High Priority)
- [ ] Implement Recharts visualizations
- [ ] Build heatmap component with color gradients
- [ ] Add interactive filtering on charts
- [ ] Export reports to PDF/CSV

### Phase 3: Advanced Features (Medium Priority)
- [ ] Real-time notifications/toast system
- [ ] Multi-language support (i18n)
- [ ] Dark mode theme support
- [ ] Advanced search and filtering
- [ ] User preference persistence

### Phase 4: Testing & QA (Medium Priority)
- [ ] Complete unit test coverage (>80%)
- [ ] Integration test coverage
- [ ] E2E test scenarios
- [ ] Performance testing
- [ ] Accessibility (a11y) audit

### Phase 5: Production Ready (Medium Priority)
- [ ] Error tracking (Sentry)
- [ ] Analytics tracking
- [ ] Performance monitoring
- [ ] Progressive Web App (PWA) setup
- [ ] SEO optimization

### Phase 6: Optimization (Low Priority)
- [ ] Code splitting by feature
- [ ] Lazy loading routes
- [ ] Image optimization
- [ ] Bundle size analysis
- [ ] Lighthouse optimization

## 🔗 Integration Points

### Backend API (`/api/v1`)
- Authentication endpoints
- Event management endpoints
- Analytics endpoints
- Camera management endpoints
- Store management endpoints
- Configuration endpoints

### WebSocket Server (`/ws`)
- Event updates
- Analytics real-time data
- Camera status changes
- System alerts

## 🎯 Best Practices

1. **Feature-Based Organization**: Each feature is self-contained with its own components, hooks, services
2. **Type Safety**: Comprehensive TypeScript types for all data structures
3. **Error Boundaries**: Wrap major sections with error boundaries
4. **Code Splitting**: Lazy load feature routes for better performance
5. **Testing**: Test critical paths and business logic
6. **Documentation**: Maintain inline documentation for complex logic
7. **Accessibility**: Use semantic HTML and ARIA labels
8. **Performance**: Use React.memo for expensive components, debounce user input

## 📄 File Status

- ✅ **Configuration**: All config files created (package.json, tsconfig, vite.config, etc.)
- ✅ **Type Definitions**: Comprehensive TypeScript types for all domains
- ✅ **Global Infrastructure**: Services, hooks, context, utilities
- ✅ **Components**: Common, layout, and chart components created
- ✅ **Feature Modules**: All 7 feature modules with basic structure
- ⏳ **Implementation**: All files are templates with TODO comments - ready for implementation
- ⏳ **Tests**: Test structure created - tests need to be implemented
- ⏳ **Styling**: Base styles setup - component-specific styles can be added as needed

## 📞 Support & Next Steps

1. Install dependencies: `npm install`
2. Setup environment variables: `.env.local`
3. Start development: `npm run dev`
4. Begin implementing feature services and components
5. Add tests as features are implemented
6. Build production bundle: `npm run build`

---

**Last Updated**: 2024
**Version**: 0.1.0
**Status**: Scaffolding Complete - Ready for Implementation
