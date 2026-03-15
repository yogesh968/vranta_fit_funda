import React from 'react'

const RecentAchievements = ({ achievements }) => {
  return (
    <div className="panel p-6 h-full flex flex-col">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Recent Badges</h3>
          <p className="text-sm font-medium text-slate-500 mt-0.5">Latest unlocked</p>
        </div>
        <button 
          onClick={() => alert('Loading full achievements gallery...')}
          className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 active:scale-[0.98] transition-all"
        >
          View All
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-3">
        {achievements.map((badge) => (
          <div 
            key={badge.id} 
            onClick={() => alert(`Viewing badge details: ${badge.title}`)}
            className="flex items-center gap-4 group cursor-pointer p-2 -mx-2 rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all shadow-sm">
              {badge.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{badge.title}</span>
              <span className="text-xs font-semibold text-slate-500 mt-0.5">{badge.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentAchievements
