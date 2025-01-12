import { format } from "date-fns";
import { useState } from "react";
import TaskDelegateModal from "./TaskDelegationModal";
import { useAdminTask } from "../hooks/useAdminTask";

const TasksTableBodyItem = ({item,allUsers}) => {
    const {updateTasks,deleteTask}=useAdminTask()
    const {title,description,assignedTo,status,published,deadline}=item
    const assignedUser=allUsers?.filter(item=>item._id==assignedTo)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <tr className="hover:bg-gray-100">
            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{title}</td>
            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{description}</td>
            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{assignedUser[0]?.username?.firstname || ''} {assignedUser[0]?.username?.lastname || ''}</td>
            <td
  className={`px-4 py-2 border border-gray-300 text-sm ${
    status === 'Completed'
      ? 'text-green-600'
      : 'text-gray-700'
  }`}
>
  {status}
</td>

            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{format(new Date(published),"d/M/yyyy")}</td>
            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">{format(new Date(deadline),"d/M/yyyy")}</td>
            <td className="px-4 py-2 border border-gray-300 text-sm text-gray-700">
                <button onClick={openModal} className="px-2 mb-5 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 ml-2">Edit</button>
                <TaskDelegateModal handleAction={updateTasks}  id={item._id} isModalOpen={isModalOpen} closeModal={closeModal} isTask="true"></TaskDelegateModal>
                <button onClick={()=>deleteTask({id:item._id})} className="px-2 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 ml-2">delete</button>
            </td>
        </tr>
    );
};

export default TasksTableBodyItem;