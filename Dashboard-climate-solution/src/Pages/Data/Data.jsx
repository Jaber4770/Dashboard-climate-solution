import React from 'react';

const Data = () => {
    // Sensor data for 4 types of sensors across multiple countries
    const sensors = [
        {
            type: 'Household PM2.5 Sensor',
            records: [
                { country: 'Kenya', value: '75 µg/m³', timestamp: '2025-08-28 09:00' },
                { country: 'India', value: '120 µg/m³', timestamp: '2025-08-28 09:05' },
                { country: 'Peru', value: '65 µg/m³', timestamp: '2025-08-28 09:10' },
                { country: 'Bangladesh', value: '90 µg/m³', timestamp: '2025-08-28 09:15' },
            ],
        },
        {
            type: 'CO2 Emission Sensor',
            records: [
                { country: 'Kenya', value: '1.0 kg/day', timestamp: '2025-08-28 09:00' },
                { country: 'India', value: '1.5 kg/day', timestamp: '2025-08-28 09:05' },
                { country: 'Peru', value: '0.8 kg/day', timestamp: '2025-08-28 09:10' },
                { country: 'Bangladesh', value: '1.2 kg/day', timestamp: '2025-08-28 09:15' },
            ],
        },
        {
            type: 'Black Carbon Monitor',
            records: [
                { country: 'Kenya', value: '25 µg/m³', timestamp: '2025-08-28 09:00' },
                { country: 'India', value: '40 µg/m³', timestamp: '2025-08-28 09:05' },
                { country: 'Peru', value: '20 µg/m³', timestamp: '2025-08-28 09:10' },
                { country: 'Bangladesh', value: '30 µg/m³', timestamp: '2025-08-28 09:15' },
            ],
        },
        {
            type: 'Indoor Air Quality Sensor',
            records: [
                { country: 'Kenya', value: 'Moderate', timestamp: '2025-08-28 09:00' },
                { country: 'India', value: 'Unhealthy', timestamp: '2025-08-28 09:05' },
                { country: 'Peru', value: 'Good', timestamp: '2025-08-28 09:10' },
                { country: 'Bangladesh', value: 'Moderate', timestamp: '2025-08-28 09:15' },
            ],
        },
    ];

    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Environmental Data Records by Sensor</h1>

            {sensors.map((sensor, idx) => (
                <div key={idx} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{sensor.type}</h2>
                    <div className="overflow-x-auto bg-white shadow rounded-lg">
                        <table className="table-auto w-full border-collapse">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="p-3 text-left">#</th>
                                    <th className="p-3 text-left">Country</th>
                                    <th className="p-3 text-left">Value</th>
                                    <th className="p-3 text-left">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sensor.records.map((record, index) => (
                                    <tr key={index} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{index + 1}</td>
                                        <td className="p-3 font-medium">{record.country}</td>
                                        <td className="p-3">{record.value}</td>
                                        <td className="p-3">{record.timestamp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Data;
