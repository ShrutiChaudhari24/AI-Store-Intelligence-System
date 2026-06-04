import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { EventProvider } from './context/EventContext';
import { SettingsProvider } from './context/SettingsContext';
import { MainLayout } from './components/layout/MainLayout';
import {
  Login,
  Dashboard,
  LiveFeed,
  Events,
  Heatmap,
  Analytics,
  Reports,
  CameraManagement,
  Settings,
} from './pages';

function App() {
  return (
    <Router>
      <AuthProvider>
        <EventProvider>
          <SettingsProvider>
            <Routes>
              {/* Login Route */}
              <Route path="/login" element={<Login />} />

              {/* Protected Routes */}
              <Route
                path="/"
                element={
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                }
              />
              <Route
                path="/live-feed"
                element={
                  <MainLayout>
                    <LiveFeed />
                  </MainLayout>
                }
              />
              <Route
                path="/events"
                element={
                  <MainLayout>
                    <Events />
                  </MainLayout>
                }
              />
              <Route
                path="/heatmap"
                element={
                  <MainLayout>
                    <Heatmap />
                  </MainLayout>
                }
              />
              <Route
                path="/analytics"
                element={
                  <MainLayout>
                    <Analytics />
                  </MainLayout>
                }
              />
              <Route
                path="/reports"
                element={
                  <MainLayout>
                    <Reports />
                  </MainLayout>
                }
              />
              <Route
                path="/cameras"
                element={
                  <MainLayout>
                    <CameraManagement />
                  </MainLayout>
                }
              />
              <Route
                path="/settings"
                element={
                  <MainLayout>
                    <Settings />
                  </MainLayout>
                }
              />

              {/* Catch all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </SettingsProvider>
        </EventProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
