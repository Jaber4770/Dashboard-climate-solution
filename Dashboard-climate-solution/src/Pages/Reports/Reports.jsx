import React from 'react';
import { Eye, Download, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const Reports = () => {
    const reports = [
        { id: 1, title: 'Global Impact of Dirty Cooking Fuels', status: 'Completed', date: '2025-07-15' },
        { id: 2, title: 'Adoption of Clean Cooking Technologies', status: 'Pending', date: '2025-08-05' },
        { id: 3, title: 'Black Carbon Emissions Analysis', status: 'Completed', date: '2025-08-10' },
        { id: 4, title: 'Sensor Deployment in 30 Countries', status: 'Warning', date: '2025-08-20' },
        { id: 5, title: 'Projected 5x Growth for 2026', status: 'Pending', date: '2025-08-25' },
    ];

    const getStatusIcon = (status) => {
        if (status === 'Completed') return <CheckCircle className="text-green-600 w-5 h-5" />;
        if (status === 'Pending') return <FileText className="text-gray-500 w-5 h-5" />;
        return <AlertTriangle className="text-yellow-600 w-5 h-5" />;
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Reports</h1>
            <div className="overflow-x-auto bg-white shadow rounded-lg">
                <table className="table-auto w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-left">#</th>
                            <th className="p-3 text-left">Title</th>
                            <th className="p-3 text-left">Status</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={report.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{index + 1}</td>
                                <td className="p-3 font-medium">{report.title}</td>
                                <td className="p-3 flex items-center gap-2">
                                    {getStatusIcon(report.status)}
                                    <span>{report.status}</span>
                                </td>
                                <td className="p-3">{report.date}</td>
                                <td className="p-3 flex gap-3">
                                    <button className="text-blue-600 hover:text-blue-800">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                    <button className="text-green-600 hover:text-green-800">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Reports;
