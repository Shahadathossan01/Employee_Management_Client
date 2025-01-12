import AddUserForm from "./AddUserForm";


const AddUserModal = ({ isModalOpen, closeModal}) => {
  return (
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative mx-4 sm:mx-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 font-bold right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              &times;
            </button>

            {/* Modal Title */}
            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              Create Users...
            </h2>

            {/* Form */}
            <AddUserForm></AddUserForm>

            {/* Close Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddUserModal;
