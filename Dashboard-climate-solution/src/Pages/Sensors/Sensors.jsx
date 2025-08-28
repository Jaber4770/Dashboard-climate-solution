import React from 'react';
import { Activity, Wifi, AlertTriangle } from 'lucide-react';

const Sensors = () => {
    // Example static sensor data (can later be fetched from an API)
    const sensors = [
        { id: 1, name: 'Temperature Sensor', status: 'Active', location: 'Building A', lastActive: '2 min ago' },
        { id: 2, name: 'Humidity Sensor', status: 'Inactive', location: 'Building B', lastActive: '10 min ago' },
        { id: 3, name: 'Air Quality Sensor', status: 'Warning', location: 'Building C', lastActive: '1 min ago' },
    ];

    const getStatusIcon = (status) => {
        if (status === 'Active') return <Wifi className="text-green-600" />;
        if (status === 'Inactive') return <Activity className="text-gray-500" />;
        return <AlertTriangle className="text-yellow-600" />;
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Sensors</h1>
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Sensor Name</th>
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
