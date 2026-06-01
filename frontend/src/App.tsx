/**
 * Main App Component
 * TODO: Setup routing, context providers, and app layout
 */

import { BrowserRouter as Router } from 'react-router-dom'
// import { AuthProvider } from '@context/AuthContext'
// import { AppRoutes } from '@/routes'
// import { MainLayout } from '@components/layout/MainLayout'

function App() {
  return (
    <Router>
      {/* <AuthProvider>
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      </AuthProvider> */}
      <div className="p-4">
        <h1 className="text-3xl font-bold">Store Intelligence Dashboard</h1>
        <p>TODO: Setup app structure and routing</p>
      </div>
    </Router>
  )
}

export default App
