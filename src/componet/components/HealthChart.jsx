import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const HealthChart = ({ data, dataKey }) => {
  const gradientOffset = () => {
    const dataMax = Math.max(...data.map((entry) => entry[dataKey]));
    return dataMax;
  };

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <defs>
            <linearGradient id="trendColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="date" axisLine={false} tickLine={false} tickMargin={12} fontSize={12} />
          <YAxis axisLine={false} tickLine={false} tickMargin={12} fontSize={12} />
          <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #e2e8f0', borderRadius: '12px' }} />
          <Line type="monotone" dataKey={dataKey} stroke="url(#trendColor)" strokeWidth={4} dot={{ fill: '#3b82f6', strokeWidth: 2 }} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default HealthChart;

