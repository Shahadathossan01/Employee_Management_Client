import { format } from "date-fns";
import { useEmployee } from "../hooks/useEmployee";

const ItemsCard = ({item,filterValue}) => {
    const {updateTaskInProgress,updateTaskToMakeComplete,updateTaskCancel}=useEmployee()
    if(!item) return <h1>Loading.....</h1>
    const {createdAt,deadline,title,description}=item
    return (
        <div className="bg-white shadow-lg rounded-lg p-4 w-full max-w-md md:max-w-sm lg:max-w-xs">
            <div className="mb-4">
                <h1 className="text-sm font-semibold text-gray-700">
                    Published Date: <span className="text-gray-500">{format(createdAt,"dd/MM/yyyy")}</span>
                </h1>
                <h1 className="text-sm font-semibold text-gray-700">
                    Deadline Date: <span className="text-gray-500">{format(deadline,"dd/MM/yyyy")}</span>
                </h1>
            </div>
            <div className="mb-4">
                <h1 className="text-lg font-bold text-gray-800">
                    Title: <span className="font-normal">{title}</span>
                </h1>
                <p className="text-sm text-gray-600">
                    Description: <span>{description}</span>
                </p>
            </div>
            <div className="flex justify-center gap-4">
                {filterValue.new_task &&
                    <div className="flex justify-center gap-4">
                        <button onClick={()=>updateTaskInProgress({id:item._id})} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                            Start in Progress
                        </button>
                        <button onClick={()=>updateTaskCancel({id:item._id})} className="bg-red-800 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
                            Cancel
                        </button>
                    </div>
                }
                {
                    filterValue.completed &&
                    <div>
                        <h3 className="text-center text-green-600 font-bold text-lg">Contratulations</h3>
                        <p>You have successfully completed this task.</p>
                    </div>
                }
                {
                    filterValue.failed &&
                    <div>
                        <h3 className="text-center text-red-600 font-bold text-lg">Sorry for saying this.</h3>
                        <p className="text-red-400 font-bold">Your have not complete this task</p>
                    </div>
                }
                {
                    filterValue.status &&
                    <button onClick={()=>updateTaskToMakeComplete({id:item._id})} className="bg-orange-900 text-white px-4 py-2 rounded hover:bg-orange-800 transition duration-300">Make Complete</button>
                }
            </div>
        </div>
    );
};

export default ItemsCard;
