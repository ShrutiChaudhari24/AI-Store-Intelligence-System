/**
 * Stats Card Component
 * TODO: Implement generic stat card
 */

interface StatsCardProps {
  label: string
  value: string | number
  icon?: React.ReactNode
  trend?: { value: number; isPositive: boolean }
  color?: 'primary' | 'success' | 'warning' | 'danger'
}

export const StatsCard = ({
  label,
  value,
  icon,
  trend,
  color = 'primary',
}: StatsCardProps) => {
  const colorClasses = {
    primary: 'bg-blue-50 border-blue-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    danger: 'bg-red-50 border-red-200',
  }

  return (
    <div className={`${colorClasses[color]} border rounded-lg p-4`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 text-sm">{label}</p>
          <p className="text-2xl font-bold mt-2">{value}</p>
          {trend && (
            <p className={`text-sm mt-2 ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.isPositive ? '↑' : '↓'} {trend.value}%
            </p>
          )}
        </div>
        {icon && <div className="text-2xl opacity-50">{icon}</div>}
      </div>
    </div>
  )
}
