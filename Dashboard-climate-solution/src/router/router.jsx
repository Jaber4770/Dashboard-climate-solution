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
import ProtectedRoute from "./ProtectedRoute";

let isLoggedIn = false;

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login onLogin={() => { isLoggedIn = true; window.location.href = "/overview"; }} />
    },
    {
        path: "/",
        element: (
            <ProtectedRoute isLoggedIn={isLoggedIn}>
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Overview /> },
            { path: "/overview", element: <Overview /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/dashboard/about", element: <About /> },
            { path: "/dashboard/alerts", element: <Alert /> },
            { path: "/dashboard/data", element: <Data /> },
            { path: "/dashboard/help", element: <Help /> },
            { path: "/location", element: <Location /> },
            { path: "/dashboard/reports", element: <Reports /> },
            { path: "/dashboard/sensors", element: <Sensors /> },
            { path: "/dashboard/settings", element: <Settings /> },
            { path: "/dashboard/team", element: <Team /> }
        ]
    }
]);
