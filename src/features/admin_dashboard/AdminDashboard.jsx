import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { AdminProvider } from "./AdminProvider";
import { useAdminTask } from "./hooks/useAdminTask";
import AdminHeader from "./components/AdminHeader";
import AllUsers from "./components/AllUsers";
import TaskDelegation from "./components/TaskDelegation";

const AdminDashboard = () => {
    return (
        <AdminProvider>
            <AdminDashboardContent></AdminDashboardContent>
        </AdminProvider>
    );
};

export default AdminDashboard;
const AdminDashboardContent = () => {
    return (
        <div className="p-4">
            <AdminHeader></AdminHeader>
            <AllUsers></AllUsers>
            <TaskDelegation></TaskDelegation>
        </div>
    );
};

AdminDashboardContent.displayname=AdminDashboardContent;