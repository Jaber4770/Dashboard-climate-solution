import { createBrowserRouter } from "react-router";
import Overview from "../Pages/Overview/Overview";
import About from "../Pages/About/About";
import Alert from "../Pages/Alert/Alert";
import Login from "../Pages/Auth/Login";
import Data from "../Pages/Data/Data";
import Help from "../Pages/Help/Help";
import Location from "../Pages/Location/Location";
import Reports from "../Pages/Reports/Reports";
import Sensors from "../Pages/Sensors/Sensors";
import Settings from "../Pages/Settings/Settings";
import Team from "../Pages/Team/Team";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/overview',
                element: <Overview></Overview>
            },
            {
                path: '/dashboard/about',
                element: <About></About>
            },
            {
                path: '/dashboard/alerts',
                element: <Alert></Alert>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/data',
                element: <Data></Data>
            },
            {
                path: '/dashboard/help',
                element: <Help></Help>
            },
            {
                path: '/location',
                element: <Location></Location>
            },
            {
                path: '/dashboard/reports',
                element: <Reports></Reports>
            },
            {
                path: '/dashboard/sensors',
                element: <Sensors></Sensors>
            },
            {
                path: '/dashboard/settings',
                element: <Settings></Settings>
            },
            {
                path: '/dashboard/team',
                element: <Team></Team>
            },
        ]
    },
]);