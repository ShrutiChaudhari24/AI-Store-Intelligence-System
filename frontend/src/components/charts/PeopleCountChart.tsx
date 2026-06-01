/**
 * People Count Chart Component
 * TODO: Implement people count line chart using Recharts
 */

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

interface DataPoint {
  timestamp: string
  count: number
}

interface PeopleCountChartProps {
  data: DataPoint[]
  height?: number
}

export const PeopleCountChart = ({ data, height = 300 }: PeopleCountChartProps) => {
  return (
    <LineChart width={800} height={height} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#0ea5e9" strokeWidth={2} />
    </LineChart>
  )
}
