import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useMemo } from 'react'

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const AdherenceChart = () => {
  const data = useMemo(() => ({
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Adherence %',
        data: [75, 92, 88, 95, 82, 98, 96],
        borderColor: '#3B82F6', // blue
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 4,
        tension: 0.4,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 3,
        pointHoverBackgroundColor: '#ffffff',
        pointHoverBorderColor: '#3B82F6',
        pointRadius: 8,
        pointHoverRadius: 12,
        fill: true,
      },
      {
        label: 'Target',
        data: [90, 90, 90, 90, 90, 90, 90],
        borderColor: '#F59E0B', // orange
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false,
      },
    ],
  }), [])

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 14,
            family: "'Inter', sans-serif",
            weight: '500',
          },
          color: '#64748B',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: '#3B82F6',
        borderWidth: 1.5,
        cornerRadius: 12,
        displayColors: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}%`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
        ticks: {
          color: '#64748B',
          font: {
            family: "'Inter', sans-serif",
          },
          maxTicksLimit: 7,
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          callback: (value) => `${value}%`,
          color: '#64748B',
          font: {
            family: "'Inter', sans-serif",
          },
        },
        grid: {
          color: 'rgba(148, 163, 184, 0.1)',
        },
      },
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  }), [])

  return (
    <div className="h-full">
      <Line data={data} options={options} aria-label="Weekly medication adherence chart showing percentage over 7 days with target line" />
    </div>
  )
}

export default AdherenceChart

