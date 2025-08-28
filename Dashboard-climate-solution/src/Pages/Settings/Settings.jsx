import React from 'react';

const Settings = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>

            {/* Profile Settings Section */}
            <div className="bg-white rounded-xl shadow p-6 mb-8">
                <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
                <form className="grid gap-4 max-w-lg">
                    <div>
                        <label className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Save Changes
                    </button>
                </form>
            </div>

            {/* Account Preferences Section */}
            <div className="bg-white rounded-xl shadow p-6 max-w-lg">
                <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
                <div className="flex items-center justify-between mb-4">
                    <span>Enable Notifications</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                </div>
                <div className="flex items-center justify-between mb-4">
                    <span>Dark Mode</span>
                    <input type="checkbox" className="toggle toggle-primary" />
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default Settings;
