import { useState } from "react";
import TaskDelegateModal from "./TaskDelegationModal";
import { useAdminTask } from "../hooks/useAdminTask";

const TaskDelegateAcion = () => {
    const {createTasks} = useAdminTask();
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
    return (
        <div className="mb-2">
            <button onClick={openModal} className="px-4 py-2 bg-orange-400 text-white font-semibold rounded-lg shadow-md focus:outline-none">
                Delegate Task For Employee
            </button>
            <TaskDelegateModal handleAction={createTasks} isModalOpen={isModalOpen} closeModal={closeModal}></TaskDelegateModal>
        </div>
    );
};

export default TaskDelegateAcion;