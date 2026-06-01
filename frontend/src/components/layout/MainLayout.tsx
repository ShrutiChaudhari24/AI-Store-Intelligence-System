/**
 * Main Layout Component
 * TODO: Implement main layout with header, sidebar, footer
 */

import { ReactNode } from 'react'
import { Header } from '../common/Header'
import { Sidebar } from '../common/Sidebar'
import { Footer } from '../common/Footer'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
