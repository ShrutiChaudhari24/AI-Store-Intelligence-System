/**
 * Loader Component
 * TODO: Implement loading spinner
 */

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'
  message?: string
}

export const Loader = ({ size = 'medium', message }: LoaderProps) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary-600 rounded-full animate-spin`} />
      {message && <p className="mt-4 text-gray-600">{message}</p>}
    </div>
  )
}
