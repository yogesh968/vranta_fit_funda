import React, { useState } from 'react'

const WeeklyActivityChart = ({ weeklyRuns }) => {
  const [viewMode, setViewMode] = useState('distance')
  
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const extendedRuns = [...weeklyRuns, 12, 15]; 
  const mockTime = [25, 40, 0, 30, 35, 60, 75]; 

  const activeData = viewMode === 'distance' ? extendedRuns : mockTime;
  const unit = viewMode === 'distance' ? 'km' : 'min';
  
  const maxVal = Math.max(...activeData, 1);
  
  return (
    <div className="panel p-6 flex flex-col">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">Activity Overview</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">Daily performance metrics</p>
        </div>
        
        <div className="flex p-1 bg-slate-100 rounded-lg self-start sm:self-auto border border-slate-200/60">
          <button 
            onClick={() => setViewMode('distance')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all active:scale-[0.98] ${viewMode === 'distance' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Distance
          </button>
          <button 
            onClick={() => setViewMode('time')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all active:scale-[0.98] ${viewMode === 'time' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Time
          </button>
        </div>
      </div>

      <div className="flex items-end justify-between gap-2 h-[200px] mt-4">
        {activeData.map((val, idx) => {
          const heightPercent = (val / maxVal) * 100;
          const isMax = val === maxVal;
          const isWeekend = idx >= 5;
          
          return (
            <div key={idx} className="flex flex-col items-center gap-3 w-full group relative h-full justify-end">
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all flex flex-col items-center z-10 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                 <span className="text-xs font-bold text-slate-900 bg-white px-3 py-1.5 rounded-lg shadow-md border border-slate-200 whitespace-nowrap">
                   {val} {unit}
                 </span>
              </div>

              <div className="w-full h-[150px] flex items-end bg-slate-50/50 rounded-t-sm">
                <div 
                  className={`w-full rounded-t-sm transition-all duration-500 ease-out flex-shrink-0
                    ${val === 0 ? 'bg-transparent' : 
                      isMax ? 'bg-indigo-500 shadow-sm' : 
                      'bg-slate-200 group-hover:bg-indigo-400 group-hover:shadow-sm'}`}
                  style={{ height: `${heightPercent}%` }}
                ></div>
              </div>

              <span className={`text-xs font-semibold mt-1 ${isWeekend ? 'text-slate-400' : 'text-slate-500'}`}>
                {days[idx]}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default WeeklyActivityChart
