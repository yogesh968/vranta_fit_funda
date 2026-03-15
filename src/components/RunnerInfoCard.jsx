import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const RunnerInfoCard = ({ data }) => {
  return (
    <div className="panel p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 relative">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 w-full">
        {/* Avatar */}
        <div className="relative">
          <div className="w-20 h-20 rounded-xl bg-indigo-50 flex items-center justify-center border border-indigo-100 shadow-sm">
            <span className="text-indigo-600 font-bold text-2xl tracking-tight">
               {data.runner.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <div className="absolute -bottom-1.5 -right-1.5 bg-white rounded-full p-0.5 shadow-sm">
            <CheckCircle2 size={20} className="text-emerald-500 fill-emerald-100" />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left pt-1">
          <h2 className="text-xl font-bold text-slate-900">{data.runner}</h2>
          <p className="text-sm font-medium text-slate-500 mb-4">Member since Aug 2025</p>
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <div className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-lg shadow-sm">
              <span className="w-2 h-2 rounded-full bg-slate-400"></span>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-widest">{data.challenge}</span>
            </div>
            
            <div className="flex items-center gap-2 border border-indigo-200 bg-indigo-50 px-3 py-1.5 rounded-lg shadow-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span className="text-xs font-semibold text-indigo-700 uppercase tracking-widest">{data.tier} Tier</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-full sm:border-l border-slate-100 sm:pl-6 w-full sm:w-auto mt-4 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0">
        <button 
          onClick={() => alert('Log Activity modal would appear here!')}
          className="w-full sm:w-auto bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm whitespace-nowrap"
        >
          Log Activity
        </button>
        <button 
          onClick={() => alert('Redirecting to Edit Profile...')}
          className="w-full sm:w-auto text-slate-600 hover:text-slate-900 border border-slate-200 bg-white px-5 py-2.5 rounded-lg text-sm font-semibold active:scale-[0.98] transition-all mt-2 whitespace-nowrap hover:bg-slate-50 shadow-sm"
        >
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default RunnerInfoCard
