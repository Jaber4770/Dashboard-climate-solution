import React from 'react';
import { Lock, User } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Username</label>
                        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring focus-within:ring-blue-200">
                            <User className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                                type="text"
                                placeholder="Enter your username"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Password</label>
                        <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring focus-within:ring-blue-200">
                            <Lock className="w-5 h-5 text-gray-400 mr-2" />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-full outline-none"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-gray-500">
                    Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
