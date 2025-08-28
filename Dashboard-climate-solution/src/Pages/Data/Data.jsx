import React from 'react';

const Data = () => {
    // Example static data (replace with API or state later)
    const records = [
        { id: 1, sensor: 'Temperature Sensor', value: '23°C', location: 'Building A', timestamp: '2025-08-28 09:00' },
        { id: 2, sensor: 'Humidity Sensor', value: '45%', location: 'Building B', timestamp: '2025-08-28 09:05' },
        { id: 3, sensor: 'Air Quality Sensor', value: 'Good', location: 'Building C', timestamp: '2025-08-28 09:10' },
        { id: 4, sensor: 'Water Level Sensor', value: '80%', location: 'Building D', timestamp: '2025-08-28 09:15' },
    ];

    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">Data Records</h1>

            <div className="overflow-x-auto w-full bg-white shadow rounded-lg">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Sensor</th>
                            <th className="p-3 text-left">Value</th>
                            <th className="p-3 text-left">Location</th>
                            <th className="p-3 text-left">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record, index) => (
                            <tr key={record.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 font-medium">{record.sensor}</td>
                                <td className="p-3">{record.value}</td>
                                <td className="p-3">{record.location}</td>
                                <td className="p-3">{record.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Data;
