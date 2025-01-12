import { useEffect } from "react";
import { useAdminTask } from "../hooks/useAdminTask";
import TasksTableBodyItem from "./TasksTableBodyItem";

const TasksTable = () => {
    const {getAllTasks,state}=useAdminTask()

    useEffect(()=>{
        getAllTasks()
    },[state.createNewTask,state.updateTask,state.deleteTask])
    return (
        <table  className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
                <tr>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Title</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Description</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Assigned To</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Status</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Published</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Deadline</th>
                    <th className="px-4 py-2 border border-gray-300 text-left text-sm font-medium text-gray-600">Actions</th>
                </tr>
            </thead>
            <tbody>
            {state.loading ? (
            <tr>
              <td colSpan="100%" className="text-center py-4">
                <h1>Loading...</h1>
              </td>
            </tr>
          ) : (
            state?.tasks.length==0?
            <tr>
              <td colSpan="100%" className="text-center py-4">
                <h1>There is no task here!</h1>
              </td>
            </tr>
            :
            state?.tasks.map((item) => (
              <TasksTableBodyItem allUsers={state?.users} key={item._id} item={item}></TasksTableBodyItem>
            ))
          )}
            </tbody>
        </table>
    );
};

export default TasksTable;