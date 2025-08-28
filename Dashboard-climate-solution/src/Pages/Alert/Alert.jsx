import React from 'react';
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';

const Alert = () => {
    const alerts = [
        { id: 1, message: 'Temperature Sensor Overheating', type: 'Warning', timestamp: '2025-08-28 09:00' },
        { id: 2, message: 'New User Registered', type: 'Info', timestamp: '2025-08-28 08:45' },
        { id: 3, message: 'Humidity Sensor Back Online', type: 'Success', timestamp: '2025-08-28 08:30' },
        { id: 4, message: 'Air Quality Sensor Offline', type: 'Warning', timestamp: '2025-08-28 08:15' },
    ];

    const getIcon = (type) => {
        if (type === 'Success') return <CheckCircle className="w-6 h-6 text-green-600" />;
        if (type === 'Warning') return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
        return <Bell className="w-6 h-6 text-blue-600" />;
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Alerts</h1>

            <div className="space-y-4">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className="flex items-center justify-between p-4 bg-white shadow rounded-lg hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-4">
                            {getIcon(alert.type)}
                            <div>
                                <p className="font-medium">{alert.message}</p>
                                <p className="text-gray-500 text-sm">{alert.timestamp}</p>
                            </div>
                        </div>
                        <button className="text-red-500 hover:text-red-700 font-medium">Dismiss</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alert;
