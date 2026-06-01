/**
 * Peak Hours Chart Component
 * TODO: Implement peak hours bar chart using Recharts
 */

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface HourData {
  hour: number
  count: number
}

interface PeakHoursChartProps {
  data: HourData[]
  height?: number
}

export const PeakHoursChart = ({ data, height = 300 }: PeakHoursChartProps) => {
  return (
    <BarChart width={800} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="hour" label={{ value: 'Hour', position: 'insideBottomRight', offset: -5 }} />
      <YAxis label={{ value: 'Count', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#0ea5e9" />
    </BarChart>
  )
}
