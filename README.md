# Climate Solutions Dashboard

A real-time environmental monitoring dashboard that integrates global sensor data, analytics, and reporting. Designed for NGOs, governments, and organizations to track environmental impact, energy usage, and air quality across multiple regions.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Climate Solutions Dashboard provides:

- Real-time monitoring of environmental and energy metrics.
- Global sensor tracking across 30+ countries with over 25,000 active units.
- Data visualization for sensor activity, air quality, CO₂ emissions, and alerts.
- Analytics and reporting for actionable insights.
- Dashboard designed for organizations to manage environmental projects efficiently.

---

## Features

### Global Overview
- Total users, active sensors, data points, alerts, countries reached, and projects impacted.

### Sensors
- Displays temperature, humidity, air quality, and water level sensors.
- Real-time status (active, inactive, warning) and location information.
- Global deployment visualization on interactive map using **React-Leaflet**.

### Reports
- View, download, and track reports with status indicators.
- Supports multiple report types including climate, air quality, water usage, and sensor performance.

### Alerts
- Real-time alerts for sensor events and user activity.
- Supports warning, info, and success notifications with timestamps.
- Option to dismiss alerts.

### Data Records
- Table of sensor readings including value, location, and timestamp.
- Supports multiple sensor types across different countries.

### Help & Support
- FAQ section with collapsible answers.
- Contact form for direct support.
- Provides email and phone contact info.

### About Us
- Mission statement and organizational impact.
- Highlights global deployments, sensor types, and environmental impact metrics.
- Dashboard-friendly layout with cards and statistics.

### Dashboard Charts
- Sensor Activity Over Time
- Air Quality & CO₂ Emissions Trends
- Alerts Summary & Notifications
- Environmental Impact Metrics

---

## Technologies

- **Frontend:** React.js, Tailwind CSS, React-Leaflet
- **Charts:** Recharts (or Chart.js if implemented)
- **Icons:** Lucide React
- **Map:** Leaflet with OpenStreetMap tiles
- **State Management:** React hooks (useState, useEffect)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/climate-dashboard.git
