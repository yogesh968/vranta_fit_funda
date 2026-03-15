# FitFunda Performance Dashboard

A modern, highly responsive, and interactive performance tracking dashboard built with React and Vite. This project provides a clean, premium, and dynamic interface for visualizing fitness activity, tracking challenge progress, and managing runner profiles.

## ✨ Features

- **Runner Profile Management**: Displays runner details, current challenge tier, and membership status with interactive profile editing and activity logging actions.
- **Dynamic Circular Progress**: A custom-built SVG circular progress bar with smooth CSS-based animations to visualize distance tracked vs. target goal.
- **Interactive Activity Chart**: A toggleable weekly overview chart allowing users to seamlessly switch between "Distance" and "Time" metrics.
- **Global Leaderboard & Stats**: Live standings, dynamic next-rank distance tracking, and quick insights into pace, calorie burn, and active days.
- **Gamified Achievements System**: A beautifully designed recent badges section with interactive micro-animations and tactile hover states.
- **Fully Responsive Layout**: An adaptive CSS Grid & Flexbox architecture that scales perfectly from large widescreen monitors down to mobile devices without compromising aesthetics.
- **Premium UI/UX Quality**: Uses modern design tokens, subtle shadows, glass-like styling, and custom SVG icons (powered by `lucide-react`) for a sophisticated look.

## 🗂️ Project Structure

The UI is logically organized into modular React components under `src/components`:

- \`Dashboard.jsx\` - The main grid layout and data container wrapping all other pieces.
- \`RunnerInfoCard.jsx\` - The top-left header profile card with active call-to-action buttons.
- \`ProgressSection.jsx\` - The challenge distance tracker alongside the animated circular SVG component.
- \`CircularProgress.jsx\` - The underlying smooth-animating SVG ring for visualizing percentage completion.
- \`WeeklyActivityChart.jsx\` - The bar chart displaying daily activity patterns with interactive view toggles.
- \`LeaderboardCard.jsx\` - Summary of global rankings and distance needed to rank up.
- \`QuickStatsCard.jsx\` - Small badge-like summaries (Pace, Calories, Active Days).
- \`RecentAchievements.jsx\` - A gallery of unlocked gamification badges with tactile push interactions.

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yogesh968/vranta_fit_funda.git
   cd fitfunda
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to see the application running.

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (with custom utility classes in `index.css`)
- **Icons**: Lucide React 

## 🎨 Design Philosophy

This dashboard strictly adheres to modern web design principles:
- **Tactile Responses**: All buttons and actionable elements execute a subtle scale down (`active:scale-[0.98]`) to mimic realistic physical buttons.
- **Refined Colors**: Strategic use of Indigo and Slate palettes rather than generic defaults to achieve a professional administrative feel.
- **Spatial Consistency**: Uniform padding and rhythm enforced through global CSS grid and flex configurations.

## 🤝 Contribution

Feel free to open an issue or submit a pull request if you want to help improve the dashboard functionality or UI!
