import React from 'react';
import {
    Bell,
    Database,
    FileChartColumn,
    HelpCircle,
    Home,
    Info,
    LayoutDashboard,
    MapPin,
    Rss,
    Settings,
    Users
} from "lucide-react";
import { Link, NavLink } from 'react-router';
import Logo from "../assets/logo.png";

const Sidebar = () => {
    const activeClass = "bg-gray-200 rounded-lg"; // background when active

    return (
        <div className="p-5">
            <ul className="flex flex-col gap-2">
                <img src={Logo} alt="Logo" className="w-32 mx-auto mb-6" />

                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Home className="text-3xl text-blue-600" /> Overview
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/location'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <MapPin className="text-3xl text-indigo-600" /> Location
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <LayoutDashboard className="text-3xl text-purple-600" /> Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/sensors'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Rss className="text-3xl text-teal-600" /> Sensors
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/data'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Database className="text-3xl text-orange-600" /> Data
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/team'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Users className="text-3xl text-pink-600" /> Team
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/reports'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <FileChartColumn className="text-3xl text-pink-600" /> Reports
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/alerts'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Bell className="text-3xl text-pink-600" /> Alerts
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/help'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <HelpCircle className="text-3xl text-pink-600" /> Help
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/about'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Info className="text-3xl text-pink-600" /> About
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to='/dashboard/settings'
                        className={({ isActive }) => `flex items-center gap-5 p-3 ${isActive ? activeClass : ''}`}
                    >
                        <Settings className="text-3xl text-pink-600" /> Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
