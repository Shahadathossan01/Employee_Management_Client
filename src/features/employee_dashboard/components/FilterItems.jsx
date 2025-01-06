const FilterItems = ({handleFilterValue,tasksTotal,filterValue}) => {

    return (
        <div className="flex flex-wrap  md:flex-row justify-between items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-blue-600">{tasksTotal.newTasks}</h1>
                <button
                    onClick={()=>handleFilterValue({new_task:true})}
                    type="button"
                    className={`px-6 py-2 text-lg font-medium text-white ${filterValue.new_task?'bg-green-500 hover:bg-green-700':'bg-gray-500 hover:bg-gray-700 '} rounded-lg shadow focus:outline-none`}
                >
                    New Tasks
                </button>

            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-green-600">{tasksTotal.completed}</h1>
                <button
                    onClick={()=>handleFilterValue({completed:true})}
                    type="button"
                    className={`px-6 py-2 text-lg font-medium text-white ${filterValue.completed?'bg-green-500 hover:bg-green-700':'bg-gray-500 hover:bg-gray-700 '} rounded-lg shadow focus:outline-none `}
                >
                    Completed Tasks
                </button>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-red-600">{tasksTotal.failed}</h1>
                <button
                    onClick={()=>handleFilterValue({failed:true})}
                    type="button"
                    className={`px-6 py-2 text-lg font-medium text-white ${filterValue.failed?'bg-green-500 hover:bg-green-700':'bg-gray-500 hover:bg-gray-700 '} rounded-lg shadow focus:outline-none `}
                >
                    Failed Tasks
                </button>
            </div>
            <div className="text-center">
                <h1 className="text-3xl font-bold text-yellow-800">{tasksTotal.inProgress}</h1>
                <button
                    onClick={()=>handleFilterValue({status:"In Progress"})}
                    type="button"
                    className={`px-6 py-2 text-lg font-medium text-white ${filterValue.status?'bg-green-500 hover:bg-green-700':'bg-gray-500 hover:bg-gray-700 '} rounded-lg shadow focus:outline-none`}
                >
                    In Progress
                </button>
            </div>
        </div>
    );
};

export default FilterItems;
