import React from 'react';
import { Activity, Wifi, AlertTriangle } from 'lucide-react';

const Sensors = () => {
    // Updated sensor data inspired by your description
    const sensors = [
        { id: 1, name: 'Cookstove Sensor', status: 'Active', location: 'Kenya', lastActive: '5 min ago' },
        { id: 2, name: 'Air Quality Monitor', status: 'Active', location: 'Bangladesh', lastActive: '10 min ago' },
        { id: 3, name: 'Fuel Usage Tracker', status: 'Warning', location: 'Uganda', lastActive: '2 min ago' },
        { id: 4, name: 'Black Carbon Sensor', status: 'Active', location: 'Peru', lastActive: '1 min ago' },
        { id: 5, name: 'CO2 Emission Sensor', status: 'Inactive', location: 'India', lastActive: '15 min ago' },
    ];

    const getStatusIcon = (status) => {
        if (status === 'Active') return <Wifi className="text-green-600" />;
        if (status === 'Inactive') return <Activity className="text-gray-500" />;
        return <AlertTriangle className="text-yellow-600" />;
    };

    return (
        <div className="p-6 space-y-8">
            {/* Intro / Context Section */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h1 className="text-3xl font-bold mb-4">Our Sensors</h1>
                <p className="text-gray-700 leading-relaxed">
                    3 billion people still cook with dirty fuel, leading to <span className="font-semibold">4 million premature deaths every year</span>,
                    <span className="font-semibold"> 2% of global CO₂ emissions</span>, and
                    <span className="font-semibold"> 25% of black carbon emissions</span>.
                    Technological solutions exist, but the key question is: are they really adopted, and what is their real impact?
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    At <span className="font-semibold">Climate Solutions</span>, we build rugged sensors to answer these questions
                    and channel funding towards the most impactful projects.
                    After winning the <span className="italic">Digital Innovation Challenge</span> in Kenya,
                    we have scaled to <span className="font-semibold">25,000+ deployed units across 30 countries</span>
                    in Africa, South East Asia, and Latin America.
                    We are now targeting a <span className="font-semibold">5x growth by 2026</span>.
                </p>
            </div>

            {/* Sensors Table */}
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Sensor Type</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Last Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sensors.map((sensor, index) => (
                            <tr key={sensor.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 font-medium">{sensor.name}</td>
                                <td className="p-3">{sensor.location}</td>
                                <td className="p-3 flex items-center gap-2">
                                    {getStatusIcon(sensor.status)}
                                    <span>{sensor.status}</span>
                                </td>
                                <td className="p-3">{sensor.lastActive}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sensors;
