import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from "../assets/logo.png"
import { Bell, Database, FileChartColumn, HelpCircle, Home, Info, LayoutDashboard, MapPin, Rss, Settings, User, Users } from "lucide-react";


const DashboardLayout = () => {
    return (
        <div >
            <div className='flex gap-4'>
                <div className="bg-gray-100 min-h-screen p-5 rounded-lg">
                    <ul className="flex flex-col gap-5">
                        {/* Sidebar content here */}
                        <img src={Logo} alt="Logo" className="w-32 mx-auto mb-4" />
                        <li>
                            <Link to='/' className='flex gap-5'>
                                <Home className="text-3xl text-blue-600" /> Overview
                            </Link>
                        </li>
                        <li>
                            <Link to='/Location' className='flex gap-5'>
                                <MapPin className="text-3xl text-indigo-600" /> Location
                            </Link>
                        </li>
                        <li>
                            <NavLink to='/dashboard' className='flex gap-5'>
                                <LayoutDashboard className="text-3xl text-purple-600" /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Sensors' className='flex gap-5'>
                                <Rss className="text-3xl text-teal-600" /> Sensors
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Data' className='flex gap-5'>
                                <Database className="text-3xl text-orange-600" /> Data
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Team' className='flex gap-5'>
                                <Users className="text-3xl text-pink-600" /> Team
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Reports' className='flex gap-5'>
                                <FileChartColumn className="text-3xl text-pink-600" /> Reports
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Alerts' className='flex gap-5'>
                                <Bell className="text-3xl text-pink-600" /> Alerts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Help' className='flex gap-5'>
                                <HelpCircle className="text-3xl text-pink-600" /> Help
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/About' className='flex gap-5'>
                                <Info className="text-3xl text-pink-600" /> About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/Settings' className='flex gap-5'>
                                <Settings className="text-3xl text-pink-600" /> Settings
                            </NavLink>
                        </li>

                    </ul>
                    <div className="mt-auto flex items-center gap-2">
                        <User className="w-8 h-8 text-gray-600" />
                        <p>Jack</p>
                    </div>
                </div>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;