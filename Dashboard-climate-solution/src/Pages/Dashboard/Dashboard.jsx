import React from 'react';
import { Users, Activity, Database, Bell, Globe, TrendingUp, Thermometer, Droplet } from 'lucide-react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';

const Dashboard = () => {
    const stats = [
        { id: 1, title: 'Total Users', value: 1520, icon: <Users className="w-6 h-6 text-white" />, color: 'bg-blue-500' },
        { id: 2, title: 'Active Sensors', value: 24560, icon: <Activity className="w-6 h-6 text-white" />, color: 'bg-green-500' },
        { id: 3, title: 'Data Points Collected', value: '1.2M', icon: <Database className="w-6 h-6 text-white" />, color: 'bg-orange-500' },
        { id: 4, title: 'Alerts Triggered', value: 128, icon: <Bell className="w-6 h-6 text-white" />, color: 'bg-red-500' },
    ];

    // Sample chart data
    const sensorData = [
        { time: 'Jan', active: 200, inactive: 50 },
        { time: 'Feb', active: 400, inactive: 100 },
        { time: 'Mar', active: 350, inactive: 80 },
        { time: 'Apr', active: 500, inactive: 120 },
        { time: 'May', active: 600, inactive: 150 },
        { time: 'Jun', active: 700, inactive: 200 },
    ];

    const airData = [
        { month: 'Jan', CO2: 30, AQI: 80 },
        { month: 'Feb', CO2: 25, AQI: 75 },
        { month: 'Mar', CO2: 20, AQI: 70 },
        { month: 'Apr', CO2: 18, AQI: 65 },
        { month: 'May', CO2: 15, AQI: 60 },
        { month: 'Jun', CO2: 12, AQI: 55 },
    ];

    const alertData = [
        { type: 'Critical', count: 20 },
        { type: 'Warning', count: 50 },
        { type: 'Info', count: 58 },
    ];

    const impactData = [
        { country: 'Kenya', sensors: 5000 },
        { country: 'India', sensors: 8000 },
        { country: 'Brazil', sensors: 7000 },
        { country: 'Vietnam', sensors: 5000 },
    ];

    const COLORS = ['#FF6384', '#FFCE56', '#36A2EB'];

    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {stats.map((stat) => (
                    <div
                        key={stat.id}
                        className={`flex items-center justify-between p-4 rounded-xl shadow ${stat.color}`}
                    >
                        <div className="flex flex-col text-white">
                            <span className="text-sm">{stat.title}</span>
                            <span className="text-2xl font-bold">{stat.value}</span>
                        </div>
                        <div>{stat.icon}</div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                {/* Sensor Activity Line Chart */}
                <div className="bg-white shadow rounded-xl p-6 h-80">
                    <h2 className="text-lg font-semibold mb-4">Sensor Activity Over Time</h2>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart data={sensorData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="time" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="active" stroke="#4ade80" />
                            <Line type="monotone" dataKey="inactive" stroke="#f87171" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Air Quality & CO2 Bar Chart */}
                <div className="bg-white shadow rounded-xl p-6 h-80">
                    <h2 className="text-lg font-semibold mb-4">Air Quality & CO₂ Emissions</h2>
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={airData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="CO2" fill="#facc15" />
                            <Bar dataKey="AQI" fill="#22c55e" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Alerts Pie Chart */}
                <div className="bg-white shadow rounded-xl p-6 h-80">
                    <h2 className="text-lg font-semibold mb-4">Alerts Summary</h2>
                    <ResponsiveContainer width="100%" height="90%">
                        <PieChart>
                            <Pie
                                data={alertData}
                                dataKey="count"
                                nameKey="type"
                                cx="50%"
                                cy="50%"
                                outerRadius={70}
                                fill="#8884d8"
                                label
                            >
                                {alertData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Environmental Impact Bar Chart */}
                <div className="bg-white shadow rounded-xl p-6 h-80">
                    <h2 className="text-lg font-semibold mb-4">Sensors Deployed Per Country</h2>
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart data={impactData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="country" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="sensors" fill="#3b82f6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
