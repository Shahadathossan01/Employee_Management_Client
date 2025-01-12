import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import AddUserModal from "./AddUserModal";

const AdminHeader = () => {
    const { user } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-indigo-700">Hello...</h1>
                <h1 className="mb-3 font-serif font-bold">
                    {user?.username?.firstname || ''} {user?.username?.lastname || ''}
                </h1>
            </div>
            <div>
            <button onClick={openModal} className="px-4 py-2 bg-black text-white font-semibold rounded-lg shadow-md focus:outline-none">
                Add User
            </button>
            <AddUserModal isModalOpen={isModalOpen} closeModal={closeModal}></AddUserModal>
            </div>
        </div>
    );
};

export default AdminHeader;
