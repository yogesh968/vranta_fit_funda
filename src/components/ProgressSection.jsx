import React, { useEffect, useState } from 'react'
import CircularProgress from './CircularProgress'

const ProgressSection = ({ targetDistance, completedDistance }) => {
  const [barWidth, setBarWidth] = useState(0)
  const remaining = Math.max(0, targetDistance - completedDistance)
  const percentage = Math.min(100, (completedDistance / targetDistance) * 100)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBarWidth(percentage)
    }, 100)
    return () => clearTimeout(timeout)
  }, [percentage])

  return (
    <div className="panel p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-slate-900">Challenge Progress</h3>
          <p className="text-sm font-medium text-slate-500 mt-1">Distance tracking towards goal</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        <div className="flex-shrink-0">
          <CircularProgress percentage={percentage} size={140} strokeWidth={10} />
        </div>

        <div className="flex-1 w-full flex flex-col justify-center">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completed</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900">{completedDistance}</span>
                <span className="text-sm font-semibold text-slate-500">km</span>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Remaining</span>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold text-slate-900">{remaining}</span>
                <span className="text-sm font-semibold text-slate-500">km</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-semibold text-slate-500">0 km</span>
              <span className="text-xs font-semibold text-slate-900">Target: {targetDistance} km</span>
            </div>
            
            <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${barWidth}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProgressSection
