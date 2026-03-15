import React from 'react'
import RunnerInfoCard from './RunnerInfoCard'
import ProgressSection from './ProgressSection'
import WeeklyActivityChart from './WeeklyActivityChart'
import LeaderboardCard from './LeaderboardCard'
import QuickStatsCard from './QuickStatsCard'
import RecentAchievements from './RecentAchievements'
import { Medal, Sunrise, Flame, Share, RefreshCw, Calendar } from 'lucide-react'

const mockData = {
  runner: "Rahul Sharma",
  challenge: "IRL Season 1",
  tier: "RoadWarrior",
  target_distance: 100,
  completed_distance: 62,
  weekly_runs: [5, 8, 0, 6, 7],
  rank: 18,
  top_runner: 124,
  next_rank: 3,
  
  pace: "5:30",
  calories: 4200,
  active_days: 12,
  achievements: [
    { id: 1, title: "10K Finisher", date: "2 days ago", icon: <Medal strokeWidth={1.5} className="w-5 h-5 text-indigo-600" /> },
    { id: 2, title: "Early Bird", date: "1 week ago", icon: <Sunrise strokeWidth={1.5} className="w-5 h-5 text-orange-500" /> },
    { id: 3, title: "Perfect Week", date: "2 weeks ago", icon: <Flame strokeWidth={1.5} className="w-5 h-5 text-rose-500" /> }
  ]
}

const Dashboard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Performance Overview</h1>
          <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
            <Calendar size={14} className="text-slate-400" />
            Season 1 • August 2025
          </p>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button 
            onClick={() => alert('Dashboard link copied to clipboard!')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all shadow-sm"
          >
            <Share size={16} />
            Share
          </button>
          <button 
            onClick={() => alert('Syncing latest data from wearable device...')}
            className="flex items-center gap-2 text-sm font-semibold text-white bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-sm"
          >
            <RefreshCw size={16} />
            Sync Device
          </button>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <RunnerInfoCard data={mockData} />
          <ProgressSection 
            targetDistance={mockData.target_distance} 
            completedDistance={mockData.completed_distance} 
          />
          <WeeklyActivityChart weeklyRuns={mockData.weekly_runs} />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <QuickStatsCard data={mockData} />
          <LeaderboardCard data={mockData} />
          <RecentAchievements achievements={mockData.achievements} />
        </div>

      </div>
    </div>
  )
}

export default Dashboard
