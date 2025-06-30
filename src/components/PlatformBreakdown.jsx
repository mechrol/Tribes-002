import React from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const PlatformBreakdown = () => {
  const data = {
    labels: ['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'TikTok'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          '#E4405F',
          '#1DA1F2',
          '#4267B2',
          '#0077B5',
          '#000000',
        ],
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'rgba(255, 255, 255, 0.8)',
          padding: 20,
          usePointStyle: true,
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.parsed + '%'
          }
        }
      }
    }
  }

  return (
    <div className="glass p-6">
      <h3 className="text-xl font-bold text-white mb-6">Platform Breakdown</h3>
      <div className="h-64">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default PlatformBreakdown
