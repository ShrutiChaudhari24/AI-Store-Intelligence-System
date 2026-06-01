/**
 * Heatmap Chart Component
 * TODO: Implement heatmap visualization for store layout
 */

interface HeatmapChartProps {
  data: number[][]
  width?: number
  height?: number
}

export const HeatmapChart = ({ data, width = 800, height = 600 }: HeatmapChartProps) => {
  const cellWidth = width / (data[0]?.length || 1)
  const cellHeight = height / data.length

  const getColor = (value: number, max: number) => {
    const intensity = value / max
    if (intensity < 0.2) return '#e0f2fe'
    if (intensity < 0.4) return '#bae6fd'
    if (intensity < 0.6) return '#7dd3fc'
    if (intensity < 0.8) return '#38bdf8'
    return '#0284c7'
  }

  const max = Math.max(...data.flat())

  return (
    <svg width={width} height={height} className="border border-gray-300 rounded">
      {data.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <rect
            key={`${rowIndex}-${colIndex}`}
            x={colIndex * cellWidth}
            y={rowIndex * cellHeight}
            width={cellWidth}
            height={cellHeight}
            fill={getColor(value, max)}
            stroke="#f0f0f0"
          />
        ))
      )}
    </svg>
  )
}
