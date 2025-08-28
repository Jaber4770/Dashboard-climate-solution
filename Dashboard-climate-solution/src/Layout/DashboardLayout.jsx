import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import Logo from "../assets/logo.png"
import { Bell, Database, FileChartColumn, HelpCircle, Home, Info, LayoutDashboard, MapPin, Rss, Settings, User, Users } from "lucide-react";
import Sidebar from '../Components/Sidebar';


const DashboardLayout = () => {

    const location = useLocation();

    // Check if current path is /login
    const hideSidebar = location.pathname === '/login';


    return (
        <div>
            <div className="flex gap-4">
                {!hideSidebar && (
                    <div className="bg-gray-100 min-h-screen p-5 rounded-lg flex flex-col justify-between">
                        {/* Sidebar Menu */}
                        <Sidebar />

                        {/* User Info */}
                        <div className="mt-auto flex items-center gap-2">
                            <User className="w-8 h-8 text-gray-600" />
                            <p>Jack</p>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className={`${!hideSidebar ? 'w-full' : 'w-full min-h-screen flex items-center justify-center'}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;