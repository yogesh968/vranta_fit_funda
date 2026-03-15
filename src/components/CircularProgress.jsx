import React, { useEffect, useState } from 'react'

const CircularProgress = ({ percentage, size, strokeWidth }) => {
  const [offset, setOffset] = useState(0)
  const center = size / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    const progressOffset = circumference - (percentage / 100) * circumference
    const timeout = setTimeout(() => {
      setOffset(progressOffset)
    }, 100)
    return () => clearTimeout(timeout)
  }, [percentage, circumference])

  return (
    <div className="relative flex items-center justify-center p-2" style={{ width: size, height: size }}>
      <svg
        className="-rotate-90 transform relative z-10"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#F1F5F9" /* slate-100 */
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#4F46E5" /* indigo-600 */
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out drop-shadow-sm"
          style={{ transitionProperty: 'stroke-dashoffset' }}
        />
      </svg>
      
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-bold text-slate-900 tracking-tight">
          {percentage.toFixed(0)}<span className="text-base text-slate-500 font-semibold ml-0.5">%</span>
        </span>
      </div>
    </div>
  )
}
export default CircularProgress
