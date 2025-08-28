import React from 'react';

const Settings = () => {
    return (
        <div className="min-h-screen  p-6 flex justify-center">
            <div className="w-full max-w-3xl">
                <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
                    ⚙️ Settings
                </h1>

                {/* Profile Settings Section */}
                <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl shadow-xl p-8 mb-10">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Profile Settings
                    </h2>
                    <form className="grid gap-6">
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium mb-2">Password</label>
                            <input
                                type="password"
                                placeholder="Enter new password"
                                className="w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition"
                        >
                            Save Changes
                        </button>
                    </form>
                </div>

                {/* Account Preferences Section */}
                <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl shadow-xl p-8">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                        Account Preferences
                    </h2>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-gray-700 font-medium">Enable Notifications</span>
                        <input type="checkbox" className="toggle toggle-primary" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-gray-700 font-medium">Dark Mode</span>
                        <input type="checkbox" className="toggle toggle-primary" />
                    </div>
                    <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition">
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
