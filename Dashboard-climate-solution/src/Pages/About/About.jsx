import React from 'react';
import { Users, Activity, Database } from 'lucide-react';

const About = () => {
    return (
        <div className="p-6 w-full">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>

            {/* Company / Project Description */}
            <div className="bg-white shadow rounded-xl p-6 mb-8">
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="text-gray-700">
                    We aim to provide real-time climate and sensor data to help organizations monitor their environments efficiently.
                    Our dashboard integrates advanced analytics, reporting, and alert systems to ensure timely and actionable insights.
                </p>
            </div>

            {/* Key Highlights */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center p-4 bg-blue-500 text-white rounded-xl shadow">
                    <Users className="w-8 h-8 mr-4" />
                    <div>
                        <p className="font-bold text-lg">Team Members</p>
                        <p>12 Professionals</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-green-500 text-white rounded-xl shadow">
                    <Activity className="w-8 h-8 mr-4" />
                    <div>
                        <p className="font-bold text-lg">Active Sensors</p>
                        <p>56 Sensors</p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-orange-500 text-white rounded-xl shadow">
                    <Database className="w-8 h-8 mr-4" />
                    <div>
                        <p className="font-bold text-lg">Data Points</p>
                        <p>10,234 Records</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
