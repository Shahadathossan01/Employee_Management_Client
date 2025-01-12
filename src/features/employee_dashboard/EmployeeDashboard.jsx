import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { EmployeeProvider } from "./EmployeeProvider";
import { useEmployee } from "./hooks/useEmployee";
import Header from "./components/Header";
import FilterItems from "./components/FilterItems";
import ItemsCard from "./components/ItemsCard";
import { calculateTaskTotals, filterTasks } from "./utils";

const EmployeeDashboard = () => (
    <EmployeeProvider>
        <EmployeeDashboardContent />
    </EmployeeProvider>
);

export default EmployeeDashboard;

const EmployeeDashboardContent = () => {
    const { getAssignedTask, state } = useEmployee();
    const { user } = useAuth();
    const [filterValue,setFilterValue]=useState({new_task:true})
    
    useEffect(() => {
        if (user?._id) {
            getAssignedTask({ id: user._id });
        }
    }, [state.updateTask]);
    const handleFilterValue=(value)=>{
        setFilterValue(value)
    }
    const filterTask=filterTasks({tasks:state?.employeeTasks,filterValue})
    const tasksTotal=calculateTaskTotals(state?.employeeTasks)

    return (
        <div>
            <h1 className="text-center font-bold text-xl mt-5">Employee Dashboard</h1>
            <Header />
            <FilterItems filterValue={filterValue} tasksTotal={tasksTotal} handleFilterValue={handleFilterValue} />
            <div className="bg-slate-100 p-3 flex gap-4 flex-wrap justify-center items-center md:items-start space-y-4 md:space-y-0">
            {
            filterTask.length === 0 ? (
                <h1 className="text-lg md:text-2xl lg:text-4xl font-bold    text-center text-gray-600">
                    There is no task here!
                </h1>
            ) : (
            filterTask?.map((item) => (
            <ItemsCard filterValue={filterValue} key={item._id} item={item} />
            ))
            )
            }

            </div>
        </div>
    );
};

EmployeeDashboardContent.displayName = "EmployeeDashboardContent";
