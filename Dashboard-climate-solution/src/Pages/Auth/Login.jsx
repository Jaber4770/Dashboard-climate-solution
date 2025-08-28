import React, { useState } from 'react';
import { Lock, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (username === 'admin' && password === '123456') {
            localStorage.setItem('isLoggedIn', 'true'); // save login state
            navigate('/overview'); // navigate to overview page
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-xl p-12 w-full max-w-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-gray-700 text-base mb-2">Username</label>
                        <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring focus-within:ring-blue-200">
                            <User className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full text-base outline-none"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 text-base mb-2">Password</label>
                        <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring focus-within:ring-blue-200">
                            <Lock className="w-5 h-5 text-gray-400 mr-3" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full text-base outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg text-base hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                    <p className='text-gray-400'>username: admin and password: 123456</p>
                </form>

                <p className="mt-5 text-center text-gray-500 text-base">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
