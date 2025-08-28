import React from 'react';
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';

const Alert = () => {
    const alerts = [
        { id: 1, message: 'Temperature Sensor Overheating in Dhaka', type: 'Warning', timestamp: '2025-08-28 09:00' },
        { id: 2, message: 'New User Registered - Rome Dashboard', type: 'Info', timestamp: '2025-08-28 08:45' },
        { id: 3, message: 'Humidity Sensor Back Online - Nairobi', type: 'Success', timestamp: '2025-08-28 08:30' },
        { id: 4, message: 'Air Quality Sensor Offline - New York', type: 'Warning', timestamp: '2025-08-28 08:15' },
        { id: 5, message: 'CO₂ Levels Exceed Threshold - Beijing', type: 'Warning', timestamp: '2025-08-28 08:00' },
        { id: 6, message: 'Water Level Sensor Alert - São Paulo', type: 'Warning', timestamp: '2025-08-28 07:50' },
        { id: 7, message: 'New Funding Received for Sensor Expansion', type: 'Info', timestamp: '2025-08-27 18:30' },
        { id: 8, message: 'Temperature Sensor Stabilized - New Delhi', type: 'Success', timestamp: '2025-08-27 17:45' },
        { id: 9, message: 'Humidity Sensor Offline - Rome', type: 'Warning', timestamp: '2025-08-27 16:20' },
        { id: 10, message: 'System Maintenance Completed', type: 'Info', timestamp: '2025-08-27 15:00' },
    ];

    const getIcon = (type) => {
        if (type === 'Success') return <CheckCircle className="w-6 h-6 text-green-600" />;
        if (type === 'Warning') return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
        return <Bell className="w-6 h-6 text-blue-600" />;
    };

    const getBgColor = (type) => {
        if (type === 'Success') return 'bg-green-50';
        if (type === 'Warning') return 'bg-yellow-50';
        return 'bg-blue-50';
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Alerts & Notifications</h1>

            <div className="space-y-4">
                {alerts.map((alert) => (
                    <div
                        key={alert.id}
                        className={`flex items-center justify-between p-4 shadow rounded-lg hover:bg-gray-50 transition ${getBgColor(alert.type)}`}
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
