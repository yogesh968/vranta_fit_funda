import React from 'react'

const QuickStatsCard = ({ data }) => {
  const stats = [
    { label: "Avg Pace", value: `${data.pace} /km`, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Calories", value: `${data.calories} kcal`, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Active Days", value: data.active_days, color: "text-green-600", bg: "bg-green-50" }
  ]

  return (
    <div className="panel p-6 h-full flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">Quick Stats</h3>
        <p className="text-sm text-gray-500 mt-1">Overall performance</p>
      </div>

      <div className="flex flex-col gap-3">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-600">{stat.label}</span>
            <div className={`px-2.5 py-1 rounded-md ${stat.bg} ${stat.color} text-sm font-semibold`}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuickStatsCard
