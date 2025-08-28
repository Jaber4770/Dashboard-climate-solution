import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';
import Logo from "../assets/logo.png"
import { Bell, Database, FileChartColumn, HelpCircle, Home, Info, LayoutDashboard, MapPin, Rss, Settings, User, Users } from "lucide-react";
import Sidebar from '../Components/Sidebar';


const DashboardLayout = () => {
    return (
        <div >
            <div className='flex gap-4'>
                <div className="bg-gray-100 min-h-screen p-5 rounded-lg">
                    {/* manu */}
                    <Sidebar></Sidebar>
                    {/* user */}
                    <div className="mt-auto flex items-center gap-2">
                        <User className="w-8 h-8 text-gray-600" />
                        <p>Jack</p>
                    </div>
                </div>
                {/* content */}
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;