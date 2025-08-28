import React from 'react';
import { Users, Activity, Database, TrendingUp } from 'lucide-react';

const Overview = () => {
    const metrics = [
        {
            id: 1,
            title: 'People Impacted',
            value: '3B+',
            icon: <Users className="w-6 h-6 text-white" />,
            color: 'bg-blue-600'
        },
        {
            id: 2,
            title: 'Sensors Deployed',
            value: '25,000+',
            icon: <Activity className="w-6 h-6 text-white" />,
            color: 'bg-green-600'
        },
        {
            id: 3,
            title: 'Emissions Monitored',
            value: '25%',
            icon: <Database className="w-6 h-6 text-white" />,
            color: 'bg-orange-600'
        },
        {
            id: 4,
            title: 'Projected Growth',
            value: '5x (2026)',
            icon: <TrendingUp className="w-6 h-6 text-white" />,
            color: 'bg-purple-600'
        },
    ];

    // Example sensor data for 30 countries
    const countries = [
        { name: 'Bangladesh', temperature: 1200, humidity: 1100, airQuality: 900, waterLevel: 800 },
        { name: 'Italy', temperature: 800, humidity: 750, airQuality: 600, waterLevel: 500 },
        { name: 'USA', temperature: 3000, humidity: 2800, airQuality: 2500, waterLevel: 2000 },
        { name: 'Kenya', temperature: 600, humidity: 550, airQuality: 400, waterLevel: 350 },
        { name: 'Brazil', temperature: 1100, humidity: 1000, airQuality: 900, waterLevel: 800 },
        { name: 'India', temperature: 2500, humidity: 2300, airQuality: 2100, waterLevel: 2000 },
        { name: 'China', temperature: 4200, humidity: 4000, airQuality: 3800, waterLevel: 3500 },
        // Add more countries up to 30
    ];

    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Overview</h1>

            {/* Metrics */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {metrics.map((metric) => (
                    <div
                        key={metric.id}
                        className={`flex items-center justify-between p-4 rounded-xl shadow ${metric.color}`}
                    >
                        <div className="flex flex-col text-white">
                            <span className="text-sm">{metric.title}</span>
                            <span className="text-2xl font-bold">{metric.value}</span>
                        </div>
                        <div>{metric.icon}</div>
                    </div>
                ))}
            </div>

            {/* Sensor Data for Countries */}
            <h2 className="text-2xl font-semibold mb-4">Sensor Deployment Across Countries</h2>
            <div className="overflow-x-auto bg-white shadow rounded-xl p-4">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">Country</th>
                            <th className="p-3 text-left">Temperature Sensors</th>
                            <th className="p-3 text-left">Humidity Sensors</th>
                            <th className="p-3 text-left">Air Quality Sensors</th>
                            <th className="p-3 text-left">Water Level Sensors</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country, idx) => (
                            <tr key={idx} className="border-b hover:bg-gray-50">
                                <td className="p-3 font-medium">{country.name}</td>
                                <td className="p-3">{country.temperature}</td>
                                <td className="p-3">{country.humidity}</td>
                                <td className="p-3">{country.airQuality}</td>
                                <td className="p-3">{country.waterLevel}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Overview;
