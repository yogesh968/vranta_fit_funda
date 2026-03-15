# FitFunda Performance Dashboard

A responsive and interactive **fitness performance dashboard** built
using **React and Vite**.\
The dashboard helps visualize user activity, track challenge progress,
and manage runner profiles through a clean and modern interface.

------------------------------------------------------------------------

# Features

## Runner Profile Management

Displays runner information including challenge tier and membership
status.\
Includes actions for editing profiles and logging activities.

## Circular Progress Tracking

Custom SVG-based circular progress component used to visualize
**distance tracked vs target goal** with smooth animations.

## Weekly Activity Chart

Interactive weekly chart that allows users to toggle between: -
Distance - Time

## Leaderboard and Statistics

Shows global rankings along with: - Distance required to reach the next
rank - Quick performance insights such as pace, calories burned, and
active days.

## Achievements System

Displays recently unlocked badges with interactive hover effects.

## Responsive Layout

The UI uses **CSS Grid and Flexbox** to ensure the layout adapts across
devices including desktops, tablets, and mobile screens.

## Modern UI Design

The interface includes: - subtle shadows - glass-style components -
custom icons from `lucide-react`

------------------------------------------------------------------------

# Project Structure

The application is divided into reusable React components located in
`src/components`.

    src/
     ├── components/
     │   ├── Dashboard.jsx
     │   ├── RunnerInfoCard.jsx
     │   ├── ProgressSection.jsx
     │   ├── CircularProgress.jsx
     │   ├── WeeklyActivityChart.jsx
     │   ├── LeaderboardCard.jsx
     │   ├── QuickStatsCard.jsx
     │   └── RecentAchievements.jsx

## Component Overview

**Dashboard.jsx**\
Main layout component that organizes the dashboard grid and integrates
all sections.

**RunnerInfoCard.jsx**\
Displays runner profile information and action buttons.

**ProgressSection.jsx**\
Shows challenge progress with the circular progress component.

**CircularProgress.jsx**\
SVG component used to render animated progress rings.

**WeeklyActivityChart.jsx**\
Bar chart showing weekly activity data with toggle controls.

**LeaderboardCard.jsx**\
Displays global ranking and distance required to move up.

**QuickStatsCard.jsx**\
Small statistic cards showing pace, calories, and active days.

**RecentAchievements.jsx**\
Displays recently unlocked badges.

------------------------------------------------------------------------

# Getting Started

## Prerequisites

Install **Node.js** on your system.

https://nodejs.org/

------------------------------------------------------------------------

## Installation

Clone the repository

``` bash
git clone https://github.com/yogesh968/vranta_fit_funda.git
cd fitfunda
```

Install dependencies

``` bash
npm install
```

Start the development server

``` bash
npm run dev
```

Open the application

http://localhost:5173

------------------------------------------------------------------------

# Technology Stack

  Technology     Usage
  -------------- ---------------------------
  React 18       Frontend framework
  Vite           Build tool and dev server
  Tailwind CSS   Styling
  Lucide React   Icons

------------------------------------------------------------------------

# Design Principles

## Responsive Design

Built using flexible layout systems to support multiple screen sizes.

## Component-Based Architecture

The UI is structured into reusable components to improve
maintainability.

## Clean Visual Hierarchy

Consistent spacing, typography, and color usage ensure readability and
usability.

------------------------------------------------------------------------

# Contribution

Contributions are welcome.\
You can open an issue or submit a pull request to improve the dashboard.
