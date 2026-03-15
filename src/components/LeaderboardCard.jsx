import React from 'react'

const LeaderboardCard = ({ data }) => {
  return (
    <div className="panel p-6">
      <div className="mb-5">
        <h3 className="text-base font-bold text-slate-900">Global Ranking</h3>
        <p className="text-sm font-medium text-slate-500 mt-0.5">Your current standing</p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-end justify-between pb-5 border-b border-slate-100">
          <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Current Rank</span>
          <span className="text-3xl font-bold text-indigo-600">
            #{data.rank}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Runner</span>
            <span className="text-lg font-bold text-slate-900">{data.top_runner} km</span>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Rank Dist.</span>
            <span className="text-lg font-bold text-slate-900">{data.next_rank} km</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardCard
