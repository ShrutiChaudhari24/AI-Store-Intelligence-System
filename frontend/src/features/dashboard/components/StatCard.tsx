/**
 * Dashboard Feature - Stat Card Component
 * TODO: Implement reusable stat card component
 */

interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  trend?: number
}

export const StatCard = ({ title, value, icon, trend }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          {trend !== undefined && (
            <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </p>
          )}
        </div>
        {icon && <div className="text-3xl opacity-50">{icon}</div>}
      </div>
    </div>
  )
}
