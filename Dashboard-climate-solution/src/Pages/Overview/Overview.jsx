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

    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Overview</h1>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
    );
};

export default Overview;
