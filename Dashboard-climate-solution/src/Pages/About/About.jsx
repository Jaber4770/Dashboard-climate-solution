import React from 'react';
import { Users, Activity, Database } from 'lucide-react';

const About = () => {
    const highlights = [
        { title: 'Team Members', value: '12 Professionals', icon: <Users className="w-8 h-8 mr-4 text-white" />, color: 'bg-blue-500' },
        { title: 'Active Sensors', value: '25,000+ Units Globally', icon: <Activity className="w-8 h-8 mr-4 text-white" />, color: 'bg-green-500' },
        { title: 'Data Points', value: 'Millions of Environmental & Energy Records', icon: <Database className="w-8 h-8 mr-4 text-white" />, color: 'bg-orange-500' },
        { title: 'Countries Reached', value: '30+ Countries Worldwide', icon: <Users className="w-8 h-8 mr-4 text-white" />, color: 'bg-purple-500' },
        { title: 'Projects Impacted', value: '100+ Environmental Initiatives', icon: <Activity className="w-8 h-8 mr-4 text-white" />, color: 'bg-teal-500' },
    ];

    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>

            {/* Mission / Description */}
            <div className="bg-white shadow rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
                <p className="text-gray-700 mb-3">
                    Climate Solutions empowers organizations with real-time environmental and energy data.
                    Our sensors are built for the toughest environments and monitor air quality, temperature, humidity,
                    and water usage to provide actionable insights.
                </p>
                <p className="text-gray-700 mb-3">
                    Since winning the Digital Innovation Challenge in Kenya, we have deployed over <strong>25,000 sensors</strong>
                    across <strong>30 countries</strong> in Africa, South East Asia, Latin America, and beyond.
                    This global deployment enables organizations to channel funding toward impactful projects and track environmental impact.
                </p>
                <p className="text-gray-700">
                    We aim for a 5x growth by 2026, expanding our reach and supporting sustainable initiatives worldwide.
                </p>
            </div>

            {/* Dashboard-style Highlights */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mb-8">
                {highlights.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${item.color} flex items-center p-4 rounded-2xl shadow hover:scale-105 transform transition`}
                    >
                        {item.icon}
                        <div>
                            <p className="font-bold text-lg text-white">{item.title}</p>
                            <p className="text-white text-sm">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sensor Types & Global Stats */}
            <div className="bg-white shadow rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-semibold mb-3">Sensor Network Overview</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="p-4 bg-blue-50 rounded-xl shadow text-center">
                        <h3 className="font-semibold mb-1">Temperature Sensors</h3>
                        <p>8,500 deployed units</p>
                        <p className="text-gray-500 text-sm">Monitoring air & industrial environments</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-xl shadow text-center">
                        <h3 className="font-semibold mb-1">Humidity Sensors</h3>
                        <p>6,200 deployed units</p>
                        <p className="text-gray-500 text-sm">Tracking moisture & energy efficiency</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-xl shadow text-center">
                        <h3 className="font-semibold mb-1">Air Quality Sensors</h3>
                        <p>7,800 deployed units</p>
                        <p className="text-gray-500 text-sm">Monitoring CO₂ and black carbon levels</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl shadow text-center">
                        <h3 className="font-semibold mb-1">Water Level Sensors</h3>
                        <p>2,500 deployed units</p>
                        <p className="text-gray-500 text-sm">Tracking usage & supply in critical regions</p>
                    </div>
                </div>
            </div>

            {/* Environmental & Social Impact */}
            <div className="bg-white shadow rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-3">Environmental & Social Impact</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Reducing premature deaths caused by indoor air pollution from dirty fuels.</li>
                    <li>Monitoring 2% of global CO₂ emissions and 25% of black carbon emissions.</li>
                    <li>Providing actionable insights for governments, NGOs, and energy projects.</li>
                    <li>Enabling sustainable growth in challenging regions.</li>
                    <li>Tracking environmental trends to channel funding effectively.</li>
                </ul>
            </div>
        </div>
    );
};

export default About;
