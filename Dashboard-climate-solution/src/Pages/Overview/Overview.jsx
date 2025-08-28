import React from 'react';
import { Users, Activity, Database, Bell } from 'lucide-react';

const Overview = () => {
    const metrics = [
        { id: 1, title: 'Total Users', value: 1280, icon: <Users className="w-6 h-6 text-white" />, color: 'bg-blue-500' },
        { id: 2, title: 'Active Sensors', value: 56, icon: <Activity className="w-6 h-6 text-white" />, color: 'bg-green-500' },
        { id: 3, title: 'Data Points', value: 10234, icon: <Database className="w-6 h-6 text-white" />, color: 'bg-orange-500' },
        { id: 4, title: 'Alerts', value: 12, icon: <Bell className="w-6 h-6 text-white" />, color: 'bg-red-500' },
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
